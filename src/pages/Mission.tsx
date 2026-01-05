import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Target, Eye, BookOpen, Globe, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Mission = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth to-earth-light overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-gold font-medium mb-4">Our Purpose</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
            Mission & Vision
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Driven by faith, guided by purpose — discover the heart behind everything we do.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-gold/10 px-4 py-2 rounded-full mb-6">
                <Target className="w-5 h-5 text-gold" />
                <span className="text-gold font-medium">Our Mission</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Taking the Wholistic Gospel to All Nations
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Taking the wholistic gospel of Jesus Christ to all nations of the world by raising, training and sending quality missionaries to all nations through the participation of all Churches and believers worldwide — creating the environment for revivals and discipleship, and helping those who have been set free to serve Him with their gifts and talents.
              </p>
              <blockquote className="border-l-4 border-gold pl-6 py-2">
                <p className="text-foreground italic text-lg">
                  "For though I am free from all, I have made myself a servant to all, that I might win more of them."
                </p>
                <cite className="text-gold font-medium mt-2 block not-italic">— 1 Corinthians 9:19</cite>
              </blockquote>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Mission work"
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-terracotta/10 px-4 py-2 rounded-full mb-6">
              <Eye className="w-5 h-5 text-terracotta" />
              <span className="text-terracotta font-medium">Our Vision</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
              To See Transformed Lives and Communities Rooted in Christ
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              We envision a world where every community has been touched by the love of Christ, where the Gospel has reached the unreached, where the vulnerable are cared for, and where believers are equipped and empowered to serve God with their unique gifts and talents.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">How We Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Strategic Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Reach the Unreached",
                description: "We focus on communities that have not yet heard the Gospel, bringing the message of hope and salvation to the forgotten corners of Ghana and beyond.",
              },
              {
                icon: Users,
                title: "Raise & Train Missionaries",
                description: "We identify, train, and deploy quality missionaries who are equipped to share the Gospel effectively and plant sustainable churches.",
              },
              {
                icon: BookOpen,
                title: "Create Revival Environments",
                description: "We work alongside churches to create environments where spiritual revival can flourish and disciples can be made.",
              },
              {
                icon: Heart,
                title: "Meet Physical Needs",
                description: "We address the practical needs of communities through healthcare, education, and development programs that demonstrate Christ's love.",
              },
              {
                icon: Target,
                title: "Partner Globally",
                description: "We unite churches and believers worldwide in the common mission of spreading the Gospel and serving humanity.",
              },
              {
                icon: Eye,
                title: "Equip for Service",
                description: "We help those who have found freedom in Christ to discover and use their gifts and talents in service to God and others.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Detail */}
      <section className="py-20 bg-gradient-to-r from-gold to-terracotta">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
              Our Core Values
            </h2>
            <p className="text-cream/80 max-w-2xl mx-auto">
              These values form the foundation of everything we do and guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Discipline", description: "Excellence and consistency in service" },
              { title: "Integrity", description: "Honesty in all our dealings" },
              { title: "Respect", description: "Dignity for every person" },
              { title: "Compassion", description: "Love in action for others" },
              { title: "Faith", description: "Trusting God completely" },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-cream/10 backdrop-blur-sm p-6 rounded-2xl text-center"
              >
                <h3 className="font-display text-xl font-bold text-cream mb-2">
                  {value.title}
                </h3>
                <p className="text-cream/80 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Us in This Mission
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Be part of the movement to bring hope, healing, and the love of Christ to communities across Ghana and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/get-involved">
                Get Involved
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">
                View Our Programs
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
