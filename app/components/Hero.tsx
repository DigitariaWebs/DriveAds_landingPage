import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-primary">
        <Image
          src="/l.png"
          alt="Véhicule de flotte urbaine premium avec branding publicitaire"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/60 via-primary/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6">
        <div className="text-white max-w-2xl [text-shadow:0_2px_16px_rgb(3_21_67/80%)]">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-headline leading-tight tracking-tighter mb-6">
            LA PUBLICITÉ <br />
            <span className="text-secondary-fixed">SANS FREINER</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-fixed mb-8 sm:mb-10 max-w-lg leading-relaxed">
            Transformez chaque kilomètre en opportunité. PUBleader connecte les
            marques aux flottes urbaines pour une visibilité inégalée.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button className="bg-secondary-fixed text-on-secondary-fixed px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-white transition-all">
              Demander un devis
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all">
              Voir nos solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
