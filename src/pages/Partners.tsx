import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Church, Building, Users, Heart, Globe, Handshake } from "lucide-react";

const Partners = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth to-earth-light overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-gold font-medium mb-4">Partners & Donors</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
            Together in Mission
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Our work is made possible through the generous support of partners and donors who share our vision.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-medium mb-3">Why Partner With Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Partnership Makes a Difference
            </h2>
            <p className="text-muted-foreground text-lg">
              When you partner with Mission House Ghana, you become part of a movement that is transforming lives and communities through the power of the Gospel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Kingdom Impact",
                description: "Your support directly funds evangelism, church planting, and discipleship programs reaching the unreached.",
              },
              {
                icon: Heart,
                title: "Humanitarian Care",
                description: "Partner funds enable medical missions, education support, and community development initiatives.",
              },
              {
                icon: Users,
                title: "Sustainable Change",
                description: "We focus on long-term transformation, training local leaders who continue the work for generations.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft text-center group hover:shadow-elevated transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-8 h-8 text-gold" />
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

      {/* Partnership Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Ways to Partner</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Partnership Level
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Church,
                type: "Church Partners",
                description: "Churches that commit to praying for, supporting, and sending team members to our mission field.",
                benefits: [
                  "Regular ministry updates",
                  "Prayer partnership",
                  "Mission trip opportunities",
                  "Speaker availability",
                  "Resource sharing",
                ],
              },
              {
                icon: Building,
                type: "Corporate Partners",
                description: "Businesses and organizations that support our work through financial contributions and in-kind donations.",
                benefits: [
                  "Corporate recognition",
                  "Impact reports",
                  "Employee engagement opportunities",
                  "CSR partnership",
                ],
              },
              {
                icon: Handshake,
                type: "Individual Donors",
                description: "Individuals who give regularly or as one-time contributions to support our various programs.",
                benefits: [
                  "Monthly newsletters",
                  "Personal updates",
                  "Prayer requests",
                  "Annual impact report",
                  "Giving statements",
                ],
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all border-t-4 border-gold"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <partner.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {partner.type}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {partner.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {partner.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">
                    Become a Partner
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium mb-3">Our Commitment</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Accountability & Transparency
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We are committed to the highest standards of financial integrity and accountability. Every donation is handled with care and used efficiently to maximize impact.
              </p>
              <ul className="space-y-4">
              {[
                  "Regular financial reporting",
                  "Transparent fund allocation",
                  "Direct communication with donors",
                  "Measurable impact metrics",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-forest" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-elevated">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
                Your Donation at Work
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Programs & Ministry", percent: 75 },
                  { label: "Administration", percent: 15 },
                  { label: "Fundraising", percent: 10 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{item.label}</span>
                      <span className="text-gold font-bold">{item.percent}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gold to-terracotta rounded-full"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join the growing family of partners who are making a difference in the lives of communities across Ghana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/donate">
                Donate Now
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
