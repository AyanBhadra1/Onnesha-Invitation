import { useState } from "react";
import { MapPin, Calendar, Clock, Sparkles, Heart } from "lucide-react";
import divider from "@/assets/divider.png";
import ScrapbookCollage from "@/components/ScrapbookCollage";

const Index = () => {
  const [isBangla, setIsBangla] = useState(false);
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
          <h2 className="font-display text-2xl font-bold text-maroon mb-1 uppercase">Celebrating Onnesha's 18th Birthday</h2>
          <p className="font-script text-gold text-xl mb-4">The Heart of Our Home & A Bright Future Ahead</p>
          <p className="font-body text-lg text-foreground leading-relaxed">
            Onnesha has always filled our lives with laughter and grace. As she steps into adulthood, we want to honor her journey, her passions, and the wonderful person she has become.
          </p>
        </section>

        {/* Event Invitation */}
        <section className="bg-maroon text-primary-foreground px-6 py-10 text-center">
          <Heart className="w-6 h-6 text-gold-light mx-auto mb-3" />
          <h2 className="font-display text-2xl font-bold mb-1 uppercase">Event Invitation</h2>
          <p className="font-script text-gold-light text-xl mb-6">A Night of Elegance & Celebration</p>
          <p className="font-body text-lg text-cream/90 mb-6 leading-relaxed">
            Please join us for an evening of dinner and festivities. We look forward to sharing this fabulous occasion with our dearest friends and relatives.
          </p>
          <div className="space-y-4 font-body text-lg">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-gold-light flex-shrink-0" />
              <a 
                href="https://maps.google.com/?cid=4272021748545770113&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream underline decoration-gold-light/40 hover:text-gold-light transition-colors cursor-pointer"
                >
                Gemeindezentrum Maria und Martha, Augsburg, Germany
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 text-gold-light flex-shrink-0" />
              <span className="text-cream">Saturday, May 23rd, 2026</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-gold-light flex-shrink-0" />
              <span className="text-cream">Starting at 12:30 PM</span>
            </div>

            {/* Moderators */}
            <div className="pt-4 border-t border-gold-light/20 mt-4 text-center">
              <p className="text-gold-light font-script text-xl mb-1">Moderators:</p>
              <p className="text-cream font-semibold tracking-wide">Shagor & Viola</p>
            </div>
          </div>
        </section>

        {/* Message */}
        <section className="bg-cream px-6 py-10 text-center">
          <img src={divider} alt="" width={200} height={40} loading="lazy" className="mx-auto mb-4 opacity-60 w-40" />
          <p className="font-body text-lg text-foreground leading-relaxed italic max-w-sm mx-auto">
            We would be honored to have you stand with us as we toast to Onnesha's future. Let's make this a night she will cherish forever.
          </p>
          <ul className="font-body text-lg text-maroon mt-4 space-y-1 font-semibold list-none">
            <li>• We can't wait to see you there!</li>
          </ul>
        </section>

        {/* Program Itinerary */}
        <section className="bg-maroon-deep text-primary-foreground px-6 py-10">
          <div className="text-center mb-8">
            <Sparkles className="w-6 h-6 text-gold-light mx-auto mb-3" />
            <h2 className="font-display text-2xl font-bold tracking-widest uppercase">
              {isBangla ? "অনুষ্ঠানসূচী" : "Program Schedule"}
            </h2>
            <button 
              onClick={() => setIsBangla(!isBangla)}
              className="mt-4 px-6 py-2 border-2 border-gold-light text-gold-light rounded-full text-sm font-bold active:scale-95 transition-all bg-maroon/20"
            >
              {isBangla ? "VIEW IN ENGLISH" : "বাংলায় দেখুন"}
            </button>
            <p className="font-script text-gold-light text-xl mt-1">A Day of Joy & Celebration</p>
          </div>

          <div className="space-y-8 relative border-l border-gold-light/20 ml-4 pl-6">
            
            {/* 12:30 PM - Welcome */}
            <div className="relative">
              <div className="absolute -left-[35px] mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-gold-light" />
              <div className="font-bold text-cream">12:30 PM</div>
              <div className="text-gold-light font-semibold uppercase tracking-tight">
                {isBangla ? "অভ্যর্থনা ও আপ্যায়ন" : "Welcome Greeting"}
              </div>
              <p className="text-cream/70 text-sm mt-1">
                {isBangla ? "আমন্ত্রিত অতিথিদের সাদর অভ্যর্থনা।" : "A warm reception for our arriving guests."}
              </p>
            </div>

            {/* 1:00 PM - Lunch */}
            <div className="relative">
              <div className="absolute -left-[35px] mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-gold-light" />
              <div className="font-bold text-cream">1:00 PM</div>
              <div className="text-gold-light font-semibold uppercase tracking-tight">
                {isBangla ? "প্রীতিভোজ" : "Festive Luncheon"}
              </div>
              <p className="text-cream/70 text-sm mt-1">
                {isBangla ? "বন্ধু-বান্ধব ও আত্মীয়-স্বজনের সাথে মধ্যাহ্নভোজ।" : "A grand lunch shared with friends and family."}
              </p>
            </div>

            {/* 2:30 PM - Show Program */}
            <div className="relative">
              <div className="absolute -left-[35px] mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-gold-light" />
              <div className="font-bold text-cream">2:30 PM</div>
              <div className="text-gold-light font-semibold mb-3 uppercase tracking-tighter">
                {isBangla ? "সাংস্কৃতিক অনুষ্ঠান" : "Grand Show Program"}
              </div>
              <div className="space-y-3 text-sm border-l border-gold-light/30 pl-4 ml-1">
                <div><span className="text-gold-light font-medium">{isBangla ? "উদ্বোধনী নৃত্য:" : "Opening Dance:"}</span> <span className="text-cream">{isBangla ? "ময়ূরী — মেডলি (ও রে প্রিয়া)" : "Moyuri — Medley (O Re Priya)"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "সংগীত:" : "Vocal:"}</span> <span className="text-cream">{isBangla ? "পরিবারের সদস্যদের পরিবেশনায় — আনন্দলোকে" : "Extended Family — Anondo Lokee"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "শুভেচ্ছা বক্তব্য:" : "Speech:"}</span> <span className="text-cream">{isBangla ? "বাবা-মায়ের বক্তব্য" : "Message from Parents"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "ভরতনাট্যম নৃত্য:" : "Bharatanatyam:"}</span> <span className="text-cream">{isBangla ? "রিচা কুমারী" : "Richa Kumari"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "সংগীত:" : "Vocal:"}</span> <span className="text-cream">{isBangla ? "সৈকত আঙ্কেল" : "Saikat Uncle"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "যুগল নৃত্য:" : "Dance:"}</span> <span className="text-cream">{isBangla ? "সাইমা ও অনন্যা — মেডলি" : "Saima & Onnesha — Medley"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "বেহালা বাদন:" : "Violin:"}</span> <span className="text-cream">{isBangla ? "শ্রুতি" : "Shruti"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "নৃত্য:" : "Dance:"}</span> <span className="text-cream">{isBangla ? "অদিতি  চাচি ও টুপুর" : "Auditi Aunty & Tupur"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "সংগীত:" : "Vocal:"}</span> <span className="text-cream">{isBangla ? "টুলটুল" : "Tultul"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "নৃত্য:" : "Dance:"}</span> <span className="text-cream">{isBangla ? "সোহেলী কাকি" : "Soheli Aunty"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "বক্তব্য:" : "Speech:"}</span> <span className="text-cream">{isBangla ? "গাব্রিয়েলা ও বিশেষ অতিথি" : "Gabriele & Special Guest"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "নৃত্য:" : "Dance:"}</span> <span className="text-cream">{isBangla ? "ময়ূরী — মেডলি" : "Moyuri — Medley"}</span></div>
                <div><span className="text-gold-light font-medium">{isBangla ? "চমক:" : "Surprise:"}</span> <span className="text-cream">{isBangla ? "গেম ও আনন্দ আয়োজন" : "Interactive Dance & Games"}</span></div>
              </div>
            </div>

            {/* 4:15 PM - Cake */}
            <div className="relative">
              <div className="absolute -left-[35px] mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-gold-light" />
              <div className="font-bold text-cream">4:15 PM</div>
              <div className="text-gold-light font-semibold uppercase">
                {isBangla ? "কেক কাটা ও কফি আপ্যায়ন" : "Cake Cutting & Coffee"}
              </div>
              <p className="text-cream/70 text-sm mt-1">
                {isBangla ? "১৮তম জন্মদিনের কেক কাটা ও সবার সাথে মিষ্টিমুখ।" : "Celebrating the milestone with sweets and shared joy."}
              </p>
            </div>

            {/* Afterwards - Dancing */}
            <div className="relative">
              <div className="absolute -left-[35px] mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-gold-light" />
              <div className="font-bold text-cream">Afterwards</div>
              <div className="text-gold-light font-semibold uppercase">
                {isBangla ? "নৃত্য ও গান" : "Music & Dancing"}
              </div>
              <p className="text-cream/70 text-sm mt-1">
                {isBangla ? "সবার জন্য উন্মুক্ত নাচ ও গানের আসর।" : "Opening the floor for everyone to dance together."}
              </p>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-maroon px-6 py-10 text-center">
          <p className="font-script text-gold-light text-3xl mb-4">With Love</p>
          <div className="text-cream/90 text-lg space-y-1">
            <p>Shamir Sen</p>
            <p>Utpala Sen</p>
            <p>Orindom Sagor Sen</p>
          </div>
          <img src={divider} alt="" width={150} height={30} loading="lazy" className="mx-auto mt-6 opacity-50 w-28" />
        </footer>
      </div>
    </div>
  );
};

export default Index;
