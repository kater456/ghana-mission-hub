import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Reveal } from "@/hooks/use-reveal";
import { BookOpen, Pencil, Globe2, Drama, Flame, Clock, ArrowRight, Feather } from "lucide-react";
import { client, urlFor } from "@/lib/sanityClient";

const ARTICLES_QUERY = `*[_type == "article"] |
order(publishedAt desc) {
  _id,
  title,
  slug,
  pillar,
  excerpt,
  coverImage,
  author,
  authorPhoto,
  readTime,
  publishedAt
}`

const pillars = [
  { id: "word", emoji: "📖", icon: BookOpen, title: "The Word, Unpacked", desc: "Bible reflections and devotionals made relatable." },
  { id: "story", emoji: "✍️", icon: Pencil, title: "My Story, His Glory", desc: "Personal testimonies and faith journeys." },
  { id: "life", emoji: "🌍", icon: Globe2, title: "Faith Meets Life", desc: "Social issues through a Christian worldview." },
  { id: "creative", emoji: "🎭", icon: Drama, title: "Creative Altar", desc: "Poetry, spoken word, short fiction rooted in scripture." },
  { id: "sent", emoji: "🔥", icon: Flame, title: "The Sent Ones", desc: "Mission, evangelism, and reaching unreached communities." },
];

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;
const av = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=200&q=70`;

const contributors = [
  { name: "Ama Boateng", pillar: "The Word, Unpacked", bio: "Theology student writing devotionals for restless souls.", avatar: "photo-1531123897727-8f129e1688ce" },
  { name: "Selorm Akoto", pillar: "My Story, His Glory", bio: "Once a skeptic, now writing the testimony he never expected.", avatar: "photo-1521119989659-a83eee488004" },
  { name: "Esi Donkor", pillar: "Faith Meets Life", bio: "Journalist asking honest questions about faith in public.", avatar: "photo-1487412720507-e7ab37603c6f" },
  { name: "Yaa Asantewaa", pillar: "Creative Altar", bio: "Poet who writes psalms for Tuesdays and tired hearts.", avatar: "photo-1524504388940-b1c1722653e1" },
  { name: "Pastor Daniel", pillar: "The Sent Ones", bio: "Reflections from the field, written between long drives north.", avatar: "photo-1507003211169-0a1dd7228f2d" },
  { name: "Adwoa Frimpong", pillar: "My Story, His Glory", bio: "Writing the long way home — one chapter at a time.", avatar: "photo-1438761681033-6461ffad8d80" },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-6px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)"; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`transition-transform duration-300 ease-out will-change-transform ${className}`}>
      {children}
    </div>
  );
}

const Inkwell = () => {
  const [activePillar, setActivePillar] = useState<string>("all");
  const [sanityArticles, setSanityArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "The Inkwell — Mission House Ghana";

    const fetchArticles = async () => {
      try {
        const data = await client.fetch(ARTICLES_QUERY);
        setSanityArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); };
  }, []);

  const filtered = activePillar === "all" ? sanityArticles : sanityArticles.filter(a => a.pillar === activePillar);
  const [featured, ...rest] = filtered;
  const pillarLabel = (id: string) => pillars.find(p => p.id === id)?.title ?? "";

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(120deg, hsl(var(--forest)) 0%, hsl(var(--forest-light)) 40%, #FAF7F2 100%)",
            backgroundSize: "200% 200%",
            animation: "inkwell-grad 14s ease-in-out infinite",
          }}
        />
        {/* particles */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-[#C9A84C]/60 blur-[2px]"
              style={{
                width: `${4 + (i % 5) * 2}px`,
                height: `${4 + (i % 5) * 2}px`,
                left: `${(i * 53) % 100}%`,
                bottom: `-20px`,
                animation: `inkwell-float ${10 + (i % 7)}s linear ${i * 0.6}s infinite`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        <div
          className="container mx-auto px-4 text-center text-cream"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        >
          <Reveal>
            <p className="uppercase tracking-[0.3em] text-[#C9A84C] text-xs md:text-sm mb-4">Mission House Ghana presents</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 drop-shadow-md">The Inkwell</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-display italic text-2xl md:text-3xl text-[#C9A84C] mb-6">Young voices. Deep faith. Real words.</p>
          </Reveal>
          <Reveal delay={300}>
            <p className="max-w-2xl mx-auto text-cream/90 text-base md:text-lg mb-10">
              A space where Christian youth turn their faith, stories, and convictions into writing that reaches the world.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => feedRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full bg-[#C9A84C] hover:bg-[#b59437] text-earth font-semibold px-8 py-3 shadow-elevated transition-all hover:scale-105"
              >
                Read Latest
              </button>
              <Link
                to="/inkwell/apply"
                className="rounded-full border-2 border-cream text-cream font-semibold px-8 py-3 hover:bg-cream/10 transition-all hover:scale-105"
              >
                Apply to Write
              </Link>
            </div>
          </Reveal>
        </div>

        <style>{`
          @keyframes inkwell-grad {
            0%,100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes inkwell-float {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 0.8; }
            100% { transform: translateY(-110vh) translateX(40px); opacity: 0; }
          }
          @keyframes inkwell-shimmer {
            0% { transform: translateX(-100%) skewX(-20deg); }
            100% { transform: translateX(200%) skewX(-20deg); }
          }
          @keyframes inkwell-bob {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
        `}</style>
      </section>

      {/* PILLARS */}
      <section className="py-20 container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-3">What We Write About</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Five pillars. One conviction: that faith deserves great writing.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <Card
                onClick={() => { setActivePillar(p.id); feedRef.current?.scrollIntoView({ behavior: "smooth" }); }}
                className="rounded-xl p-6 cursor-pointer bg-card border-border/60 hover:-translate-y-2 hover:shadow-elevated transition-all duration-300 group h-full"
              >
                <div className="text-4xl mb-3">{p.emoji}</div>
                <h3 className="font-display text-xl font-bold text-forest mb-2 group-hover:text-[#C9A84C] transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ARTICLES FEED */}
      <section ref={feedRef} className="py-20 bg-cream-dark/40">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-forest">Latest from The Inkwell</h2>
                <p className="text-muted-foreground mt-2">Filter by pillar to find a voice that meets you today.</p>
              </div>
            </div>
          </Reveal>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[{ id: "all", title: "All" }, ...pillars].map(t => (
              <button
                key={t.id}
                onClick={() => setActivePillar(t.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activePillar === t.id
                    ? "bg-forest text-cream shadow-soft"
                    : "bg-cream border border-border text-foreground hover:border-forest hover:text-forest"
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="space-y-8">
              <Skeleton className="h-80 w-full rounded-xl" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-96 rounded-xl" />)}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center">
              <Reveal>
                <div className="flex flex-col items-center justify-center">
                  <Feather className="w-16 h-16 text-[#C9A84C] mb-6 animate-bounce" />
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-forest mb-4">
                    The Inkwell is just getting started.
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-md mx-auto">
                    Check back soon — great writing is on its way.
                  </p>
                </div>
              </Reveal>
            </div>
          ) : (
            <>
              {featured && (
                <Reveal>
                  <Card className="rounded-xl overflow-hidden grid md:grid-cols-2 mb-10 hover:-translate-y-1 hover:shadow-elevated transition-all duration-300">
                    <div className="relative h-72 md:h-auto overflow-hidden">
                      <img src={urlFor(featured.coverImage).width(800).url()} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                      <Badge className="absolute top-4 left-4 bg-[#C9A84C] text-earth hover:bg-[#C9A84C]">Featured · {pillarLabel(featured.pillar)}</Badge>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-forest mb-4">{featured.title}</h3>
                      <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
                      <div className="flex items-center gap-3 mb-6">
                        <img src={urlFor(featured.authorPhoto).width(100).url()} alt={featured.author} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <p className="font-semibold text-foreground">{featured.author}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime} min read</p>
                        </div>
                      </div>
                      <Button variant="forest" className="rounded-full self-start">Read More <ArrowRight className="w-4 h-4" /></Button>
                    </div>
                  </Card>
                </Reveal>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {rest.map((a) => (
                  <Reveal key={a._id} delay={100}>
                    <Card className="rounded-xl overflow-hidden h-full flex flex-col hover:-translate-y-2 hover:shadow-elevated transition-all duration-300 group">
                      <div className="relative h-48 overflow-hidden">
                        <img src={urlFor(a.coverImage).width(800).url()} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <Badge className="absolute top-3 left-3 bg-forest text-cream hover:bg-forest">{pillarLabel(a.pillar)}</Badge>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-display text-xl font-bold text-forest mb-2 line-clamp-2">{a.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{a.excerpt}</p>
                        <div className="flex items-center gap-3 mb-4">
                          <img src={urlFor(a.authorPhoto).width(100).url()} alt={a.author} className="w-10 h-10 rounded-full object-cover" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">{a.author}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{a.readTime} min</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-full self-start">Read More</Button>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CONTRIBUTORS */}
      <section className="py-20 container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-3">Voices of The Inkwell</h2>
            <p className="text-muted-foreground">The young writers carrying these words.</p>
          </div>
        </Reveal>
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-4 px-4">
          {contributors.map((c, i) => (
            <Reveal key={c.name} delay={i * 60} className="shrink-0 snap-start">
              <TiltCard className="w-72">
                <Card className="rounded-xl p-6 text-center bg-card border-border/60 hover:shadow-elevated group relative overflow-hidden">
                  <img src={av(c.avatar)} alt={c.name} className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-[#C9A84C]/30 mb-4" />
                  <h3 className="font-display text-xl font-bold text-forest">{c.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-[#C9A84C] mb-3">{c.pillar}</p>
                  <p className="text-sm text-muted-foreground mb-4">{c.bio}</p>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-forest text-cream text-sm font-semibold px-5 py-2">
                    View Profile
                  </button>
                </Card>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-forest text-cream py-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(110deg, transparent 30%, rgba(201,168,76,0.25) 50%, transparent 70%)",
            animation: "inkwell-shimmer 6s ease-in-out infinite",
          }}
        />
        <div className="container mx-auto px-4 text-center relative">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Got something to say? <span className="text-[#C9A84C]">We want to hear it.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-2xl mx-auto text-cream/90 mb-8 text-lg">
              The Inkwell is looking for the next generation of Christian writers. If you have faith and a voice, the rest we can figure out together.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/inkwell/apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] text-earth font-semibold px-10 py-4 shadow-elevated hover:scale-105 transition-transform"
            >
              Apply to Write <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Inkwell;
