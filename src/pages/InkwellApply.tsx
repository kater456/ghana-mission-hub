import { useEffect, useMemo, useState } from "react";
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
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Feather, Mail, Globe2, Loader2, ArrowRight } from "lucide-react";

const FORMSPREE = "https://formspree.io/f/mjgdoroz";

const yearsOptions = ["Less than 1 year", "1–3 years", "3–5 years", "5+ years"];
const pillarOptions = [
  "The Word Unpacked",
  "My Story His Glory",
  "Faith Meets Life",
  "Creative Altar",
  "The Sent Ones",
];

const policies = [
  { t: "Original Work Policy", b: "Your submission must be entirely your own original writing and must not have been previously published anywhere else online or in print." },
  { t: "Doctrinal Standards", b: "All content must be scripturally grounded and aligned with orthodox Christian faith. We do not publish content that promotes false doctrine, prosperity gospel theology, or content that attacks any Christian denomination or tradition." },
  { t: "Editorial Rights", b: "Mission House Ghana reserves the right to lightly edit submissions for clarity, grammar, spelling, and length. We will never alter the writer's core message, voice, or theological position without their knowledge." },
  { t: "Publishing & Promotion Rights", b: "Approved pieces will be published on missionhouseghana.com/inkwell and may be shared across Mission House Ghana's social media platforms including Instagram and TikTok, with full credit and attribution to the writer." },
  { t: "Response Policy", b: "Every application receives a response whether approved or not. We aim to review all submissions within 5–7 working days. Writers whose pieces need revision will receive constructive feedback and an invitation to resubmit." },
];

