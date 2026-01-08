import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Church, Stethoscope, GraduationCap, HandHeart, Users } from "lucide-react";
import communityOutreach from "@/assets/community-outreach.jpg";
import worshipService from "@/assets/worship-service.jpg";
import schoolShoes from "@/assets/school-shoes.jpg";
import schoolChildren from "@/assets/school-children.jpg";

const programs = [
  {
    icon: Church,
    title: "Evangelism & Church Planting",
    description: "We take the Gospel to unreached people groups in northern Ghana and beyond, planting churches among the Konkomba, Kusasi, and other unreached communities.",
    impact: "Many churches planted",
    image: worshipService,
    details: [
      "Gospel outreach to unreached people groups",
      "Church planting among Konkomba & Kusasi",
      "Pastor training and support",
      "Discipleship programs",
      "Reaching new unreached communities",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & Schools",
    description: "We run schools in unreached communities, providing quality education and Christian formation to children who would otherwise have no access to learning.",
    impact: "Schools in unreached areas",
    image: schoolChildren,
    details: [
      "Schools in remote villages",
      "School supplies & uniforms",
      "Teacher training & support",
      "After-school tutoring",
    ],
  },
  {
    icon: HandHeart,
    title: "Community Development",
    description: "We empower unreached communities through sustainable development projects that create lasting change and self-sufficiency.",
    impact: "Multiple communities served",
    image: schoolShoes,
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
    description: "We raise and train missionaries who will take the Gospel to unreached people groups across Ghana and beyond.",
    impact: "Growing missionary team",
    image: communityOutreach,
    details: [
      "Biblical training programs",
      "Cross-cultural ministry training",
      "Leadership development",
      "Practical ministry experience",
      "Ongoing support and mentorship",
    ],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Initiative",
    description: "We have a vision to support unreached communities with healthcare services. This is an area we hope to develop with your partnership.",
    impact: "Future Initiative",
    isFuture: true,
    image: worshipService,
    details: [
      "Medical outreach planning",
      "Health education programs",
      "Maternal and child health",
      "Disease prevention awareness",
      "Partnership opportunities",
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
            Through various initiatives, we bring hope, healing, and transformation to unreached people groups across Ghana and beyond.
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
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 ${
                    (program as any).isFuture ? "bg-terracotta/10" : "bg-gold/10"
                  }`}>
                    <program.icon className={`w-5 h-5 ${(program as any).isFuture ? "text-terracotta" : "text-gold"}`} />
                    <span className={`font-medium ${(program as any).isFuture ? "text-terracotta" : "text-gold"}`}>{program.impact}</span>
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
