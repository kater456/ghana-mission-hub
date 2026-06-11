import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Reveal } from "@/hooks/use-reveal";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Feather, Loader2, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useSEO } from "@/hooks/use-seo";

const PILLAR_SLUG: Record<string, string> = {
  "The Word Unpacked": "word",
  "My Story His Glory": "story",
  "Faith Meets Life": "life",
  "Creative Altar": "creative",
  "The Sent Ones": "sent",
};

const FORMSPREE = "https://formspree.io/f/mjgdoroz";

const pillarOptions = [
  "The Word Unpacked",
  "My Story His Glory",
  "Faith Meets Life",
  "Creative Altar",
  "The Sent Ones",
];

const schema = z.object({
  writerName: z.string().trim().min(1, "Required"),
  writerEmail: z.string().trim().email("Invalid email"),
  socialHandle: z.string().trim().optional().or(z.literal("")),
  pillarSelected: z.string().min(1, "Required"),
  articleTitle: z.string().trim().min(1, "Required"),
  excerpt: z.string().trim().min(1, "Required").max(300, "Max 300 characters"),
  fullArticle: z.string().trim().min(1, "Required"),
  authorBio: z.string().trim().min(1, "Required").max(200, "Max 200 characters"),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  writerName: "",
  writerEmail: "",
  socialHandle: "",
  pillarSelected: "",
  articleTitle: "",
  excerpt: "",
  fullArticle: "",
  authorBio: "",
};

const Section = ({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) => (
  <Reveal delay={delay}>
    <Card className="rounded-xl p-6 md:p-8 mb-8 shadow-soft border-border/60 hover:shadow-elevated transition-shadow">
      <h3 className="font-display text-2xl font-bold text-forest mb-6">{title}</h3>
      <div className="space-y-5">{children}</div>
    </Card>
  </Reveal>
);

const Submit = () => {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useSEO({
    title: "Submit Your Piece — The Inkwell | Mission House Ghana",
    description: "Approved Inkwell writers: submit your next article or creative piece for publication.",
    canonical: "https://missionhousegh.lovable.app/submit",
  });

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setData(d => ({ ...d, [k]: v }));

  const wordCount = useMemo(() => {
    const words = data.fullArticle.trim().split(/\s+/).filter(w => w.length > 0);
    return data.fullArticle.trim() ? words.length : 0;
  }, [data.fullArticle]);

  const canSubmit = agreed &&
    data.writerName.trim() &&
    data.writerEmail.trim() &&
    data.pillarSelected &&
    data.articleTitle.trim() &&
    data.excerpt.trim() &&
    data.fullArticle.trim() &&
    data.authorBio.trim() &&
    wordCount >= 400 &&
    data.excerpt.length <= 300 &&
    data.authorBio.length <= 200;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setErrors({});

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }

    if (wordCount < 400) {
      setError("Full article must be at least 400 words.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        "Writer Name": parsed.data.writerName,
        "Writer Email": parsed.data.writerEmail,
        "Social Handle": parsed.data.socialHandle || "—",
        "Pillar Selected": parsed.data.pillarSelected,
        "Article Title": parsed.data.articleTitle,
        "Excerpt": parsed.data.excerpt,
        "Full Article": parsed.data.fullArticle,
        "Author Bio": parsed.data.authorBio,
      };

      // Save to database so it appears in the Inkwell feed automatically
      const { error: dbError } = await supabase.from("inkwell_articles").insert({
        writer_name: parsed.data.writerName,
        writer_email: parsed.data.writerEmail,
        social_handle: parsed.data.socialHandle || null,
        pillar: PILLAR_SLUG[parsed.data.pillarSelected] ?? "word",
        title: parsed.data.articleTitle,
        excerpt: parsed.data.excerpt,
        full_article: parsed.data.fullArticle,
        author_bio: parsed.data.authorBio,
        is_published: true,
      });

      if (dbError) throw dbError;

      // Also notify the team via Formspree (best-effort, non-blocking)
      fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError("Something went wrong. Please email your piece directly to missionhouseintlghana@gmail.com and we'll take it from there.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldCls = "transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-[#C9A84C]/60 focus-visible:shadow-[0_0_0_4px_rgba(201,168,76,0.15)]";

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16 bg-gradient-warm">
        <div className="absolute top-12 right-10 text-[#C9A84C]/30" style={{ animation: "inkwell-bob 5s ease-in-out infinite" }}>
          <Feather className="w-24 h-24 md:w-32 h-32" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">
              Submit Your Next Piece
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg font-sans">
              Welcome back. This form is for approved Inkwell writers submitting a new article or creative piece.
              Haven't applied yet? Start at <a href="https://missionhouseghana.com/apply" className="text-[#C9A84C] hover:underline">missionhouseghana.com/apply</a>
            </p>
          </Reveal>
        </div>
        <style>{`
          @keyframes inkwell-bob { 0%,100% { transform: translateY(0) rotate(-6deg);} 50% { transform: translateY(-14px) rotate(2deg);} }
          @keyframes ink-bounce { 0% { transform: scale(0.7);} 60% { transform: scale(1.15);} 100% { transform: scale(1);} }
          [data-state="checked"] { animation: ink-bounce 0.25s ease-out; }
        `}</style>
      </section>

      {/* FORM SECTION */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <Reveal>
              <Card className="rounded-xl p-10 md:p-14 text-center shadow-elevated bg-white/50 backdrop-blur-sm">
                <div className="text-7xl mb-6">✍️</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-4">Piece received. Thank you.</h2>
                <p className="text-muted-foreground font-sans max-w-xl mx-auto mb-8">
                  We'll review your submission and be in touch within 3–5 days. Keep writing — the world needs your voice.
                </p>
                <Link to="/inkwell" className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] text-earth font-semibold px-10 py-4 hover:scale-105 transition-transform shadow-soft">
                  Back to The Inkwell
                </Link>
              </Card>
            </Reveal>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <Section title="Your details">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="writerName">Full Name *</Label>
                    <Input id="writerName" className={fieldCls} value={data.writerName} onChange={e => set("writerName", e.target.value)} />
                    {errors.writerName && <p className="text-xs text-destructive mt-1">{errors.writerName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="writerEmail">Email Address *</Label>
                    <Input id="writerEmail" type="email" className={fieldCls} value={data.writerEmail} onChange={e => set("writerEmail", e.target.value)} />
                    {errors.writerEmail && <p className="text-xs text-destructive mt-1">{errors.writerEmail}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="socialHandle">Social Media Handle (optional)</Label>
                  <Input id="socialHandle" className={fieldCls} value={data.socialHandle} onChange={e => set("socialHandle", e.target.value)} />
                </div>
              </Section>

              <Section title="Your submission" delay={50}>
                <div>
                  <Label>Which Inkwell pillar? *</Label>
                  <Select value={data.pillarSelected} onValueChange={v => set("pillarSelected", v)}>
                    <SelectTrigger className={fieldCls}><SelectValue placeholder="Select a pillar..." /></SelectTrigger>
                    <SelectContent>{pillarOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                  </Select>
                  {errors.pillarSelected && <p className="text-xs text-destructive mt-1">{errors.pillarSelected}</p>}
                </div>
                <div>
                  <Label htmlFor="articleTitle">Article Title *</Label>
                  <Input id="articleTitle" className={fieldCls} value={data.articleTitle} onChange={e => set("articleTitle", e.target.value)} />
                  {errors.articleTitle && <p className="text-xs text-destructive mt-1">{errors.articleTitle}</p>}
                </div>
                <div>
                  <Label htmlFor="excerpt">Short excerpt *</Label>
                  <Textarea id="excerpt" className={fieldCls} rows={3} value={data.excerpt} onChange={e => set("excerpt", e.target.value)} />
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-muted-foreground font-sans">This is what readers see on the article card. Make it compelling — 1 to 2 sentences.</p>
                    <p className={`text-xs tabular-nums ${data.excerpt.length > 300 ? 'text-destructive' : 'text-muted-foreground'}`}>{data.excerpt.length}/300</p>
                  </div>
                  {errors.excerpt && <p className="text-xs text-destructive mt-1">{errors.excerpt}</p>}
                </div>
                <div>
                  <Label htmlFor="fullArticle">Full article *</Label>
                  <Textarea id="fullArticle" className={fieldCls} rows={12} value={data.fullArticle} onChange={e => set("fullArticle", e.target.value)} />
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-muted-foreground font-sans">Paste your complete article here. Minimum 400 words.</p>
                    <p className={`text-xs tabular-nums ${wordCount < 400 ? 'text-destructive' : 'text-muted-foreground'}`}>{wordCount} words</p>
                  </div>
                  {errors.fullArticle && <p className="text-xs text-destructive mt-1">{errors.fullArticle}</p>}
                </div>
                <div>
                  <Label htmlFor="authorBio">Author bio for this piece *</Label>
                  <Textarea id="authorBio" className={fieldCls} rows={3} value={data.authorBio} onChange={e => set("authorBio", e.target.value)} />
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-muted-foreground font-sans">How should we introduce you? This appears under your published article.</p>
                    <p className={`text-xs tabular-nums ${data.authorBio.length > 200 ? 'text-destructive' : 'text-muted-foreground'}`}>{data.authorBio.length}/200</p>
                  </div>
                  {errors.authorBio && <p className="text-xs text-destructive mt-1">{errors.authorBio}</p>}
                </div>
              </Section>

              <div className="mb-8">
                <label className="flex items-start gap-3 text-sm cursor-pointer group">
                  <Checkbox checked={agreed} onCheckedChange={v => setAgreed(!!v)} className="mt-1 transition-transform data-[state=checked]:scale-110" />
                  <span className="font-sans">This is my original unpublished work and I give Mission House Ghana permission to publish and promote it with full credit to me.</span>
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={submitting || !canSubmit}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] text-earth font-semibold px-10 py-4 text-lg shadow-elevated hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[260px]"
                >
                  {submitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</> : <>Submit My Piece →</>}
                </button>

                {error && (
                  <p className="mt-6 text-sm text-destructive bg-destructive/10 rounded-lg px-4 py-3 flex items-center justify-center gap-2 font-sans">
                    <Mail className="w-4 h-4" /> {error}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Submit;
