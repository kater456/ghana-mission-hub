import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SeasonalEvent {
  name: string;
  greeting: string;
  message: string;
  colors: { bg: string; text: string; accent: string; border: string };
  icon: string;
}

const getEasterDate = (year: number): Date => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month, day);
};

const isInRange = (now: Date, start: Date, end: Date) => now >= start && now <= end;

const getCurrentSeason = (): SeasonalEvent | null => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  // Christmas: Dec 20 - Jan 2
  if ((month === 11 && day >= 20) || (month === 0 && day <= 2)) {
    return {
      name: "Christmas",
      greeting: "Merry Christmas! 🎄",
      message: "\"For unto you is born this day in the city of David a Saviour, which is Christ the Lord.\" — Luke 2:11\n\nMay the joy, peace, and love of Christ fill your heart this Christmas season. From all of us at Mission House Ghana, we wish you a blessed celebration!",
      colors: { bg: "bg-red-900", text: "text-green-100", accent: "text-yellow-300", border: "border-red-700" },
      icon: "🎄",
    };
  }

  // Easter: 7 days before to 3 days after
  const easter = getEasterDate(year);
  const easterStart = new Date(easter);
  easterStart.setDate(easter.getDate() - 7);
  const easterEnd = new Date(easter);
  easterEnd.setDate(easter.getDate() + 3);
  if (isInRange(now, easterStart, easterEnd)) {
    // Good Friday check (2 days before Easter)
    const goodFriday = new Date(easter);
    goodFriday.setDate(easter.getDate() - 2);
    const isGoodFridayOrBefore = now < easter && now.getDate() <= goodFriday.getDate() + 1;

    if (now < easter) {
      return {
        name: "Easter",
        greeting: "Holy Week 🕊️",
        message: "\"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.\" — John 3:16\n\nAs we reflect on the sacrifice of our Lord Jesus Christ, may this Holy Week draw you closer to His love and grace.",
        colors: { bg: "bg-purple-900", text: "text-purple-100", accent: "text-purple-300", border: "border-purple-700" },
        icon: "✝️",
      };
    }
    return {
      name: "Easter",
      greeting: "He Is Risen! 🌅",
      message: "\"He is not here; he has risen, just as he said.\" — Matthew 28:6\n\nHappy Easter! We celebrate the resurrection of our Lord Jesus Christ. May His victory over death fill you with hope and eternal joy!",
      colors: { bg: "bg-amber-50", text: "text-amber-900", accent: "text-amber-600", border: "border-amber-300" },
      icon: "🌅",
    };
  }

  // Pentecost: 50 days after Easter
  const pentecost = new Date(easter);
  pentecost.setDate(easter.getDate() + 49);
  const pentecostEnd = new Date(pentecost);
  pentecostEnd.setDate(pentecost.getDate() + 2);
  if (isInRange(now, pentecost, pentecostEnd)) {
    return {
      name: "Pentecost",
      greeting: "Happy Pentecost! 🔥",
      message: "\"And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance.\" — Acts 2:4\n\nMay the power of the Holy Spirit renew and strengthen you today!",
      colors: { bg: "bg-red-800", text: "text-orange-100", accent: "text-yellow-400", border: "border-red-600" },
      icon: "🔥",
    };
  }

  // Advent: Dec 1-19
  if (month === 11 && day >= 1 && day <= 19) {
    return {
      name: "Advent",
      greeting: "Blessed Advent Season 🕯️",
      message: "\"The people walking in darkness have seen a great light; on those living in the land of deep darkness a light has dawned.\" — Isaiah 9:2\n\nAs we prepare our hearts for the coming of our Saviour, may this Advent season fill you with hope and expectation.",
      colors: { bg: "bg-indigo-900", text: "text-indigo-100", accent: "text-violet-300", border: "border-indigo-700" },
      icon: "🕯️",
    };
  }

  // Palm Sunday: 1 week before Easter (already covered in Holy Week above)

  // Ascension: 40 days after Easter
  const ascension = new Date(easter);
  ascension.setDate(easter.getDate() + 39);
  if (now.getMonth() === ascension.getMonth() && now.getDate() === ascension.getDate()) {
    return {
      name: "Ascension",
      greeting: "Ascension Day ☁️",
      message: "\"He was taken up before their very eyes, and a cloud hid him from their sight.\" — Acts 1:9\n\nToday we celebrate the ascension of our Lord Jesus Christ to heaven. He reigns forever!",
      colors: { bg: "bg-sky-900", text: "text-sky-100", accent: "text-sky-300", border: "border-sky-700" },
      icon: "☁️",
    };
  }

  return null;
};

const SeasonalPopup = () => {
  const [open, setOpen] = useState(false);
  const [season, setSeason] = useState<SeasonalEvent | null>(null);

  useEffect(() => {
    const currentSeason = getCurrentSeason();
    if (!currentSeason) return;

    const dismissKey = `seasonal-popup-dismissed-${currentSeason.name}-${new Date().getFullYear()}`;
    const dismissed = sessionStorage.getItem(dismissKey);
    if (dismissed) return;

    setSeason(currentSeason);
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!season) return null;

  const handleClose = () => {
    setOpen(false);
    const dismissKey = `seasonal-popup-dismissed-${season.name}-${new Date().getFullYear()}`;
    sessionStorage.setItem(dismissKey, "true");
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className={`${season.colors.bg} ${season.colors.border} border-2 p-0 max-w-md sm:max-w-lg overflow-hidden`}>
        <div className="relative p-8 text-center">
          <button
            onClick={handleClose}
            className={`absolute top-3 right-3 ${season.colors.text} opacity-70 hover:opacity-100 transition-opacity`}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-5xl mb-4">{season.icon}</div>

          <h2 className={`font-display text-2xl md:text-3xl font-bold ${season.colors.accent} mb-4`}>
            {season.greeting}
          </h2>

          <p className={`${season.colors.text} text-sm md:text-base leading-relaxed whitespace-pre-line mb-6`}>
            {season.message}
          </p>

          <p className={`${season.colors.text} opacity-70 text-xs`}>
            — Mission House Ghana
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SeasonalPopup;
