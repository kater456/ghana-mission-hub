import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Feather, ExternalLink } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const STUDIO_URL = "https://te3mcunp.sanity.studio/";

const Studio = () => {
  useSEO({
    title: "Inkwell Studio — Mission House Ghana",
    description: "Editorial studio for The Inkwell content team.",
  });

  useEffect(() => {
    const t = setTimeout(() => {
      window.location.replace(STUDIO_URL);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <Feather className="w-12 h-12 mx-auto text-[#C9A84C] mb-6 animate-pulse" />
        <h1 className="font-display text-3xl md:text-4xl font-bold text-forest mb-3">
          Opening the Studio…
        </h1>
        <p className="text-muted-foreground mb-8">
          You're being redirected to the editorial workspace.
        </p>
        <a
          href={STUDIO_URL}
          className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] text-earth font-semibold px-8 py-3 shadow-elevated hover:scale-105 transition-transform"
        >
          Continue to Studio <ExternalLink className="w-4 h-4" />
        </a>
        <div className="mt-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-forest underline">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Studio;
