import Image from "next/image";

export default function AppShowcase() {
  return (
    <section className="relative py-20 sm:py-32 bg-primary overflow-hidden" id="app">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-fixed/10 rounded-full blur-3xl"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-[480px] sm:h-[560px] lg:h-[620px] flex items-center justify-center">
              {/* Left phone (tilted back) */}
              <div className="absolute left-0 sm:left-4 lg:left-0 top-10 z-10 rotate-[-14deg] scale-[0.78] sm:scale-90 opacity-90 animate-float-slow">
                <div className="relative w-44 sm:w-52 aspect-[9/19] rounded-[2.2rem] overflow-hidden shadow-2xl ring-[6px] ring-slate-900/80">
                  <Image
                    src="/3.png"
                    alt="Écran de connexion DriveAds avec sélection de rôle"
                    fill
                    quality={100}
                    sizes="208px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right phone (tilted forward) */}
              <div className="absolute right-0 sm:right-2 lg:right-0 top-16 z-10 rotate-[12deg] scale-[0.78] sm:scale-90 opacity-90 animate-float-delay-2">
                <div className="relative w-44 sm:w-52 aspect-[9/19] rounded-[2.2rem] overflow-hidden shadow-2xl ring-[6px] ring-slate-900/80">
                  <Image
                    src="/4.png"
                    alt="Écran Campagnes de l'application DriveAds"
                    fill
                    quality={100}
                    sizes="208px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Center phone (main) */}
              <div className="relative z-20 animate-float-delay-1">
                <div className="absolute -inset-8 bg-secondary-fixed/25 blur-3xl rounded-full"></div>
                <div className="relative w-56 sm:w-64 lg:w-72 aspect-[9/19] rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-slate-900">
                  <Image
                    src="/1.png"
                    alt="Écran Campagnes actives de l'application PUBleader"
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 640px) 224px, 288px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-white order-1 lg:order-2">
            <span className="text-secondary-fixed font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              L&apos;application
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline mb-6 sm:mb-8 leading-tight">
              La régie <br />
              <span className="text-secondary-fixed">dans la poche.</span>
            </h2>
            <p className="text-base sm:text-lg text-primary-fixed mb-8 sm:mb-10 leading-relaxed">
              Chauffeurs, marques et administrateurs pilotent tout depuis un
              seul écran. Campagnes acceptées en un tap, revenus calculés en
              direct, zones suivies en temps réel.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-5">
                <span className="material-symbols-outlined text-3xl text-secondary-fixed shrink-0">
                  rocket_launch
                </span>
                <span className="text-lg sm:text-xl font-bold">
                  Campagnes acceptées en un tap
                </span>
              </div>
              <div className="flex items-center space-x-5">
                <span className="material-symbols-outlined text-3xl text-secondary-fixed shrink-0">
                  location_on
                </span>
                <span className="text-lg sm:text-xl font-bold">
                  Suivi géographique en direct
                </span>
              </div>
              <div className="flex items-center space-x-5">
                <span className="material-symbols-outlined text-3xl text-secondary-fixed shrink-0">
                  payments
                </span>
                <span className="text-lg sm:text-xl font-bold">
                  Revenus calculés automatiquement
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#pricing"
                className="inline-block bg-secondary-fixed text-on-secondary-fixed px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-white transition-all"
              >
                Lancer une campagne
              </a>
              <a
                href="#"
                className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all"
              >
                Télécharger l&apos;app
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
