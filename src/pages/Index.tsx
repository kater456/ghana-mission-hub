import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, HandHeart, ChevronRight, BookOpen, Stethoscope, GraduationCap, Church } from "lucide-react";
import heroImage from "@/assets/community-gathering.jpg";
import communityDevelopment from "@/assets/community-development.jpg";
import medicalOutreach from "@/assets/medical-mission-home.jpg";
import worshipService from "@/assets/community-gathering.jpg";
import educationProgram from "@/assets/education-support.jpg";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth/70 via-earth/50 to-earth/80" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-gold font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              Reaching the Unreached in Ghana & Beyond
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
              Transforming Lives Through{" "}
              <span className="text-gold">Faith & Service</span>
            </h1>
            <p className="text-cream/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
              Mission House Ghana is a Christian mission organization focused on reaching unreached people groups in Ghana and beyond with the wholistic Gospel of Jesus Christ.
            </p>
            
            {/* Bible Verse */}
            <blockquote className="text-cream/80 italic text-lg mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
              "For though I am free from all, I have made myself a servant to all, that I might win more of them."
              <cite className="block text-gold mt-2 not-italic font-medium">— 1 Corinthians 9:19</cite>
            </blockquote>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/donate">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/get-involved">
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
          <div className="w-8 h-12 rounded-full border-2 border-cream/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cream/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold font-medium mb-3">Our Mission</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Taking the Wholistic Gospel to All Nations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Taking the wholistic gospel of Jesus Christ to all nations of the world by raising, training and sending quality missionaries to all nations through the participation of all Churches and believers worldwide — creating the environment for revivals and discipleship, and helping those who have been set free to serve Him with their gifts and talents.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Through various programs and initiatives, we bring hope and transformation to unreached people groups across Ghana and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Church,
                title: "Evangelism & Outreach",
                description: "Reaching unreached people groups with the Gospel and planting churches among them.",
                image: worshipService,
              },
              {
                icon: Stethoscope,
                title: "Medical Missions",
                description: "Providing healthcare services and medical outreach to underserved areas.",
                image: medicalOutreach,
              },
              {
                icon: GraduationCap,
                title: "Education Support",
                description: "Supporting children's education and providing scholarships.",
                image: educationProgram,
              },
              {
                icon: HandHeart,
                title: "Community Development",
                description: "Empowering communities through sustainable development projects.",
                image: communityDevelopment,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">
                View All Programs
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-gold to-terracotta">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            {[
              { number: "30+", label: "Years of Service" },
              { number: "Many", label: "Churches Impacted" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-cream mb-2">
                  {stat.number}
                </p>
                <p className="text-cream/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium mb-3">Our Vision</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                To See Transformed Lives & Communities Rooted in Christ
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We envision unreached people groups in Ghana and beyond hearing the Gospel, where the vulnerable are cared for, and where believers are equipped to serve with their gifts and talents.
              </p>
              <div className="space-y-4">
                {[
                  "Discipline",
                  "Integrity",
                  "Respect",
                  "Compassion",
                  "Faith",
                ].map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-gold" />
                    </div>
                    <span className="font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="gold" size="lg" className="mt-8">
                <Link to="/mission">
                  Learn More About Us
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={worshipService}
                alt="Worship service"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-elevated max-w-xs">
                <p className="text-foreground font-display text-lg font-bold mb-2">
                  "The harvest is plentiful, but the laborers are few."
                </p>
                <p className="text-gold font-medium">— Matthew 9:37</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-3">Join Our Mission</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              There Are Many Ways to Get Involved
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Donate",
                description: "Your financial support helps us reach more unreached people groups with the Gospel and provide essential services.",
                link: "/donate",
                linkText: "Make a Donation",
              },
              {
                icon: Users,
                title: "Partner With Us",
                description: "Join as a church partner, corporate sponsor, or individual supporter in our mission work.",
                link: "/partners",
                linkText: "Become a Partner",
              },
              {
                icon: HandHeart,
                title: "Volunteer",
                description: "Use your skills and time to serve on short-term missions or ongoing ministry projects.",
                link: "/get-involved",
                linkText: "Get Involved",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>
                <Button asChild variant="outline">
                  <Link to={item.link}>
                    {item.linkText}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
