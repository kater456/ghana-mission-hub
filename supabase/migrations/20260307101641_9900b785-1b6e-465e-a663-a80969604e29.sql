
CREATE OR REPLACE FUNCTION public.notify_subscribers_on_new_update()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  html_body text;
BEGIN
  IF NEW.is_published = true THEN
    html_body := '<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">'
      || '<h1 style="color: #8B6914; border-bottom: 2px solid #8B6914; padding-bottom: 10px;">' || NEW.title || '</h1>'
      || '<p style="color: #666; font-size: 14px;">Published on ' || to_char(NEW.published_at, 'Month DD, YYYY') || '</p>'
      || '<div style="line-height: 1.8; color: #333; white-space: pre-wrap;">' || NEW.content || '</div>'
      || '<hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">'
      || '<p style="color: #999; font-size: 12px; text-align: center;">Mission House Ghana Newsletter</p>'
      || '</div>';

    PERFORM net.http_post(
      url := 'https://trpynjpjofeoynjbfrud.supabase.co/functions/v1/send-newsletter',
      headers := '{"Content-Type": "application/json"}'::jsonb,
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
