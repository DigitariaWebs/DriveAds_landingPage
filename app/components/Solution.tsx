export default function Solution() {
  return (
    <section className="relative py-20 sm:py-32 bg-surface-container overflow-hidden" id="solutions">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-v2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-10 right-[-4rem] w-72 opacity-[0.05] rotate-6"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl p-3 sm:p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-80 sm:h-125 object-cover rounded-lg"
                alt="Voiture Uber brandée PUBleader circulant en ville"
                src="/uber-car.png"
              />
              <div className="absolute bottom-4 right-4 sm:bottom-10 sm:-right-5 bg-primary p-4 sm:p-6 rounded-xl shadow-xl max-w-50 sm:max-w-60 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-v2.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -right-3 -bottom-3 w-16 opacity-15"
                />
                <p className="relative text-white font-bold mb-2 text-sm sm:text-base">
                  Partenaire Chauffeur VTC
                </p>
                <p className="relative text-primary-fixed text-xs sm:text-sm">
                  Jusqu&apos;à 10h de visibilité par jour, au cœur des zones à
                  forte affluence.
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Notre Solution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-primary mb-6 sm:mb-8 leading-tight">
              Les chauffeurs Uber deviennent votre réseau d&apos;affichage
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mb-8 sm:mb-10 leading-relaxed">
              Notre communauté de chauffeurs VTC et Uber roule pour vous. Chaque
              trajet devient une impression publicitaire ciblée, trackée et
              pilotable depuis l&apos;application PUBleader.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="shrink-0 w-8 h-8 bg-secondary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-xl">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">
                    Réseau de chauffeurs actifs
                  </h4>
                  <p className="text-on-surface-variant">
                    Des centaines de VTC en mouvement, là où vos clients se
                    trouvent.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="shrink-0 w-8 h-8 bg-secondary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-xl">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">
                    Pilotage depuis l&apos;app
                  </h4>
                  <p className="text-on-surface-variant">
                    Suivez vos courses, vos zones et vos impressions en temps
                    réel.
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-10">
              <a
                href="#pricing"
                className="inline-block bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-primary-container transition-all"
              >
                Démarrer une campagne
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
