export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-secondary-fixed/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary-container/40 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-12 items-center">
          <div className="text-white order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-extrabold leading-[1.1] tracking-tight mb-4 sm:mb-5">
              La publicité <br />
              <span className="text-secondary-fixed">sans freiner.</span>
            </h1>
            <p className="text-base sm:text-lg text-primary-fixed mb-6 sm:mb-8 max-w-xl leading-relaxed font-body font-medium">
              +120 marques diffusent déjà sur notre réseau de chauffeurs Uber et
              VTC. Lancez votre campagne en 48h, payez à l&apos;impression
              réelle, suivez tout depuis l&apos;application.
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

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 sm:-inset-6 bg-secondary-fixed/15 blur-2xl rounded-[2.5rem]"
              />
              <div className="relative rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-[4/3] lg:aspect-[5/4] bg-primary-container">
                <video
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
