import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import communityOutreach from "@/assets/community-outreach.jpg";
import medicalOutreach from "@/assets/medical-outreach.jpg";
import worshipService from "@/assets/worship-service.jpg";
import educationProgram from "@/assets/education-program.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Medical Mission Reaches Remote Village in Northern Ghana",
    excerpt: "Our medical team brought healthcare services to over 500 people in a community that had never had access to professional medical care.",
    date: "December 15, 2025",
    category: "Medical Missions",
    image: medicalOutreach,
  },
  {
    id: 2,
    title: "New Church Planted in Kumasi Region",
    excerpt: "After months of evangelism and discipleship, a new congregation has been established with 75 founding members.",
    date: "December 10, 2025",
    category: "Church Planting",
    image: worshipService,
  },
  {
    id: 3,
    title: "Back-to-School Campaign Helps 200 Children",
    excerpt: "Our annual education campaign provided school supplies, uniforms, and scholarships to 200 children from low-income families.",
    date: "December 1, 2025",
    category: "Education",
    image: educationProgram,
  },
  {
    id: 4,
    title: "Women's Empowerment Workshop Transforms Lives",
    excerpt: "Thirty women completed our vocational training program, learning skills that will help them support their families.",
    date: "November 25, 2025",
    category: "Community Development",
    image: communityOutreach,
  },
  {
    id: 5,
    title: "Youth Conference Draws Record Attendance",
    excerpt: "Over 1,000 young people gathered for our annual youth conference focused on purpose, faith, and service.",
    date: "November 18, 2025",
    category: "Evangelism",
    image: worshipService,
  },
  {
    id: 6,
    title: "Clean Water Project Completed in Eastern Region",
    excerpt: "A new borehole now provides clean drinking water to a community of 2,000 people who previously walked miles for water.",
    date: "November 10, 2025",
    category: "Community Development",
    image: communityOutreach,
  },
];

const Blog = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth to-earth-light overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-gold font-medium mb-4">News & Updates</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
            Blog & Stories
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Stay updated with the latest news, stories, and testimonials from the field.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover"
              />
              <div className="absolute top-4 left-4 bg-gold text-cream px-4 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gold font-medium">{blogPosts[0].category}</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {blogPosts[0].excerpt}
              </p>
              <Button variant="gold">
                Read Full Story
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <span className="text-gold font-medium">{post.category}</span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-gold">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Stories
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-gold to-terracotta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
            Stay Connected
          </h2>
          <p className="text-cream/90 text-lg max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for updates, prayer requests, and inspiring stories from the field.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-cream/10 border border-cream/30 text-cream placeholder:text-cream/60 focus:outline-none focus:ring-2 focus:ring-cream/50"
            />
            <Button variant="default" size="lg" className="bg-cream text-earth hover:bg-cream/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
