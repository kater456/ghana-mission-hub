import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ChevronRight, CreditCard, Building, Repeat, Gift } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const Donate = () => {
  const [showBankDialog, setShowBankDialog] = useState(false);
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

              {/* Bank Account Details */}
              <div className="bg-gradient-to-r from-gold/10 to-terracotta/10 p-6 rounded-xl border border-gold/20">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-gold" />
                  Bank Transfer Details
                </h3>
                <div className="space-y-3 text-foreground">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Bank:</span>
                    <span className="font-semibold">Agricultural Development Bank (ADB)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Account Number:</span>
                    <span className="font-semibold font-mono">2000156280602</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Account Name:</span>
                    <span className="font-semibold">Eunice Akase</span>
                  </div>
                </div>
              </div>

              {/* International Support */}
              <div className="bg-earth/5 p-6 rounded-xl border border-earth/20 mt-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  🌍 International Donors
                </h3>
                <p className="text-muted-foreground mb-4">
                  If you want to support from outside Ghana, please contact us via WhatsApp for assistance:
                </p>
                <a
                  href="https://wa.me/233262996529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-all w-full"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp: +233 26 299 6529
                </a>
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
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowBankDialog(true)}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details Dialog */}
      <Dialog open={showBankDialog} onOpenChange={setShowBankDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-foreground flex items-center gap-2">
              <Building className="w-5 h-5 text-gold" />
              Cedis Bank Transfer Details
            </DialogTitle>
          </DialogHeader>
          <div className="bg-gradient-to-r from-gold/10 to-terracotta/10 p-6 rounded-xl border border-gold/20">
            <div className="space-y-4 text-foreground">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Bank:</span>
                <span className="font-semibold">ADB</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Account Number:</span>
                <span className="font-semibold font-mono">2000156280602</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Account Name:</span>
                <span className="font-semibold">Erdoo Akase</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Thank you for your generous support!
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Donate;
