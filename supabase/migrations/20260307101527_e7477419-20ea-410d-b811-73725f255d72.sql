
-- Enable pg_net extension for making HTTP requests from triggers
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Create function to notify subscribers when a new mission update is published
CREATE OR REPLACE FUNCTION public.notify_subscribers_on_new_update()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  supabase_url text;
  service_role_key text;
  html_body text;
BEGIN
  -- Only send if the update is published
  IF NEW.is_published = true THEN
    supabase_url := current_setting('app.settings.supabase_url', true);
    service_role_key := current_setting('app.settings.service_role_key', true);

    -- Build HTML email body
    html_body := '<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">'
      || '<h1 style="color: #8B6914; border-bottom: 2px solid #8B6914; padding-bottom: 10px;">' || NEW.title || '</h1>'
      || '<p style="color: #666; font-size: 14px;">Published on ' || to_char(NEW.published_at, 'Month DD, YYYY') || '</p>'
      || '<div style="line-height: 1.8; color: #333; white-space: pre-wrap;">' || NEW.content || '</div>'
      || '<hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">'
      || '<p style="color: #999; font-size: 12px; text-align: center;">Mission House Ghana Newsletter</p>'
      || '</div>';

    -- Call the send-newsletter edge function via pg_net
    PERFORM net.http_post(
      url := supabase_url || '/functions/v1/send-newsletter',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || service_role_key
      ),
      body := jsonb_build_object(
        'subject', 'Mission Update: ' || NEW.title,
        'htmlContent', html_body,
        'fromName', 'Mission House Ghana'
      )
    );
  END IF;
  RETURN NEW;
END;
$$;

-- Create trigger on mission_updates table
CREATE TRIGGER on_new_mission_update
  AFTER INSERT ON public.mission_updates
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_subscribers_on_new_update();
