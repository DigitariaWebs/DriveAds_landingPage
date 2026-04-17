type Step = {
  title: string;
  text: string;
  img: string;
  alt: string;
};

const steps: Step[] = [
  {
    title: "Configurez",
    text: "Définissez vos objectifs et votre zone de chalandise.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3c43jXsgNfNLt036w6SEn8uUTblx_iqp7xS6vKiwYWfOxCXDi4zVeg9V44jTB_WoJXBmLUJgprE0Sn3HCUaWtWrNZ5WzmUqXHZ8n2NFmeJcNKYGs1qeTDxKacky1lIPVzoofAwlRXbj_3LyPL3fFCNRihRPGGL8DAQqtWYLmzaKBjUTfGjFkaDo8fzfTLY3cwYnDCXP0EU_E_qjBoPTPU88KvZHcx-LK6UQf-atgqacpZ-rTSgVlyq3an2rj4dySQXX79KRwF1KM",
    alt: "Icône 3D d'un mégaphone en bleu nuit et jaune",
  },
  {
    title: "Créez",
    text: "Importez vos visuels ou utilisez nos services créatifs.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQZMnR5y-cVh6E9rWu8rf0UXOnH6-mVcjjeLhZ4PDOhQmtNrnehHuBqF52Y3umnlfcRP1L7EFfEc7UnlOYYanlLVa-vnowYWbTDMrKMWkDJGwIQo25TtSFd68IRICr9sH-GUtkjNkPl8Jtvawqb7UTVzf28GUwzd51O53EaAWvbfTB9fr7BRH9GZZJYT8ZQwEPedCSzhSoUYS5ebNwYN9X9jDSHLgEFT7H0xcqi1b9NdGdkWRKbm0SFFtNvsiONKwniZNETIzTrMc",
    alt: "Icône 3D d'une palette créative en bleu nuit et jaune",
  },
  {
    title: "Lancez",
    text: "Votre campagne part sur les routes en 48h chrono.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHP7n5yiKDgIeD-dROi-PmMFKwFIhS22gc555lD2V345kqw0WMrb4iVhcat7W_hY_I7KD-YtmWin8q5z8NradCQJnnUUSQdQQfZtoaRKsa57hEm_KpN11zDtM1EXMJFdTRzRIZLwifbcxpVs6Wqhyq5RcRjdl3xH-pziN6rtgC0GswD2divscUyOEGbRHnBMdBAJHTYkEAx-qlXWO-GRdUyvMDu71M0YIagC7NGZr2SOpAZR0kq9apOQ1RGQxO75AqyW3vntRXACg",
    alt: "Icône 3D d'un véhicule en mouvement en bleu nuit et jaune",
  },
  {
    title: "Analysez",
    text: "Suivez vos performances en temps réel sur l'app.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkvsbm10zY2eCoIoA-CWy9X5T9nE4vO5TSsjnaNZDy5apr1HPbmeYfLqZipjFXohX1klOJZxhlLZKWr7AL3WuwvqrR7AqMwm_6ATIZVmgKCb2C3HeEZYsVeXW1rGPDpR8XAw_z6N9r3ajsPz_LHgCGK2rm54chNZRq_PfmjRyJXgx9JhBRiwbJfiFLpqxWaBqZEpdYuyXTADxa_qdUeZXSs5T8IhqHuXVbMJUEXnGfZl6tl01KLcaR0ClVny0-Eqh0W3vn5kLczxk",
    alt: "Icône 3D d'un tableau de bord analytique en bleu nuit et jaune",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-32 bg-surface" id="timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-primary text-center mb-16 sm:mb-24">
          Comment ça marche ?
        </h2>
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-surface-container-highest z-0"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.title} className="text-center group">
                <div className="w-20 h-20 rounded-full border-4 border-surface shadow-xl overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 bg-surface-container-lowest">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover"
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
      </div>
    </section>
  );
}
