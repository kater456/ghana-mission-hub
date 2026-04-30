import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import medicalOutreach from "@/assets/north-trip-medical-outreach-1.jpg";
import medicalDelivery from "@/assets/north-trip-medical-delivery.jpg";
import childrenLeaders from "@/assets/north-trip-children-leaders.jpg";
import eldersMeeting from "@/assets/north-trip-elders-meeting.jpg";
import youthGroup from "@/assets/north-trip-youth-group.jpg";
import eveningGathering from "@/assets/north-trip-evening-gathering.jpg";

const slides = [
  {
    image: medicalOutreach,
    title: "Medical Outreach",
    caption: "Bringing healthcare and the Gospel to communities in Northern Ghana.",
  },
  {
    image: medicalDelivery,
    title: "Medical Delivery",
    caption: "Delivering medicines and care to mothers, children and the elderly.",
  },
  {
    image: childrenLeaders,
    title: "Children Leaders Training",
    caption: "Equipping young leaders for evangelism, follow-up and discipleship.",
  },
  {
    image: eldersMeeting,
    title: "Engaging Community Elders",
    caption: "Sharing the Gospel with village elders and household heads.",
  },
  {
    image: youthGroup,
    title: "Youth Discipleship",
    caption: "Discipling the next generation of believers in the North.",
  },
  {
    image: eveningGathering,
    title: "Evening Worship Gathering",
    caption: "Communities coming together at sunset to hear God's word.",
  },
];

const ROTATION_MS = 5000;

const LatestVisit = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [paused]);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gold font-medium mb-3 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> Latest Visit
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mission Trip to Northern Ghana
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highlights from our most recent outreach — medical missions, supply deliveries, and children leaders training.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-elevated bg-card"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative aspect-[4/3] sm:aspect-video bg-muted">
            {slides.map((slide, i) => (
              <img
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-earth/90 via-earth/50 to-transparent p-6 sm:p-8">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-cream mb-1">
                {slides[index].title}
              </h3>
              <p className="text-cream/90 text-sm sm:text-base max-w-2xl">
                {slides[index].caption}
              </p>
            </div>

            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/80 hover:bg-cream text-earth flex items-center justify-center shadow-soft transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/80 hover:bg-cream text-earth flex items-center justify-center shadow-soft transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 py-4 bg-card">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-gold" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestVisit;
