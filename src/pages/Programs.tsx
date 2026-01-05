import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Church, Stethoscope, GraduationCap, HandHeart, Users, Tent } from "lucide-react";
import communityOutreach from "@/assets/community-outreach.jpg";
import medicalOutreach from "@/assets/medical-outreach.jpg";
import worshipService from "@/assets/worship-service.jpg";
import educationProgram from "@/assets/education-program.jpg";

const programs = [
  {
    icon: Church,
    title: "Evangelism & Church Planting",
    description: "We share the Gospel with unreached communities and plant churches that become centers of spiritual transformation and community development.",
    impact: "25+ churches planted",
    image: worshipService,
    details: [
      "Gospel outreach to remote villages",
      "Church planting in unreached areas",
      "Pastor training and support",
      "Discipleship programs",
      "Youth evangelism initiatives",
    ],
  },
  {
    icon: Stethoscope,
    title: "Medical Missions",
    description: "Our healthcare initiatives bring medical services to underserved communities, addressing both physical ailments and spiritual needs.",
    impact: "5,000+ patients served annually",
    image: medicalOutreach,
    details: [
      "Free medical clinics",
      "Health education programs",
      "Maternal and child health services",
      "Disease prevention campaigns",
      "Medical supplies distribution",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    description: "We believe education is key to breaking the cycle of poverty. Our programs support children and youth in their educational journey.",
    impact: "500+ students supported",
    image: educationProgram,
    details: [
      "Scholarship programs",
      "School supplies distribution",
      "After-school tutoring",
      "Vocational training",
      "Adult literacy classes",
    ],
  },
  {
    icon: HandHeart,
    title: "Community Development",
    description: "We empower communities through sustainable development projects that create lasting change and self-sufficiency.",
    impact: "50+ communities reached",
    image: communityOutreach,
    details: [
      "Clean water projects",
      "Agricultural training",
      "Women's empowerment programs",
      "Infrastructure development",
      "Economic empowerment",
    ],
  },
  {
    icon: Users,
    title: "Missionary Training",
    description: "We raise and train the next generation of missionaries who will take the Gospel to the ends of the earth.",
    impact: "100+ missionaries trained",
    image: worshipService,
    details: [
      "Biblical training programs",
      "Cross-cultural ministry training",
      "Leadership development",
      "Practical ministry experience",
      "Ongoing support and mentorship",
    ],
  },
  {
    icon: Tent,
    title: "Disaster Relief",
    description: "When disaster strikes, we respond with immediate aid and long-term recovery support to affected communities.",
    impact: "Rapid response team",
    image: communityOutreach,
    details: [
      "Emergency food and supplies",
      "Temporary shelter provision",
      "Trauma counseling",
      "Community rebuilding",
      "Long-term recovery support",
    ],
  },
];

const Programs = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth to-earth-light overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-gold font-medium mb-4">What We Do</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
            Our Programs
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Through various initiatives, we bring hope, healing, and transformation to communities across Ghana.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-3 bg-gold/10 px-4 py-2 rounded-full mb-6">
                    <program.icon className="w-5 h-5 text-gold" />
                    <span className="text-gold font-medium">{program.impact}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {program.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {program.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="gold">
                    <Link to="/get-involved">
                      Support This Program
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-2xl shadow-elevated w-full"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold to-terracotta rounded-2xl opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Partner With Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Your support enables us to continue these vital programs and reach more communities with hope and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/donate">
                Donate Now
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/partners">
                Become a Partner
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
