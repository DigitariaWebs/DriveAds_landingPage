type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initial: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "On a lancé notre campagne en 48h sur 15 véhicules. Trafic en boutique +32% le premier mois.",
    author: "Sarah M.",
    role: "Directrice Marketing — Enseigne locale",
    initial: "S",
  },
  {
    quote:
      "Je roule déjà toute la journée pour Uber. Avec PUBleader, je gagne 280€ de plus chaque mois sans rien changer.",
    author: "Karim L.",
    role: "Chauffeur VTC — Paris",
    initial: "K",
  },
  {
    quote:
      "L'app est claire, les rapports sont honnêtes. On paie à l'impression réelle, pas au fantasme.",
    author: "Mathieu R.",
    role: "Fondateur — Startup DTC",
    initial: "M",
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-16 sm:py-24 bg-surface-container-low overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
            Ils nous font confiance
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-headline text-primary">
            Des marques et des chauffeurs qui roulent avec nous.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-outline-variant/20 flex flex-col"
            >
              <div className="flex items-center gap-1 text-secondary-fixed-dim mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-xl text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <blockquote className="text-on-surface text-sm sm:text-base leading-relaxed mb-6 grow">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-primary text-sm">
                    {t.author}
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
