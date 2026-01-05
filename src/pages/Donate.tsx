import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ChevronRight, CreditCard, Building, Repeat, Gift } from "lucide-react";
import { useState } from "react";

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth to-earth-light overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-gold font-medium mb-4">Make a Difference</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
            Donate Today
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Your generosity brings hope, healing, and the love of Christ to communities across Ghana.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-elevated">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Choose Your Gift
              </h2>

              {/* Donation Type Toggle */}
              <div className="flex rounded-xl bg-muted p-1 mb-8">
                <button
                  onClick={() => setDonationType("one-time")}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    donationType === "one-time"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Gift className="w-4 h-4 inline mr-2" />
                  One-Time Gift
                </button>
                <button
                  onClick={() => setDonationType("monthly")}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    donationType === "monthly"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Repeat className="w-4 h-4 inline mr-2" />
                  Monthly Giving
                </button>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                      selectedAmount === amount && !customAmount
                        ? "bg-gradient-to-r from-gold to-terracotta text-cream shadow-soft"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">
                    $
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-10 pr-4 py-4 rounded-xl border border-border bg-background text-foreground text-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Impact Message */}
              <div className="bg-gold/10 p-6 rounded-xl mb-8">
                <p className="text-foreground text-center">
                  <span className="font-bold text-gold">
                    ${customAmount || selectedAmount || 0}
                  </span>{" "}
                  {donationType === "monthly" ? "per month " : ""}
                  can provide{" "}
                  {(parseInt(customAmount) || selectedAmount || 0) >= 500
                    ? "medical supplies for an entire village clinic"
                    : (parseInt(customAmount) || selectedAmount || 0) >= 100
                    ? "school supplies for 10 children"
                    : (parseInt(customAmount) || selectedAmount || 0) >= 50
                    ? "meals for a family for a week"
                    : "essential supplies for those in need"}
                </p>
              </div>

              {/* Donate Button */}
              <Button variant="hero" size="xl" className="w-full">
                <Heart className="w-5 h-5" />
                Donate ${customAmount || selectedAmount || 0}
                {donationType === "monthly" ? "/month" : ""}
              </Button>

              {/* Payment Methods */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-muted-foreground text-sm mb-4">
                  Secure payment options
                </p>
                <div className="flex justify-center gap-4">
                  <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                    <CreditCard className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Credit Card</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                    <Building className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Bank Transfer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Give */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Your Impact</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Where Your Donation Goes
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { percent: "35%", label: "Evangelism & Church Planting" },
              { percent: "25%", label: "Medical Missions" },
              { percent: "20%", label: "Education Support" },
              { percent: "20%", label: "Community Development" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft text-center"
              >
                <p className="font-display text-4xl font-bold text-gold mb-2">
                  {item.percent}
                </p>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Other Ways to Give
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Bank Transfer",
                description: "Contact us for our bank account details for direct transfers.",
              },
              {
                title: "Check",
                description: "Mail checks to our office address made payable to Mission House Ghana.",
              },
              {
                title: "Legacy Giving",
                description: "Include Mission House Ghana in your will or estate plans.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft text-center"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/contact">
                    Learn More
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

export default Donate;
