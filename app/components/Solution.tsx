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
                alt="Véhicules urbains utilitaires noir et blanc avec branding en circulation"
                src="/urban-vehicle.png"
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
                  Partenaire Auto-école
                </p>
                <p className="relative text-primary-fixed text-xs sm:text-sm">
                  Flotte urbaine premium circulant 12h/jour en centre-ville.
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Notre Solution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-primary mb-6 sm:mb-8 leading-tight">
              La ville devient votre terrain de jeu
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mb-8 sm:mb-10 leading-relaxed">
              Nous collaborons avec des professionnels de la route (Auto-écoles,
              VTC, Livreurs) pour transformer leurs véhicules en supports
              publicitaires dynamiques.
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
                    Ciblage Géographique Précis
                  </h4>
                  <p className="text-on-surface-variant">
                    Diffusez là où vos clients vivent et travaillent.
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
                  <h4 className="font-bold text-primary">Contrôle Total</h4>
                  <p className="text-on-surface-variant">
                    Choisissez vos créneaux et vos zones de diffusion via notre
                    app.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
