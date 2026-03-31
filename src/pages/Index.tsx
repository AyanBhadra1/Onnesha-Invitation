import { MapPin, Calendar, Clock, Sparkles, Heart } from "lucide-react";
import divider from "@/assets/divider.png";
import ScrapbookCollage from "@/components/ScrapbookCollage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto">
        {/* Hero Section */}
        <section className="relative bg-maroon text-primary-foreground px-6 py-12 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--gold))_0%,transparent_50%),radial-gradient(circle_at_70%_30%,hsl(var(--gold))_0%,transparent_40%)]" />
          <div className="relative z-10">
            <p className="font-script text-gold-light text-2xl mb-2">A Radiant Milestone</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-wide mb-1">
              ONNESHA'S 18<sup className="text-lg">TH</sup>
            </h1>
            <img src={divider} alt="" width={300} height={60} className="mx-auto my-4 opacity-80" />
            <p className="font-body text-lg leading-relaxed text-cream opacity-90 max-w-sm mx-auto">
              With joy and pride, we invite you to join us for a grand evening as we celebrate a very special daughter reaching her eighteenth year.
            </p>
          </div>
        </section>

        {/* Scrapbook Photo Collage */}
        <ScrapbookCollage />

        {/* Celebrating Section */}
        <section className="bg-cream px-6 py-10 text-center">
          <Sparkles className="w-6 h-6 text-gold mx-auto mb-3" />
          <h2 className="font-display text-2xl font-bold text-maroon mb-1">CELEBRATING ONNESHA</h2>
          <p className="font-script text-gold text-xl mb-4">The Heart of Our Home & A Bright Future Ahead</p>
          <p className="font-body text-lg text-foreground leading-relaxed">
            Onnesha has always filled our lives with laughter and grace. As she steps into adulthood, we want to honor her journey, her passions, and the wonderful person she has become.
          </p>
        </section>

        {/* Event Invitation */}
        <section className="bg-maroon text-primary-foreground px-6 py-10 text-center">
          <Heart className="w-6 h-6 text-gold-light mx-auto mb-3" />
          <h2 className="font-display text-2xl font-bold mb-1">EVENT INVITATION</h2>
          <p className="font-script text-gold-light text-xl mb-6">A Night of Elegance & Celebration</p>
          <p className="font-body text-lg text-cream/90 mb-6 leading-relaxed">
            Please join us for an evening of dinner and festivities. We look forward to sharing this fabulous occasion with our dearest friends and relatives.
          </p>
          <div className="space-y-4 font-body text-lg">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-gold-light flex-shrink-0" />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Maxim+%26+Moritz+Gastrozentrum+Augsburg+Germany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream underline decoration-gold-light/40 hover:text-gold-light transition-colors cursor-pointer"
                >
                Gemeindezentrum Maria und Martha, Augsburg, Germany
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 text-gold-light flex-shrink-0" />
              <span className="text-cream">May 23rd, 2026</span>
            </div>
          </div>
        </section>

        {/* Message */}
        <section className="bg-cream px-6 py-10 text-center">
          <img src={divider} alt="" width={200} height={40} loading="lazy" className="mx-auto mb-4 opacity-60 w-40" />
          <p className="font-body text-lg text-foreground leading-relaxed italic max-w-sm mx-auto">
            We would be honored to have you stand with us as we toast to Onnesha's future. Let's make this a night she will cherish forever.
          </p>
          <ul className="font-body text-lg text-maroon mt-4 space-y-1 font-semibold">
            <li>• We can't wait to see you there!</li>
          </ul>
        </section>

        {/* Program Itinerary */}
        <section className="bg-maroon-deep text-primary-foreground px-6 py-10">
          <div className="text-center mb-6">
            <Sparkles className="w-6 h-6 text-gold-light mx-auto mb-3" />
            <h2 className="font-display text-2xl font-bold">PROGRAM ITINERARY</h2>
            <p className="font-script text-gold-light text-xl mt-1">A Day of Joy & Celebration</p>
            <p className="font-body text-cream/80 text-base mt-2">
              We have planned a delightful afternoon to honor this special milestone. Please find the schedule of events below:
            </p>
          </div>
          <div className="space-y-4 font-body text-base">
            {[
              { time: "Upto 2 PM", title: "Festive Luncheon", desc: "A grand lunch will be served to welcome our guests." },
              { time: "2 PM – 4 PM", title: "Commencement of Festivities", desc: "The formal celebration and birthday program begins immediately following lunch." },
              { time: "4 PM", title: "The Grand Cake Cutting", desc: "Join us for the highlight of the afternoon as Onnesha cuts her 18th birthday cake." },
              { time: "4 PM onwards", title: "Cultural Performances", desc: "The celebration continues with a special sequence of traditional and contemporary dance performances, culminating in an open floor for all to join the festivities." },
            ].map((item, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-gold-light font-semibold text-base min-w-0">•</span>
                <div>
                  <span className="font-semibold text-cream">{item.time} | {item.title}</span>
                  <p className="text-cream/80 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-maroon px-6 py-8 text-center">
          <p className="font-script text-gold-light text-3xl mb-2">With Love</p>
          <p className="font-body text-cream/80 text-base">The Family of Onnesha</p>
          <img src={divider} alt="" width={150} height={30} loading="lazy" className="mx-auto mt-4 opacity-50 w-28" />
        </footer>
      </div>
    </div>
  );
};

export default Index;
