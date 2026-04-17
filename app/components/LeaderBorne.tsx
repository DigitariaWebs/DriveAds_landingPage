export default function LeaderBorne() {
  return (
    <section className="py-20 sm:py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-primary mb-6 sm:mb-8">
              Leader Borne : <br />
              <span className="text-secondary">L&apos;Innovation</span>
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mb-8 sm:mb-10 leading-relaxed">
              Découvrez notre borne publicitaire interactive de nouvelle
              génération. Alliant luxe et technologie, elle redéfinit
              l&apos;expérience de marque dans les lieux de prestige.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <span className="material-symbols-outlined text-primary text-3xl mb-2">
                  lightbulb
                </span>
                <h5 className="font-bold text-primary">LED Advertising</h5>
                <p className="text-sm text-on-surface-variant">
                  Haute luminosité pour un impact maximal de jour comme de nuit.
                </p>
              </div>
              <div>
                <span className="material-symbols-outlined text-primary text-3xl mb-2">
                  fragrance
                </span>
                <h5 className="font-bold text-primary">Lux Perfume Diffuser</h5>
                <p className="text-sm text-on-surface-variant">
                  Expérience multisensorielle avec diffusion de parfums haut de
                  gamme.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-primary p-1 rounded-2xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-96 sm:h-150 object-cover rounded-xl"
                alt="Borne digitale haut de gamme dans un hall d'hôtel de luxe, avec grand écran LED vertical diffusant une publicité de parfum"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0AaKxlRCWe_3ycCBlsIBWB9W6I9z6Z9ns7d4hZ60-4YKLDLr0zD29yg5v8Yd9s9FZitgoe3yCnpUsKu2nLpZx-CLXPuuLMpgkWfB_XMfGgkWKiA1Ax6bP6B9nyvgohG7EV3rV5hCUMUH59JArgt0bLUTOLGSso6OcPYTfPJbsFSu5ioyTixquy8aVGkZbWOw20jb0lcGa7kMyvykuzWHfAvLC0Sd8q1ylD9TCybsc6_xYf3RC3jTM2u8zTNFYJNeP-nGUOkBCiUY"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary-fixed p-8 rounded-xl shadow-xl hidden lg:block">
              <div className="text-4xl font-black text-primary">New</div>
              <div className="text-primary font-bold">Innovation 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
