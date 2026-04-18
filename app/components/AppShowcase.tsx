import Image from "next/image";

export default function AppShowcase() {
  return (
    <section className="py-20 sm:py-32 bg-primary overflow-hidden" id="app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex justify-center items-end -space-x-12 sm:-space-x-20">
              <div className="relative z-10 scale-90 opacity-80 translate-y-6">
                <div className="relative w-52 sm:w-64 aspect-[9/19] rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-slate-900/80">
                  <Image
                    src="/2.png"
                    alt="Ecran d'accueil PUBleader - Transformez votre vehicule en revenu"
                    fill
                    quality={100}
                    sizes="(max-width: 640px) 208px, 256px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative z-20 -translate-y-6">
                <div className="absolute -inset-6 bg-secondary-fixed/20 blur-3xl rounded-full"></div>
                <div className="relative w-56 sm:w-72 aspect-[9/19] rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-slate-900">
                  <Image
                    src="/1.png"
                    alt="Ecran Campagnes PUBleader - liste de campagnes actives"
                    fill
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
              Votre régie <br />
              <span className="text-secondary-fixed">dans la poche.</span>
            </h2>
            <p className="text-base sm:text-lg text-primary-fixed mb-8 sm:mb-10 leading-relaxed">
              L&apos;application PUBleader vous donne un contrôle absolu sur
              votre image. Pilotez vos campagnes avec la simplicité d&apos;un
              clic.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-5">
                <span className="material-symbols-outlined text-3xl text-secondary-fixed shrink-0">
                  rocket_launch
                </span>
                <span className="text-lg sm:text-xl font-bold">
                  Lancement instantané
                </span>
              </div>
              <div className="flex items-center space-x-5">
                <span className="material-symbols-outlined text-3xl text-secondary-fixed shrink-0">
                  location_on
                </span>
                <span className="text-lg sm:text-xl font-bold">
                  Géo-tracking en direct
                </span>
              </div>
              <div className="flex items-center space-x-5">
                <span className="material-symbols-outlined text-3xl text-secondary-fixed shrink-0">
                  query_stats
                </span>
                <span className="text-lg sm:text-xl font-bold">
                  Statistiques détaillées
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
