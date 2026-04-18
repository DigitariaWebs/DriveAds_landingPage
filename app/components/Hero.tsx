import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-primary">
      {/* Mobile: image stacked above */}
      <div className="relative md:hidden w-full aspect-[4/3] mb-8">
        <Image
          src="/hero.png"
          alt="Véhicule de flotte urbaine premium avec branding publicitaire"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/10 to-primary"></div>
      </div>

      {/* Desktop/tablet: image full-bleed background */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero.png"
          alt="Véhicule de flotte urbaine premium avec branding publicitaire"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[right_center] scale-[1.15] origin-[right_top]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/60 via-primary/20 to-transparent"></div>
      </div>

      <div className="md:min-h-screen md:flex md:items-end md:pb-16">
        <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-6">
          <div className="text-white max-w-2xl md:[text-shadow:0_2px_16px_rgb(3_21_67/80%)]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-extrabold leading-[1.1] tracking-tight mb-4 sm:mb-5">
              La publicité <br />
              <span className="text-secondary-fixed">sans freiner.</span>
            </h1>
            <p className="text-base sm:text-base text-primary-fixed mb-6 sm:mb-8 max-w-xl leading-relaxed font-body font-medium">
              Transformez chaque kilomètre en opportunité. PUBleader connecte les
              marques aux flottes urbaines pour une visibilité inégalée.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#pricing"
                className="inline-block bg-secondary-fixed text-on-secondary-fixed px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-white transition-all"
              >
                Demander un devis
              </a>
              <a
                href="#solutions"
                className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all"
              >
                Voir nos solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
