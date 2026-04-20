export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-surface text-center px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-primary rounded-xl py-14 sm:py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            alt="Traînées de lumière dynamiques du trafic urbain nocturne évoquant vitesse et mouvement"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFjoD1b2QaGGl9ZqfTZQeL7evok__ygcx-qIDngdWO7Ss4ZKe9hTcVWDWtSsdwP9I4mHXs0HC5iQK0r9Lc4o4IHH2oPfPsaiFS8d5DEpl3vwwtYrptkork3IurHMrvhVvwM2ggtvi2Ffr027o7Um6MJpcjb0a-bCc-FR0ANmr363X8ZPqLtJcPvtLByASa5TpShwb2cWs0W-7_X_dXka1zkT8-7vqi1FSgzA_03vUk7CGuasy2aVMSByL1RENTDlgrxZVzA9upbjE"
          />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-v2.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-10 -left-10 w-48 opacity-10 -rotate-12"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-v2.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -bottom-12 -right-12 w-56 opacity-10 rotate-12"
        />
        <div className="relative z-10">
          <div className="mx-auto relative w-28 h-24 mb-6 overflow-hidden drop-shadow-[0_6px_20px_rgba(182,197,251,0.45)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-v2.png"
              alt="PUBleader"
              className="absolute inset-0 w-full h-full object-cover object-center scale-[1.4]"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-white mb-8 sm:mb-10 leading-tight">
            Prêt à devenir un <br />
            <span className="text-secondary-fixed">PUBleader ?</span>
          </h2>
          <button className="bg-secondary-fixed text-on-secondary-fixed px-8 sm:px-12 py-4 sm:py-5 rounded-full font-extrabold text-lg sm:text-xl hover:scale-105 transition-transform duration-300 shadow-2xl">
            Lancer ma campagne
          </button>
          <p className="mt-8 text-primary-fixed-dim text-sm font-medium tracking-wide">
            Plus de 120 marques nous font déjà confiance.
          </p>
        </div>
      </div>
    </section>
  );
}
