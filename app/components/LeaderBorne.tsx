export default function LeaderBorne() {
  return (
    <section className="py-20 sm:py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary-container text-secondary font-bold text-xs tracking-[0.12em] uppercase">
              LEARDER BORNE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-primary mb-6 sm:mb-8">
              Leader Borne : <br />
              <span className="text-secondary">Nouvelle expérience, nouveaux revenus</span>
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mb-8 leading-relaxed max-w-2xl">
              Une borne moderne qui transforme vos espaces en expérience
              premium tout en générant une source de revenus complémentaire.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-outline-variant/30 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-on-surface-variant mb-1">
                  Usage estimé
                </p>
                <p className="text-lg font-extrabold text-primary">50 sprays / jour</p>
              </div>
              <div className="bg-white border border-outline-variant/30 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-on-surface-variant mb-1">
                  Tarif
                </p>
                <p className="text-lg font-extrabold text-primary">1EUR / utilisation</p>
              </div>
              <div className="bg-white border border-outline-variant/30 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-on-surface-variant mb-1">
                  Potentiel
                </p>
                <p className="text-lg font-extrabold text-primary">Revenus mensuels évolutifs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-surface-container rounded-xl p-5">
                <h5 className="font-bold text-primary mb-3">Pourquoi ça fonctionne</h5>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>Parfums de luxe pour une expérience innovante et élégante.</li>
                  <li>Écran LED intégré pour diffuser promotions et publicités.</li>
                  <li>Paiement simple et rapide par CB.</li>
                </ul>
              </div>
              <div className="bg-surface-container rounded-xl p-5">
                <h5 className="font-bold text-primary mb-3">Exploitation simplifiée</h5>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>Installation rapide sur site.</li>
                  <li>Gestion complète de la borne.</li>
                  <li>Partage des revenus en toute transparence.</li>
                </ul>
              </div>
            </div>

            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-3">
              Format technique : hauteur 1,80m, poids 110kg, structure métal.
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Idéale pour halls d&apos;accueil, vestiaires et espaces communs.
            </p>
          </div>
          <div className="relative">
            <div className="bg-primary p-1 rounded-2xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-96 sm:h-150 object-cover rounded-xl"
                alt="Borne digitale PUBleader avec grand écran LED vertical diffusant une campagne"
                src="/borne.png"
              />
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
}
