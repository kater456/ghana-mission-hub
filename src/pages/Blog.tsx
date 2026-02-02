import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import NewsletterSection from "@/components/blog/NewsletterSection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import communityOutreach from "@/assets/community-outreach.jpg";
import medicalOutreach from "@/assets/medical-outreach.jpg";
import worshipService from "@/assets/worship-service.jpg";
import educationProgram from "@/assets/education-program.jpg";
import lawackMissionHouse from "@/assets/lawack-mission-house.jpeg";

const blogPosts = [
  {
    id: 1,
    title: "Breaking Ground in Lawack: Our New Mission House",
    excerpt: "We are excited to share a significant milestone in our mission journey—the establishment of a mission house in Lawack, marking an important step forward in strengthening mission work and community service in the area.",
    date: "January 26, 2026",
    category: "Community Development",
    image: lawackMissionHouse,
    fullContent: `We are excited to share a significant milestone in our mission journey—the establishment of a mission house in Lawack. This project marks an important step forward in strengthening mission work and community service in the area.

The land for this mission house was generously given to us by the local chief. In Lawack, land is traditionally claimed and secured by putting up a structure, and with this understanding, we have taken intentional steps to begin development. This mission house is our first declaration of presence, purpose, and long-term commitment to the community.

**Purpose of the Mission House**

The mission house is designed to serve as accommodation for missionaries, staff, and trainees who come to work in Lawack. It will provide a safe and comfortable place to rest, plan, and store mission resources, enabling those on the field to work more effectively and sustainably.

**Progress So Far**

We have already made encouraging progress. Over two thousand blocks are on the ground, with some cement prepared, signaling our readiness to move forward and hit the ground running. This foundational work sets the stage for a larger vision: in the coming years, we hope to construct a well-equipped auditorium that will host trainings, gatherings, and community-centered programs.

**Future Plans**

In addition, we are planning to establish a clinic on the same land to serve the people of Lawack and surrounding communities, where access to healthcare is limited. This reflects our commitment to holistic mission—caring for both spiritual and physical needs.

**Partner With Us**

As we take these bold steps, we are also seeking support and partnership to help us carry this vision through to completion. With collective effort and shared purpose, this mission house will grow into a center of service, training, and hope for generations to come.

Together, we are not just building structures—we are building a future for Lawack.

*"Unless the Lord builds the house, the builders labor in vain." — Psalm 127:1*`,
  },
  {
    id: 2,
    title: "Bringing Hope & Healing: Our Upcoming Medical Mission Needs Your Support",
    excerpt: "We are preparing for a life-changing medical outreach to underserved communities in Ghana. Your support can help us bring healthcare to those who need it most.",
    date: "January 20, 2026",
    category: "Medical Missions",
    image: medicalOutreach,
    fullContent: `Every year, thousands of people in remote communities across Ghana go without basic healthcare. Many have never seen a doctor in their lives. Children suffer from preventable diseases, mothers give birth without medical assistance, and the elderly endure pain that could easily be treated with proper care.

This is why Mission House Ghana is planning our most ambitious Medical Outreach yet — and we need your help to make it happen.

**Our Vision for This Outreach**

We are preparing to send a team of dedicated medical professionals, including doctors, nurses, pharmacists, and health educators, to reach communities in the Northern and Upper East Regions of Ghana. These are areas where healthcare facilities are scarce, and many families walk for hours just to access basic treatment.

Our goal is to provide:
- Free medical consultations and treatments
- Essential medications and health supplies
- Health education on disease prevention
- Maternal and child health services
- Eye screenings and reading glasses for the elderly

**Why We Need You**

This mission requires resources — medications, transportation, equipment, and logistics. We cannot do this alone. Every contribution, no matter how small, brings us closer to touching a life and transforming a community.

Your gift of **$25** can provide medication for a family. **$50** can cover a child's complete health checkup. **$100** can sponsor transportation for our medical team to reach a remote village.

**Join Us in This Mission**

Will you partner with us to bring hope and healing to those who have been forgotten? Together, we can be the hands and feet of Christ, bringing wholistic care to the body, soul, and spirit.

Click below to donate and be part of this life-saving mission. Every gift matters. Every life counts.

*"Heal the sick... and tell them, 'The kingdom of God has come near to you.'" — Luke 10:9*`,
  },
  {
    id: 3,
    title: "New Church Planted in Northern Ghana",
    excerpt: "After months of evangelism and discipleship in Konkomba and Kusasi lands, a new congregation has been established with 75 founding members.",
    date: "December 10, 2025",
    category: "Church Planting",
    image: worshipService,
  },
  {
    id: 4,
    title: "Back-to-School Campaign Helps 200 Children",
    excerpt: "Our annual education campaign provided school supplies, uniforms, and scholarships to 200 children from low-income families.",
    date: "December 1, 2025",
    category: "Education",
    image: educationProgram,
  },
  {
    id: 5,
    title: "Women's Empowerment Workshop Transforms Lives",
    excerpt: "Thirty women completed our vocational training program, learning skills that will help them support their families.",
    date: "November 25, 2025",
    category: "Community Development",
    image: communityOutreach,
  },
  {
    id: 6,
    title: "Youth Conference Draws Record Attendance",
    excerpt: "Over 1,000 young people gathered for our annual youth conference focused on purpose, faith, and service.",
    date: "November 18, 2025",
    category: "Evangelism",
    image: worshipService,
  },
];

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredPost = blogPosts[0];

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Handle bold text
      const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Handle italic text
      const finalText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
      
      // Check if it's a list
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(item => item.replace('- ', ''));
        return (
          <ul key={index} className="list-disc list-inside space-y-1 my-4 text-muted-foreground">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      }
      
      return (
        <p 
          key={index} 
          className="text-muted-foreground mb-4"
          dangerouslySetInnerHTML={{ __html: finalText }}
        />
      );
    });
  };

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
                src={featuredPost.image}
                alt={featuredPost.title}
                className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover"
              />
              <div className="absolute top-4 left-4 bg-gold text-cream px-4 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gold font-medium">{featuredPost.category}</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {featuredPost.excerpt}
              </p>
              <Button variant="gold" onClick={() => setIsModalOpen(true)}>
                Read Full Story
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Story Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-gold font-medium text-sm">{featuredPost.category}</span>
              <span className="text-muted-foreground text-sm flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {featuredPost.date}
              </span>
            </div>
            <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {featuredPost.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="rounded-xl w-full aspect-video object-cover mb-6"
            />
            <div className="prose prose-lg">
              {featuredPost.fullContent && formatContent(featuredPost.fullContent)}
            </div>
            <div className="mt-8 pt-6 border-t">
              <Link to="/donate">
                <Button variant="gold" size="lg" className="w-full">
                  Support This Mission
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
      <NewsletterSection />
    </div>
  );
};

export default Blog;
