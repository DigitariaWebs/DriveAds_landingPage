export default function HeroStats() {
  return (
    <section className="relative -mt-10 sm:-mt-14 lg:-mt-16 z-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl border border-primary-fixed/20 p-6 sm:p-10 lg:p-14 overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-16 -right-16 w-64 opacity-[0.04] rotate-12"
        />

        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1.1fr_1fr] items-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[85%] h-[70%] bg-secondary-fixed/30 blur-[80px] rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[70%] h-[55%] bg-primary/20 blur-[60px] rounded-full"></div>
            </div>

            <div
              className="relative [perspective:1400px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="relative"
                style={{
                  animation: "float 6s ease-in-out infinite",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screen.png"
                  alt="Vehicule PUBleader en rendu 3D"
                  className="w-full h-auto object-contain drop-shadow-[0_40px_60px_rgba(3,21,67,0.45)]"
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 bottom-[-8%] w-[70%] h-6 bg-black/40 blur-2xl rounded-[50%]"
              ></div>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute -bottom-2 -left-2 w-14 opacity-70 drop-shadow-lg"
            />
          </div>

          <div className="relative">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
              Impact mesurable
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-primary leading-tight mb-5 sm:mb-7">
              Votre marque roule <br />
              <span className="text-secondary">24h/24</span> en ville.
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8 max-w-md">
              Chaque vehicule partenaire devient un panneau mobile intelligent,
              visible partout ou circulent vos futurs clients.
            </p>

            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-primary text-white px-5 py-5 sm:px-6 sm:py-6 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -right-4 -bottom-4 w-20 opacity-10"
                />
                <p className="text-3xl sm:text-4xl font-extrabold leading-none relative">
                  400 km
                </p>
                <p className="mt-2 text-sm sm:text-base text-primary-fixed relative">
                  de visibilite par jour
                </p>
              </div>
              <div className="rounded-2xl bg-secondary-fixed text-on-secondary-fixed px-5 py-5 sm:px-6 sm:py-6 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -right-4 -bottom-4 w-20 opacity-15"
                />
                <p className="text-3xl sm:text-4xl font-extrabold leading-none relative">
                  100 %
                </p>
                <p className="mt-2 text-sm sm:text-base text-on-secondary-fixed/90 relative">
                  de publicite mobile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
