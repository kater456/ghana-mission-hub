import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CalendarDays, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MissionUpdate {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  published_at: string;
}

const MissionUpdates = () => {
  const [updates, setUpdates] = useState<MissionUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdates = async () => {
      const { data, error } = await supabase
        .from("mission_updates")
        .select("id, title, content, image_url, published_at")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(6);

      if (!error && data) {
        setUpdates(data);
      }
      setLoading(false);
    };

    fetchUpdates();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-3">Latest News</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Mission Updates
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-soft animate-pulse">
                <div className="aspect-video bg-muted" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-muted rounded w-1/3" />
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (updates.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold font-medium mb-3">Latest News</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mission Updates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed about what God is doing through our ministry across Ghana and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update) => (
            <article
              key={update.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {update.image_url && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={update.image_url}
                    alt={update.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <CalendarDays className="w-4 h-4" />
                  <time dateTime={update.published_at}>
                    {format(new Date(update.published_at), "MMMM d, yyyy")}
                  </time>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {update.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {update.content}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog">
              View All Updates
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MissionUpdates;
