import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth to-earth-light overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-gold font-medium mb-4">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
            Contact Us
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with questions, partnership inquiries, or prayer requests.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a href="mailto:info@missionhouseghana.org" className="text-muted-foreground hover:text-gold transition-colors">
                      info@missionhouseghana.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <a href="tel:+233000000000" className="text-muted-foreground hover:text-gold transition-colors">
                      +233 (0) 00 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Accra, Ghana<br />
                      West Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9am - 5pm<br />
                      Saturday: 10am - 2pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-muted rounded-2xl h-48 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Map Coming Soon</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 md:p-12 rounded-2xl shadow-elevated">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="donation">Donation Question</option>
                        <option value="volunteer">Volunteer Interest</option>
                        <option value="prayer">Prayer Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full md:w-auto">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quick Answers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Find answers to common questions below, or contact us directly for more information.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How can I donate?",
                answer: "Visit our Donate page to make a secure online donation, or contact us for bank transfer details.",
              },
              {
                question: "How do I join a mission trip?",
                answer: "Fill out the contact form expressing your interest, and our team will reach out with upcoming trip details.",
              },
              {
                question: "Can I sponsor a child?",
                answer: "Yes! Contact us to learn about our child sponsorship program and how you can make a difference.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft text-left"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
