import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart, Users, Plane, PenTool, Megaphone, HandHeart } from "lucide-react";
import communityOutreach from "@/assets/community-outreach.jpg";

const GetInvolved = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth to-earth-light overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-gold font-medium mb-4">Join the Mission</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
            Get Involved
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            There are many ways to be part of what God is doing through Mission House Ghana. Find your place in the mission.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Ways to Serve</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How You Can Make a Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Donate",
                description: "Your financial support enables us to continue our vital work in communities across Ghana. Every gift, no matter the size, makes an impact.",
                action: "Give Now",
                link: "/donate",
              },
              {
                icon: HandHeart,
                title: "Volunteer Locally",
                description: "Use your skills and time to support our operations, from administrative tasks to event planning and communications.",
                action: "Apply Today",
                link: "/contact",
              },
              {
                icon: Plane,
                title: "Mission Trips",
                description: "Join a short-term mission trip to Ghana and experience firsthand the work we're doing. Teams serve in various capacities.",
                action: "Learn More",
                link: "/contact",
              },
              {
                icon: Users,
                title: "Church Partnership",
                description: "Connect your church with our mission. We offer partnership opportunities for prayer, support, and team engagement.",
                action: "Partner With Us",
                link: "/partners",
              },
              {
                icon: PenTool,
                title: "Share Your Skills",
                description: "Medical professionals, teachers, builders, and other skilled workers can serve on specialized mission teams.",
                action: "Submit Application",
                link: "/contact",
              },
              {
                icon: Megaphone,
                title: "Spread the Word",
                description: "Be an advocate for our mission. Share our story with your network and help raise awareness about our work.",
                action: "Get Resources",
                link: "/contact",
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
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>
                <Button asChild variant="outline">
                  <Link to={item.link}>
                    {item.action}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Spotlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={communityOutreach}
                alt="Volunteers in action"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gold to-terracotta rounded-2xl opacity-50" />
            </div>
            <div>
              <p className="text-gold font-medium mb-3">Volunteer Stories</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Lives Changed Through Service
              </h2>
              <blockquote className="text-muted-foreground text-lg mb-6 leading-relaxed italic border-l-4 border-gold pl-6">
                "Serving with Mission House Ghana was a life-changing experience. Seeing the joy on children's faces as they received school supplies, and witnessing entire communities come together for prayer — it reminded me of why we're called to serve."
              </blockquote>
              <p className="text-foreground font-medium mb-8">
                — Mission Trip Volunteer, 2023
              </p>
              <Button asChild variant="gold">
                <Link to="/contact">
                  Join Our Next Trip
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Partner */}
      <section className="py-20 bg-gradient-to-r from-gold to-terracotta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
            Become a Prayer Partner
          </h2>
          <p className="text-cream/90 text-lg max-w-2xl mx-auto mb-8">
            Prayer is the foundation of everything we do. Join our prayer network and receive regular updates on specific prayer needs and praise reports.
          </p>
          <Button asChild variant="default" size="lg" className="bg-cream text-earth hover:bg-cream/90">
            <Link to="/contact">
              Sign Up to Pray
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Questions?</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do I need prior mission experience to volunteer?",
                answer: "No prior experience is required! We provide training and orientation for all volunteers. What matters most is a heart to serve and a willingness to learn.",
              },
              {
                question: "How long are the mission trips?",
                answer: "Our mission trips typically range from one to two weeks. We also offer longer-term opportunities for those who feel called to extended service.",
              },
              {
                question: "What costs are involved in a mission trip?",
                answer: "Participants cover their own travel expenses and a trip fee that covers accommodation, meals, and program costs. Many volunteers fundraise to cover these costs.",
              },
              {
                question: "Can I support a specific program?",
                answer: "Yes! You can designate your donation to a specific program such as education, medical missions, or church planting. Contact us to learn more about targeted giving.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Still Have Questions?
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
