
CREATE TABLE public.mission_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  published_at timestamp with time zone NOT NULL DEFAULT now(),
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.mission_updates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published mission updates"
ON public.mission_updates
FOR SELECT
USING (is_published = true);
