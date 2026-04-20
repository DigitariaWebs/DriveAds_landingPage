type Step = {
  title: string;
  text: string;
  img: string;
  alt: string;
};

const steps: Step[] = [
  {
    title: "Embarquez",
    text: "Connectez votre véhicule à l'app PUBleader en quelques minutes.",
    img: "/i1.png",
    alt: "Icône 3D d'un smartphone affichant une voiture",
  },
  {
    title: "Gagnez",
    text: "Chaque course active génère des revenus directement sur votre compte.",
    img: "/i2.png",
    alt: "Icône 3D d'un portefeuille avec des pièces de monnaie",
  },
  {
    title: "Géolocalisez",
    text: "Vos campagnes sont suivies en temps réel, zone par zone.",
    img: "/i3.png",
    alt: "Icône 3D d'une carte avec une voiture géolocalisée",
  },
  {
    title: "Communauté",
    text: "Rejoignez le réseau des chauffeurs VTC et Uber PUBleader.",
    img: "/i4.png",
    alt: "Icône 3D d'un groupe de chauffeurs avec un volant",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-32 bg-surface" id="timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            L&apos;expérience chauffeur
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-primary">
            Tout se passe dans l&apos;app
          </h2>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-0 w-full h-1 bg-surface-container-highest z-0"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.title} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(3,21,67,0.15)]"
                    alt={step.alt}
                    src={step.img}
                  />
                </div>
                <h4 className="font-bold text-primary text-lg mb-2">
                  {step.title}
                </h4>
                <p className="text-on-surface-variant text-sm px-4">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#app"
            className="inline-block bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-primary-container transition-all"
          >
            Découvrir l&apos;application
          </a>
          <a
            href="#pricing"
            className="inline-block bg-white border border-primary/20 text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-surface-container-low transition-all"
          >
            Voir les tarifs
          </a>
        </div>
      </div>
    </section>
  );
}
