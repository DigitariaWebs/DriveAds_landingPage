export default function LeaderBorne() {
  return (
    <section className="py-20 sm:py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-primary mb-6 sm:mb-8">
              Leader Borne : <br />
              <span className="text-secondary">Nouvelle expérience, nouveaux revenus</span>
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mb-8 sm:mb-10 leading-relaxed">
              Transformez vos espaces en expérience sensorielle rentable grâce
              à la Leader Borne : parfums de luxe, écran LED publicitaire
              intégré et paiement CB rapide dans un format moderne et élégant.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <span className="material-symbols-outlined text-primary text-3xl mb-2">
                  lightbulb
                </span>
                <h5 className="font-bold text-primary">Expérience premium</h5>
                <p className="text-sm text-on-surface-variant">
                  L&apos;écran LED diffuse vos promotions pendant que la borne
                  valorise l&apos;image de vos halls, vestiaires et espaces communs.
                </p>
              </div>
              <div>
                <span className="material-symbols-outlined text-primary text-3xl mb-2">
                  sync
                </span>
                <h5 className="font-bold text-primary">Revenus passifs</h5>
                <p className="text-sm text-on-surface-variant">
                  Jusqu&apos;à 50 sprays estimés par jour, 1EUR par utilisation,
                  pour une nouvelle source de revenus potentiellement illimitée.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-sm text-on-surface-variant">
              <p>Installation rapide, gestion complète et partage des revenus.</p>
              <p>Taille : 1,80 m, poids : 110 kg, matériaux : métal.</p>
            </div>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Une solution clé en main pour moderniser vos espaces, fidéliser
              votre clientèle et créer des revenus mensuels complémentaires.
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
