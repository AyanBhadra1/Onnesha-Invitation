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
            <button 
              onClick={() => setIsBangla(!isBangla)}
              className="mb-8 px-6 py-2 border-2 border-gold-light text-gold-light rounded-full text-sm font-bold active:scale-95 transition-all bg-maroon/20"
            >
              {isBangla ? "VIEW IN ENGLISH" : "বাংলায় দেখুন"}
            </button>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-wide mb-1">
              {isBangla ? "অন্বেষার ১৮" : "ONNESHA'S 18"}<sup className="text-lg">{isBangla ? "তম" : "TH"}</sup>
               <span className="ml-2">
    {isBangla ? "জন্মদিন" : "BIRTHDAY"}
  </span>
            </h1>
            <img src={divider} alt="" width={300} height={60} className="mx-auto my-4 opacity-80" />
            <p className="font-body text-lg leading-relaxed text-cream opacity-90 max-w-sm mx-auto">
              {isBangla 
                ? "অত্যন্ত আনন্দ ও গর্বের সাথে আমরা আপনাদের এই বিশেষ সন্ধ্যায় আমন্ত্রণ জানাচ্ছি। আমাদের প্রিয় কন্যার আঠারো বছরে পদার্পণের এই বিশেষ মুহূর্তটি আমরা সকলে মিলে উদযাপন করতে চাই।" 
                : "With joy and pride, we invite you to join us for a grand evening as we celebrate a very special daughter reaching her eighteenth year."}
            </p>
          </div>
        </section>

        {/* Scrapbook Photo Collage */}
        <ScrapbookCollage />

        {/* Celebrating Section */}
        <section className="bg-cream px-6 py-10 text-center">
          <Sparkles className="w-6 h-6 text-gold mx-auto mb-3" />
          <h2 className="font-display text-2xl font-bold text-maroon mb-1 uppercase">
            {isBangla ? "অন্বেষার ১৮তম জন্মদিন উদ্‌যাপন" : "Celebrating Onnesha's 18th Birthday"}
          </h2>
          <p className="font-script text-gold text-xl mb-4">
            {isBangla ? "আমাদের গৃহের প্রাণ ও এক উজ্জ্বল ভবিষ্যতের পথে" : "The Heart of Our Home & A Bright Future Ahead"}
          </p>
          <p className="font-body text-lg text-foreground leading-relaxed">
            {isBangla 
              ? "অন্বেষা আমাদের জীবনকে সবসময় হাসি ও স্নিগ্ধতায় ভরিয়ে রেখেছে। সে প্রাপ্তবয়স্ক হওয়ার পথে পা রাখায়, আমরা তার জীবনযাত্রা, তার স্বপ্ন এবং তার চমৎকার ব্যক্তিত্বকে সম্মান জানাতে চাই।" 
              : "Onnesha has always filled our lives with laughter and grace. As she steps into adulthood, we want to honor her journey, her passions, and the wonderful person she has become."}
          </p>
        </section>

        {/* Event Invitation */}
        <section className="bg-maroon text-primary-foreground px-6 py-10 text-center">
          <Heart className="w-6 h-6 text-gold-light mx-auto mb-3" />
          <h2 className="font-display text-2xl font-bold mb-1 uppercase">
            {isBangla ? "আয়োজনের আমন্ত্রণ" : "Event Invitation"}
          </h2>
          <p className="font-script text-gold-light text-xl mb-6">
            {isBangla ? "এক জমকালো ও আনন্দময় দিন" : "A Day of Elegance & Celebration"}
          </p>
          <p className="font-body text-lg text-cream/90 mb-6 leading-relaxed">
            {isBangla 
              ? "একটি আনন্দময় দিন ও প্রীতিভোজের আমন্ত্রণে আমরা আপনাদের অপেক্ষায় থাকব। আমাদের পরম আত্মীয় ও শুভাকাঙ্ক্ষীদের সাথে এই চমৎকার মুহূর্তটি ভাগ করে নেওয়ার প্রত্যাশায়।" 
              : "Please join us for an evening of lunch and festivities. We look forward to sharing this fabulous occasion with our dearest friends and relatives."}
          </p>
          <div className="space-y-4 font-body text-lg">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-gold-light flex-shrink-0" />
              <a 
                href="https://maps.google.com/maps/contrib/102030962991335400688" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream underline decoration-gold-light/40 hover:text-gold-light transition-colors cursor-pointer text-sm"
              >
                {isBangla ? "মারিয়া উন্ড মার্থা গির্জা প্রাঙ্গণ, আউগসবুর্গ, জার্মানি (ম্যাপ দেখতে ক্লিক করুন)" : "Gemeindezentrum Maria und Martha, Augsburg, Germany (Click for Map)"}
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 text-gold-light flex-shrink-0" />
              <span className="text-cream">{isBangla ? "শনিবার, ২৩শে মে, ২০২৬" : "Saturday, May 23rd, 2026"}</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-gold-light flex-shrink-0" />
              <span className="text-cream">{isBangla ? "দুপুর ১২:৩০ মিনিট থেকে শুরু" : "Starting at 12:30 PM"}</span>
            </div>

            {/* Hosting & Event Support Team */}
            <div className="pt-6 border-t border-gold-light/20 mt-6 space-y-6 text-center">
              <div>
                <p className="text-gold-light font-script text-2xl mb-1">{isBangla ? "উপস্থাপনায়:" : "Moderators:"}</p>
                <p className="text-cream font-semibold tracking-wide">{isBangla ? "সাগর ও ভিওলা" : "Shagor & Viola"}</p>
              </div>
              <div>
                <p className="text-gold-light font-script text-2xl mb-1">{isBangla ? "যন্ত্রসংগীতে:" : "Musical Accompaniment:"}</p>
                <p className="text-cream font-semibold tracking-wide">{isBangla ? "কাউসার ভূঁইয়া" : "Kawser Bhuiya"}</p>
              </div>
              <div>
                <p className="text-gold-light font-script text-2xl mb-1">
                  {isBangla ? "ফটোগ্রাফিতে:" : "Event Photographer:"}
                </p>
                <p className="text-cream font-semibold tracking-wide">{isBangla ? "রিকি কামেমান" : "Riki Kameman"}</p>
              </div>
              <div>
                <p className="text-gold-light font-script text-2xl mb-1">{isBangla ? "সহযোগিতায়:" : "Event Support:"}</p>
                <p className="text-cream font-semibold tracking-wide">
                 {isBangla ? "উৎপলা সেন ও অয়ন ভদ্র (কাজিন)" : "Utpala Sen & Ayan Bhadra (Cousin)"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Message */}
        <section className="bg-cream px-6 py-10 text-center">
          <img src={divider} alt="" width={200} height={40} loading="lazy" className="mx-auto mb-4 opacity-60 w-40" />
          <p className="font-body text-lg text-foreground leading-relaxed italic max-w-sm mx-auto">
            {isBangla 
              ? "অন্বেষার উজ্জ্বল ভবিষ্যতের কামনায় আপনারা আমাদের পাশে থাকলে আমরা অত্যন্ত সম্মানিত বোধ করব। আসুন, সকলে মিলে এই দিনটিকে তার জন্য এক চিরস্মরণীয় স্মৃতিতে পরিণত করি।" 
              : "We would be honored to have you stand with us as we toast to Onnesha's future. Let's make this a night she will cherish forever."}
          </p>
          <ul className="font-body text-lg text-maroon mt-4 space-y-1 font-semibold list-none">
            <li>{isBangla ? "• আপনাদের সপরিবারে উপস্থিতির অপেক্ষায় রইলাম!" : "• We can't wait to see you there!"}</li>
          </ul>
        </section>

        {/* Program Itinerary */}
        <section className="bg-maroon-deep text-primary-foreground px-6 py-10">
          <div className="text-center mb-8">
            <Sparkles className="w-6 h-6 text-gold-light mx-auto mb-3" />
            <h2 className="font-display text-2xl font-bold tracking-widest uppercase">
              {isBangla ? "অনুষ্ঠানসূচী" : "Program Schedule"}
            </h2>
          </div>

          <div className="space-y-8 relative border-l border-gold-light/20 ml-4 pl-6">
            <div className="relative">
              <div className="absolute -left-[35px] mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-gold-light" />
              <div className="font-bold text-cream">12:30 PM</div>
              <div className="text-gold-light font-semibold uppercase tracking-tight">{isBangla ? "অভ্যর্থনা ও আপ্যায়ন" : "Welcome Greeting"}</div>
              <p className="text-cream/70 text-sm mt-1">{isBangla ? "আমন্ত্রিত অতিথিদের সাদর অভ্যর্থনা।" : "A warm reception for our arriving guests."}</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-gold-light" />
              <div className="font-bold text-cream">1:00 PM</div>
              <div className="text-gold-light font-semibold uppercase tracking-tight">{isBangla ? "প্রীতিভোজ" : "Festive Luncheon"}</div>
              <p className="text-cream/70 text-sm mt-1">{isBangla ? "বন্ধু-বান্ধব ও আত্মীয়-স্বজনের সাথে মধ্যাহ্নভোজ।" : "A grand lunch shared with friends and family."}</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-gold-light" />
              <div className="font-bold text-cream">2:30 PM</div>
              <div className="text-gold-light font-semibold mb-1 uppercase tracking-tighter">
                {isBangla ? "সাংস্কৃতিক অনুষ্ঠান" : "Grand Cultural Program"}
              </div>
              <p className="text-cream/70 text-sm italic">
                {isBangla 
                  ? "গান, নাচ এবং বিশেষ আয়োজনে ভরপুর একটি মনোজ্ঞ সাংস্কৃতিক বিকাল।" 
                  : "A delightful evening of music, dance, and special performances."}
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-gold-light" />
              <div className="font-bold text-cream">4:15 PM</div>
              <div className="text-gold-light font-semibold uppercase">{isBangla ? "কেক কাটা ও কফি আপ্যায়ন" : "Cake Cutting & Coffee"}</div>
              <p className="text-cream/70 text-sm mt-1">{isBangla ? "১৮তম জন্মদিনের কেক কাটা ও সবার সাথে মিষ্টিমুখ।" : "Celebrating the milestone with sweets and shared joy."}</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-gold-light" />
              <div className="font-bold text-cream">Afterwards</div>
              <div className="text-gold-light font-semibold uppercase">{isBangla ? "নৃত্য ও গান" : "Music & Dancing"}</div>
              <p className="text-cream/70 text-sm mt-1">{isBangla ? "সবার জন্য উন্মুক্ত নাচ ও গানের আসর।" : "Opening the floor for everyone to dance together."}</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-maroon px-6 py-12 text-center border-t border-gold-light/10">
          <p className="font-script text-gold-light text-3xl mb-6">
            {isBangla ? "ভালোবাসাসহ:" : "With Love:"}
          </p>
          <div className="space-y-4">
            <p className="text-cream font-semibold tracking-widest uppercase text-sm">{isBangla ? "শমীর সেন" : "Shamir Sen"}</p>
            <p className="text-cream font-semibold tracking-widest uppercase text-sm">{isBangla ? "উৎপলা সেন" : "Utpala Sen"}</p>
            <p className="text-cream font-semibold tracking-widest uppercase text-sm">{isBangla ? "অরিন্দম সাগর সেন" : "Orindom Sagor Sen"}</p>
          </div>
          <img src={divider} alt="" width={150} height={30} loading="lazy" className="mx-auto mt-10 opacity-40 w-28" />
        </footer>
      </div>
    </div>
  );
};

export default Index;
