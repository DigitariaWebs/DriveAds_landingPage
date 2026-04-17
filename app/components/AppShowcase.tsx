export default function AppShowcase() {
  return (
    <section className="py-20 sm:py-32 bg-primary overflow-hidden" id="app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex justify-center -space-x-16 sm:-space-x-24">
              <div className="relative z-20 translate-y-8 sm:translate-y-12">
                <div className="w-56 sm:w-70 h-120 sm:h-145 bg-surface shadow-2xl rounded-[3rem] border-8 border-slate-800 overflow-hidden">
                  <div className="bg-surface-container px-6 py-10 h-full">
                    <div className="text-primary font-bold text-xl mb-6">
                      Tableau de bord
                    </div>
                    <div className="h-32 bg-white rounded-xl mb-4 p-4 shadow-sm border border-outline-variant/10">
                      <div className="w-1/2 h-4 bg-surface-container-highest rounded mb-4"></div>
                      <div className="w-full h-8 bg-secondary-container rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-white rounded-xl p-3 border border-outline-variant/10"></div>
                      <div className="h-24 bg-white rounded-xl p-3 border border-outline-variant/10"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 scale-90 opacity-60 blur-[1px]">
                <div className="w-56 sm:w-70 h-120 sm:h-145 bg-surface shadow-2xl rounded-[3rem] border-8 border-slate-800 overflow-hidden">
                  <div className="bg-surface-container px-6 py-10 h-full">
                    <div className="text-primary font-bold text-xl mb-6">
                      Mes campagnes
                    </div>
                    <div className="space-y-4">
                      <div className="h-20 bg-white rounded-xl border border-outline-variant/10"></div>
                      <div className="h-20 bg-white rounded-xl border border-outline-variant/10"></div>
                      <div className="h-20 bg-white rounded-xl border border-outline-variant/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline mb-6 sm:mb-8">
              Votre régie <br />
              dans la poche
            </h2>
            <p className="text-base sm:text-lg text-primary-fixed mb-8 sm:mb-10 leading-relaxed">
              L&apos;application PUBleader vous donne un contrôle absolu sur
              votre image. Pilotez vos campagnes avec la simplicité d&apos;un
              clic.
            </p>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <span className="material-symbols-outlined text-4xl text-secondary-fixed">
                  rocket_launch
                </span>
                <span className="text-xl font-bold">Lancement instantané</span>
              </div>
              <div className="flex items-center space-x-6">
                <span className="material-symbols-outlined text-4xl text-secondary-fixed">
                  location_on
                </span>
                <span className="text-xl font-bold">
                  Géo-tracking en direct
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <span className="material-symbols-outlined text-4xl text-secondary-fixed">
                  query_stats
                </span>
                <span className="text-xl font-bold">Statistiques détaillées</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
