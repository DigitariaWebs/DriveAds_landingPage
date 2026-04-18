type Card = {
  title: string;
  text: string;
  img: string;
  alt: string;
};

const cards: Card[] = [
  {
    title: "Coûts Exorbitants",
    text: "Les campagnes TV et radio brûlent votre budget sans garantie de mémorisation.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_UxwXgHPQjH_Np_Hglnt8C-jJbKJog_hs5laCr3QUVFO_AsGGdimj_OSYlDDNvfB-54KZx17F1MYNvyCpV4CnbKSCVeYZ7o91JZevtu_K7mP3gmUfnieMb7P2NPujST-sy1CbD3UAfF4Skwy665M9nXj-mSpBhHVXA4eFtIx_el1_vLFfPBRFUUdnRzKqcq7M-vjU-4YVEZs6fy13dA1fjvxZJp4MkSF9QSAdUYUZiSqAw2UekntZwPGQHB_cCkETh4bXQTo6AG0",
    alt: "Icône 3D abstraite minimaliste représentant la hausse des coûts",
  },
  {
    title: "Affichage Statique",
    text: "Un panneau fixe ne suit pas votre audience. Il reste immobile alors que le monde bouge.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzD-JDpKayBv6rXDixZg8BHz7s2gCZR9KLjM6e5vTfes8cLGgHjkRFsn7sMLWs4BB2zR5Noi75NIWEgDqx0xQL5gg_DNkx8S_vlxQh-wLiv6zGLkPdFSre6ehejUoHG9Jz-y-YR9R__kE_2ibZ838K3Fztas3qgK26McbDPmXpJp61fJ4HCiDFkLuv2xg93OUdLbZgsgqUiQ36o8sXeIIg15hKDhlDR07ESlRRxnb6OxdxH57OmEF10wvCyC0Bnc4iAGphspDOHzQ",
    alt: "Icône 3D abstraite minimaliste représentant un panneau statique",
  },
  {
    title: "Visibilité Limitée",
    text: "Comment émerger dans une jungle urbaine saturée d'écrans immobiles ?",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbm1cmYH2cR2dvJ76BnYlO3XxsVmFJDSjP7HeDQX1ZcirBcDdZkc64pQRyNKGIYeR9lVQ0NbkIq4p1Uo5J3QNJLBjCcdkhDqACLypXK63zMMMapNhnuAWOPNoMGmOArdCPQpLWslTLnFd7VvS8Fo3bj52vB6lZaqdIjIdhFSKT2zsCbhx5wPMnlXvqRqjxGr0gvMQvcWrSvt0DJEB0gsyId1j9ERbZ-0rEpPEaAaZHz088yFxMW7U-5aU31O-WI8NT7gghJULyzpw",
    alt: "Icône 3D abstraite représentant une vision restreinte",
  },
  {
    title: "Bruit Local",
    text: "Difficile de se démarquer face aux géants quand on est un acteur local.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxY99LSYFwhIwGnflOMY7NTRIv6DsQA8hM85FyhhIok0hAx-Yad5uVom2CkHr-CIzD7TqM0iUu4cXWronezW35nbJoTLTFqI39tJHUCwLHZAYb6JSy83ShtqNZtX3zNdqyWmD3vwRUiBmk4gwVXcyIibuiBtE6y7gcu8cl2O1POidAhGhudg14W8iZLtXfe3s_Vqd3BgPeRGOWyYNwtDZVWs3cDyRjw2Oea5yFnoj2WH6DCR-qCDET4Z55AyaPvgya8jE55v5tR6s",
    alt: "Icône 3D abstraite représentant un phare se démarquant d'une foule",
  },
];

export default function Problem() {
  return (
    <section className="relative py-20 sm:py-32 bg-surface overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-v2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-20 -left-20 w-80 opacity-[0.04] -rotate-12"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-v2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-24 -right-16 w-72 opacity-[0.05] rotate-12"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-20 text-center max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Le constat
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-primary mb-6">
            Pourquoi la publicité traditionnelle échoue ?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-surface-container-low p-6 sm:p-10 rounded-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-2xl overflow-hidden mb-8 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  alt={card.alt}
                  src={card.img}
                />
              </div>
              <h3 className="text-xl font-bold font-headline text-primary mb-4">
                {card.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
