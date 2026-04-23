type Plan = {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Boost",
    price: "1 250€ HT*",
    features: [
      "5 véhicules",
      "Lancer votre visibilité",
      "Attirez vos premiers prospects.",
    ],
  },
  {
    name: "Growth",
    price: "2 000€ HT*",
    features: [
      "8 véhicules",
      "Visibilité massive",
      "dans la ville.",
    ],
    featured: true,
  },
  {
    name: "Leader",
    price: "Sur devis HT*",
    features: [
      "A partir de 12 véhicules",
      "Domination publicitaire",
      "dans toute la ville.",
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  if (plan.featured) {
    return (
      <div className="bg-primary p-8 sm:p-10 rounded-xl shadow-2xl flex flex-col items-start text-left relative overflow-hidden md:scale-105 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -left-8 -bottom-8 w-40 opacity-[0.08] rotate-12"
        />
        <div className="absolute top-0 right-0 bg-secondary-fixed text-on-secondary-fixed px-6 py-2 rounded-bl-xl font-bold text-sm uppercase">
          Populaire
        </div>
        <div className="text-secondary-fixed font-bold uppercase tracking-wider text-sm mb-4">
          {plan.name}
        </div>
        <div className="flex items-baseline mb-8">
          <span className="text-4xl font-extrabold text-white">
            {plan.price}
          </span>
        </div>
        <ul className="space-y-4 mb-10 grow">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center space-x-3 text-white">
              <span className="material-symbols-outlined text-secondary-fixed">
                done
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <button className="w-full py-4 bg-secondary-fixed text-on-secondary-fixed rounded-full font-bold hover:bg-white transition-colors">
          Choisir ce plan
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-10 rounded-xl shadow-sm border border-outline-variant/20 flex flex-col items-start text-left">
      <div className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">
        {plan.name}
      </div>
      <div className="flex items-baseline mb-8">
        <span className="text-4xl font-extrabold text-primary">
          {plan.price}
        </span>
      </div>
      <ul className="space-y-4 mb-10 grow">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-center space-x-3 text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-secondary">
              done
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className="w-full py-4 bg-primary text-white rounded-full font-bold hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors">
        Choisir ce plan
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="relative py-20 sm:py-32 bg-surface overflow-hidden" id="pricing">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/3 -left-20 w-72 opacity-[0.04] -rotate-6"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-primary mb-16 sm:mb-24">
          Tarifs en toute transparence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-sm mx-auto md:max-w-none">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
