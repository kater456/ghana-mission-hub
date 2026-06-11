
CREATE TABLE public.inkwell_articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  writer_name TEXT NOT NULL,
  writer_email TEXT NOT NULL,
  social_handle TEXT,
  pillar TEXT NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  full_article TEXT NOT NULL,
  author_bio TEXT NOT NULL,
  cover_image_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT true,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.inkwell_articles TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.inkwell_articles TO authenticated;
GRANT ALL ON public.inkwell_articles TO service_role;

ALTER TABLE public.inkwell_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published inkwell articles"
  ON public.inkwell_articles FOR SELECT
  USING (is_published = true);

CREATE POLICY "Anyone can submit an inkwell article"
  ON public.inkwell_articles FOR INSERT
  WITH CHECK (true);

CREATE INDEX inkwell_articles_published_at_idx ON public.inkwell_articles (published_at DESC);