const schema = z.object({
  fullName: z.string().trim().min(1, "Required").max(120),
  age: z.coerce.number().int().min(10, "Enter a valid age").max(120),
  location: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  bio: z.string().trim().min(1, "Required").max(800),
  social: z.string().trim().max(120).optional().or(z.literal("")),
  years: z.string().min(1, "Required"),
  church: z.string().trim().max(160).optional().or(z.literal("")),
  whyWrite: z.string().trim().min(1, "Required").max(1500),
  pillar: z.string().min(1, "Required"),
  pieceTitle: z.string().trim().min(1, "Required").max(200),
  piece: z.string().trim().min(1, "Required").max(20000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  fullName: "", age: 0 as unknown as number, location: "", email: "", bio: "",
  social: "", years: "", church: "", whyWrite: "", pillar: "", pieceTitle: "", piece: "",
};

const Section = ({ title, subtitle, children, delay = 0 }: { title: string; subtitle?: string; children: React.ReactNode; delay?: number }) => (
  <Reveal delay={delay}>
    <Card className="rounded-xl p-6 md:p-8 mb-8 shadow-soft border-border/60 hover:shadow-elevated transition-shadow">
      <h3 className="font-display text-2xl font-bold text-forest mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}
      {!subtitle && <div className="mb-4" />}
      <div className="space-y-5">{children}</div>
    </Card>
  </Reveal>
);

const InkwellApply = () => {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { document.title = "Apply to Write — The Inkwell"; }, []);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setData(d => ({ ...d, [k]: v }));

  const wordCount = useMemo(() => data.piece.trim() ? data.piece.trim().split(/\s+/).length : 0, [data.piece]);
  const allChecked = agree1 && agree2 && agree3;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      setError("Please fix the highlighted fields above.");
      return;
    }
    setErrors({});
    if (!allChecked) { setError("Please confirm all three agreements."); return; }

    setSubmitting(true);
    try {
      const payload = {
        "Full Name": parsed.data.fullName,
        "Age": parsed.data.age,
        "Country / City": parsed.data.location,
        "Email Address": parsed.data.email,
        "Writer Bio": parsed.data.bio,
        "Social Media Handle": parsed.data.social || "—",
        "Years as Christian": parsed.data.years,
        "Church / Fellowship": parsed.data.church || "—",
        "Why They Write": parsed.data.whyWrite,
        "Inkwell Pillar Selected": parsed.data.pillar,
        "Piece Title": parsed.data.pieceTitle,
        "Sample Writing Piece": parsed.data.piece,
      };
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) setSubmitted(true);
      else throw new Error("send_failed");
    } catch {
      setError("Something didn't go through. Please try again, or email us directly at missionhouseintlghana@gmail.com");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldCls = "transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-[#C9A84C]/60 focus-visible:shadow-[0_0_0_4px_rgba(201,168,76,0.15)]";

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-warm">
        <div className="absolute top-24 right-10 text-[#C9A84C]/30" style={{ animation: "inkwell-bob 5s ease-in-out infinite" }}>
          <Feather className="w-32 h-32 md:w-44 md:h-44" />
        </div>
        <div className="absolute bottom-10 left-10 text-forest/10" style={{ animation: "inkwell-bob 7s ease-in-out infinite reverse" }}>
          <Feather className="w-24 h-24" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <Reveal>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-forest mb-4">
              You have something to say. <span className="text-[#C9A84C]">We're listening.</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg">
              Fill in the form below and send us a sample of your writing. We review every application personally and get back to you within 5–7 days.
            </p>
          </Reveal>
        </div>
        <style>{`
          @keyframes inkwell-bob { 0%,100% { transform: translateY(0) rotate(-6deg);} 50% { transform: translateY(-14px) rotate(2deg);} }
          @keyframes ink-bounce { 0% { transform: scale(0.7);} 60% { transform: scale(1.15);} 100% { transform: scale(1);} }
          [data-state="checked"] { animation: ink-bounce 0.25s ease-out; }
        `}</style>
      </section>

      {/* PROCESS */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { i: "✍️", t: "Fill & Submit", d: "Complete the form and include your sample piece." },
            { i: "📬", t: "We Review", d: "Our editorial team reviews within 5–7 days." },
            { i: "🌍", t: "You're Published", d: "Approved writers get published and promoted." },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 100}>
              <Card className="rounded-xl p-6 text-center hover:-translate-y-2 hover:shadow-elevated transition-all duration-300 h-full">
                <div className="text-4xl mb-3">{s.i}</div>
                <h3 className="font-display text-xl font-bold text-forest mb-1">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORM or CONFIRMATION */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <Reveal>
              <Card className="rounded-xl p-10 md:p-14 text-center shadow-elevated bg-cream-dark/40">
                <div className="text-7xl mb-4">🕊️</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-4">Your words are with us now.</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  We've received your application and will review it carefully. Expect to hear from us within 5–7 days at the email you provided. While you wait — keep writing.
                </p>
                <Link to="/inkwell" className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] text-earth font-semibold px-8 py-3 hover:scale-105 transition-transform shadow-soft">
                  Explore The Inkwell <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            </Reveal>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <Section title="Tell us about yourself">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" className={fieldCls} value={data.fullName} onChange={e => set("fullName", e.target.value)} />
                    {errors.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input id="age" type="number" className={fieldCls} value={data.age || ""} onChange={e => set("age", Number(e.target.value) as any)} />
                    {errors.age && <p className="text-xs text-destructive mt-1">{errors.age}</p>}
                  </div>
                  <div>
                    <Label htmlFor="location">Country / City *</Label>
                    <Input id="location" className={fieldCls} value={data.location} onChange={e => set("location", e.target.value)} />
                    {errors.location && <p className="text-xs text-destructive mt-1">{errors.location}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" className={fieldCls} value={data.email} onChange={e => set("email", e.target.value)} />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio">Your Bio *</Label>
                  <Textarea id="bio" className={fieldCls} rows={4}
                    placeholder="How would you like to be introduced as a writer? Write 2–3 sentences about yourself."
                    value={data.bio} onChange={e => set("bio", e.target.value)} />
                  {errors.bio && <p className="text-xs text-destructive mt-1">{errors.bio}</p>}
                </div>
                <div>
                  <Label htmlFor="social">Instagram, TikTok, or X handle (optional)</Label>
                  <Input id="social" className={fieldCls} value={data.social} onChange={e => set("social", e.target.value)} />
                </div>
              </Section>

              <Section title="Your faith & your voice" delay={50}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label>How long have you been a Christian? *</Label>
                    <Select value={data.years} onValueChange={v => set("years", v)}>
                      <SelectTrigger className={fieldCls}><SelectValue placeholder="Select..." /></SelectTrigger>
                      <SelectContent>{yearsOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                    {errors.years && <p className="text-xs text-destructive mt-1">{errors.years}</p>}
                  </div>
                  <div>
                    <Label htmlFor="church">Church or fellowship name (optional)</Label>
                    <Input id="church" className={fieldCls} value={data.church} onChange={e => set("church", e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="whyWrite">Why do you write? What drives you to put your faith into words? *</Label>
                  <Textarea id="whyWrite" rows={5} className={fieldCls}
                    placeholder="Tell us what writing means to you and why your faith compels you to share it."
                    value={data.whyWrite} onChange={e => set("whyWrite", e.target.value)} />
                  {errors.whyWrite && <p className="text-xs text-destructive mt-1">{errors.whyWrite}</p>}
                </div>
              </Section>

              <Section title="Your sample piece" delay={100}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label>Which Inkwell pillar are you writing for? *</Label>
                    <Select value={data.pillar} onValueChange={v => set("pillar", v)}>
                      <SelectTrigger className={fieldCls}><SelectValue placeholder="Select a pillar..." /></SelectTrigger>
                      <SelectContent>{pillarOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                    {errors.pillar && <p className="text-xs text-destructive mt-1">{errors.pillar}</p>}
                  </div>
                  <div>
                    <Label htmlFor="pieceTitle">Title of your piece *</Label>
                    <Input id="pieceTitle" className={fieldCls} value={data.pieceTitle} onChange={e => set("pieceTitle", e.target.value)} />
                    {errors.pieceTitle && <p className="text-xs text-destructive mt-1">{errors.pieceTitle}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="piece">Your piece *</Label>
                  <Textarea id="piece" rows={14} className={fieldCls}
                    value={data.piece} onChange={e => set("piece", e.target.value)} />
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-muted-foreground">
                      400–1,200 words for articles. No limit for poetry. Don't overthink it — write how you'd talk to a friend about your faith.
                    </p>
                    <p className="text-xs text-muted-foreground tabular-nums">{wordCount} words</p>
                  </div>
                  {errors.piece && <p className="text-xs text-destructive mt-1">{errors.piece}</p>}
                </div>
              </Section>

              <Section title="Before you submit" delay={150}>
                <Accordion type="single" collapsible className="w-full">
                  {policies.map((p, i) => (
                    <AccordionItem key={p.t} value={`p-${i}`}>
                      <AccordionTrigger className="text-left font-display text-forest">{p.t}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{p.b}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="space-y-3 pt-4">
                  <label className="flex items-start gap-3 text-sm cursor-pointer">
                    <Checkbox checked={agree1} onCheckedChange={v => setAgree1(!!v)} className="mt-1" />
                    <span>I have read and agree to the submission guidelines and all policies listed above.</span>
                  </label>
                  <label className="flex items-start gap-3 text-sm cursor-pointer">
                    <Checkbox checked={agree2} onCheckedChange={v => setAgree2(!!v)} className="mt-1" />
                    <span>This piece is entirely my original, unpublished work.</span>
                  </label>
                  <label className="flex items-start gap-3 text-sm cursor-pointer">
                    <Checkbox checked={agree3} onCheckedChange={v => setAgree3(!!v)} className="mt-1" />
                    <span>I give Mission House Ghana permission to publish and promote this piece on their platforms with full credit to me as the author.</span>
                  </label>
                </div>
              </Section>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  disabled={submitting || !allChecked}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] text-earth font-semibold px-10 py-4 text-lg shadow-elevated hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[260px]"
                >
                  {submitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <>Send My Application <ArrowRight className="w-5 h-5" /></>}
                </button>
                <p className="text-xs text-muted-foreground mt-3">
                  We'll be in touch within 5–7 days. Thank you for trusting us with your words.
                </p>
                {error && (
                  <p className="mt-4 text-sm text-destructive bg-destructive/10 rounded-lg px-4 py-3 inline-flex items-center gap-2">
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

export default InkwellApply;
