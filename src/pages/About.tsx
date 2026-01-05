import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart, Users, Shield, Handshake, Lightbulb } from "lucide-react";
import communityOutreach from "@/assets/community-outreach.jpg";
import worshipService from "@/assets/worship-service.jpg";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth to-earth-light overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-gold font-medium mb-4">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
            Our Story & Purpose
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Learn about our journey, our Christian foundation, and our unwavering commitment to serving God and humanity.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium mb-3">Our Journey</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Founded on Faith, Driven by Love
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mission House Ghana was established with a divine calling to take the wholistic Gospel of Jesus Christ to all nations. What began as a small group of dedicated believers has grown into a vibrant mission organization reaching communities across Ghana and beyond.
                </p>
                <p>
                  Our founders recognized that true transformation comes not only through spiritual awakening but also through meeting the practical needs of communities. This understanding led to the development of our comprehensive approach to ministry — one that addresses both the spiritual and physical needs of those we serve.
                </p>
                <p>
                  Today, we continue to build on this foundation, partnering with churches, donors, and volunteers worldwide to expand our reach and deepen our impact. Every life we touch, every community we serve, and every church we plant is a testament to God's faithfulness and the power of collective action.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={communityOutreach}
                alt="Community outreach"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gold to-terracotta rounded-2xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Christian Foundation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-medium mb-3">Our Foundation</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built on the Rock of Christ
            </h2>
            <p className="text-muted-foreground text-lg">
              Our work is rooted in the teachings of Jesus Christ. We believe that lasting transformation comes through the power of the Gospel, and every initiative we undertake is guided by biblical principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                What We Believe
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2" />
                  <span>The Bible as the inspired, infallible Word of God</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2" />
                  <span>Salvation through faith in Jesus Christ alone</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2" />
                  <span>The Great Commission to make disciples of all nations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2" />
                  <span>The power of the Holy Spirit to transform lives</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2" />
                  <span>The call to serve the poor and marginalized</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Our Approach
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-terracotta mt-2" />
                  <span>Wholistic ministry addressing spiritual and physical needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-terracotta mt-2" />
                  <span>Partnership with local churches and communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-terracotta mt-2" />
                  <span>Training and equipping local leaders</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-terracotta mt-2" />
                  <span>Sustainable, community-driven development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-terracotta mt-2" />
                  <span>Accountability and transparency in all operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Our Values</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Principles That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Shield, title: "Discipline", description: "Committed to excellence and consistency in all we do" },
              { icon: Heart, title: "Integrity", description: "Honest and transparent in every action and decision" },
              { icon: Users, title: "Respect", description: "Honoring the dignity of every person we serve" },
              { icon: Handshake, title: "Compassion", description: "Moved by love to meet the needs of others" },
              { icon: Lightbulb, title: "Faith", description: "Trusting God's guidance in all circumstances" },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft text-center group hover:shadow-elevated transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Our Leadership</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Led by Servant Hearts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our leadership team is comprised of dedicated individuals who have answered God's call to serve. They bring years of experience in ministry, community development, and organizational leadership.
            </p>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-soft max-w-3xl mx-auto text-center">
            <img
              src={worshipService}
              alt="Leadership team"
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Leadership Values
            </h3>
            <p className="text-muted-foreground mb-6">
              Our leaders exemplify the values of servanthood modeled by Jesus Christ. They are committed to integrity, accountability, and the spiritual growth of all team members. Through prayer, wisdom, and collaborative decision-making, they guide Mission House Ghana toward fulfilling its divine mandate.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact">
                Connect With Our Team
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
