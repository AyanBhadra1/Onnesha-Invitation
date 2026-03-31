import photoTravel from "@/assets/photo-travel.jpg";
import photoSelfie from "@/assets/photo-selfie.jpg";
import dancingSilhouette from "@/assets/dancing-silhouette-transparent.png";
import makeupIcon from "@/assets/makeup-icon-transparent.png";

const PassportIcon = () => (
  <svg viewBox="0 0 64 80" className="w-14 h-16 drop-shadow-lg">
    <rect x="4" y="4" width="56" height="72" rx="6" fill="hsl(var(--maroon))" />
    <circle cx="32" cy="34" r="14" fill="none" stroke="hsl(var(--gold-light))" strokeWidth="2" />
    <ellipse cx="32" cy="34" rx="8" ry="14" fill="none" stroke="hsl(var(--gold-light))" strokeWidth="1.5" />
    <line x1="18" y1="34" x2="46" y2="34" stroke="hsl(var(--gold-light))" strokeWidth="1.5" />
    <text x="32" y="60" textAnchor="middle" fill="hsl(var(--gold-light))" fontSize="8" fontFamily="serif" fontWeight="bold">PASSPORT</text>
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 64 52" className="w-14 h-11 drop-shadow-lg">
    <rect x="2" y="12" width="60" height="38" rx="6" fill="hsl(var(--maroon))" />
    <rect x="20" y="4" width="24" height="12" rx="3" fill="hsl(var(--maroon-deep))" />
    <circle cx="32" cy="32" r="11" fill="hsl(var(--cream))" />
    <circle cx="32" cy="32" r="7" fill="hsl(var(--maroon-deep))" />
    <circle cx="32" cy="32" r="3" fill="hsl(var(--cream))" opacity="0.6" />
    <circle cx="50" cy="18" r="3" fill="hsl(var(--gold-light))" />
  </svg>
);

const MakeupIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14 drop-shadow-lg">
    <circle cx="26" cy="44" r="18" fill="hsl(var(--cream))" stroke="hsl(var(--maroon))" strokeWidth="2" />
    <circle cx="20" cy="40" r="5" fill="hsl(var(--maroon))" opacity="0.5" />
    <circle cx="32" cy="40" r="5" fill="hsl(var(--gold))" opacity="0.6" />
    <circle cx="26" cy="50" r="5" fill="hsl(var(--maroon))" opacity="0.3" />
    <rect x="40" y="2" width="5" height="36" rx="2" fill="hsl(var(--maroon))" transform="rotate(10 42 20)" />
    <rect x="48" y="4" width="5" height="34" rx="2" fill="hsl(var(--gold))" transform="rotate(20 50 20)" />
    <rect x="34" y="4" width="5" height="32" rx="2" fill="hsl(var(--maroon-deep))" transform="rotate(-5 36 20)" />
  </svg>
);

const DancingSilhouette = () => (
  <svg viewBox="0 0 48 72" className="w-10 h-16 drop-shadow-lg">
    <circle cx="24" cy="8" r="7" fill="hsl(var(--maroon-deep))" />
    <path d="M24 15 C24 15, 20 28, 14 35 C10 39, 6 38, 8 42 C10 46, 16 40, 20 36 L22 45 L12 65 C12 65, 10 70, 14 70 C18 70, 22 55, 24 48 C26 55, 30 70, 34 70 C38 70, 36 65, 36 65 L26 45 L28 36 C32 40, 38 46, 40 42 C42 38, 38 39, 34 35 C28 28, 24 15, 24 15Z" fill="hsl(var(--maroon-deep))" />
  </svg>
);

const Sparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`w-5 h-5 text-maroon-deep ${className}`}>
    <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="currentColor" />
  </svg>
);

const ScrapbookCollage = () => {
  return (
    <section className="bg-cream py-10 px-6">
      <div className="relative max-w-sm mx-auto h-72 sm:h-80">
        {/* Sparkles */}
        <Sparkle className="absolute top-2 left-1/2 -translate-x-1/2 text-maroon opacity-80" />
        <Sparkle className="absolute bottom-8 left-6 text-gold w-4 h-4 opacity-70" />
        <Sparkle className="absolute top-12 right-4 text-maroon w-3 h-3 opacity-60" />
        <Sparkle className="absolute bottom-16 right-12 text-gold w-4 h-4 opacity-50" />

        {/* Passport Icon - top left */}
        <div className="absolute top-2 left-6 z-20 -rotate-12">
          <PassportIcon />
        </div>

        {/* Camera Icon - bottom left */}
        <div className="absolute bottom-6 left-4 z-20 rotate-6">
          <CameraIcon />
        </div>

        {/* Makeup Icon - top right */}
        <div className="absolute top-0 right-2 z-20 rotate-12">
          <img src={makeupIcon} alt="Makeup" className="w-16 h-14 drop-shadow-lg object-contain" loading="lazy" />
        </div>

        {/* Dancing Silhouette - bottom right */}
        <div className="absolute bottom-2 right-4 z-20">
          <img src={dancingSilhouette} alt="Dancing" className="w-12 h-18 drop-shadow-lg object-contain" loading="lazy" />
        </div>

        {/* Left Polaroid - Travel photo */}
        <div className="absolute left-4 sm:left-8 top-8 -rotate-3 z-10 bg-white p-2 pb-8 shadow-xl w-40 sm:w-44">
          <img
            src={photoTravel}
            alt="Travel memories"
            className="w-full h-44 sm:h-48 object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Polaroid - Selfie */}
        <div className="absolute right-4 sm:right-8 top-6 rotate-6 z-10 bg-white p-2 pb-8 shadow-xl w-40 sm:w-44">
          <img
            src={photoSelfie}
            alt="Onnesha selfie"
            className="w-full h-44 sm:h-48 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ScrapbookCollage;
