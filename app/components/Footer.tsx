export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="flex flex-col md:flex-row justify-between mb-12 sm:mb-16 gap-12 md:gap-8">
          <div className="max-w-xs">
            <div className="mb-6 relative h-28 w-36 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="PUBleader"
                className="absolute inset-0 w-full h-full object-contain object-center"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              La première régie publicitaire dynamique sur véhicules motorisés.
              Innovons ensemble pour la ville de demain.
            </p>
            <div className="flex space-x-4">
              <a
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:text-secondary transition-colors"
                href="#"
                aria-label="Site web"
              >
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:text-secondary transition-colors"
                href="#"
                aria-label="Chat"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:text-secondary transition-colors"
                href="#"
                aria-label="Campagnes"
              >
                <span className="material-symbols-outlined text-lg">
                  campaign
                </span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 md:gap-24">
            <div>
              <h4 className="font-bold text-primary mb-6">Liens Utiles</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-slate-500 hover:text-[#3A506B] transition-all text-sm"
                    href="#"
                  >
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 hover:text-[#3A506B] transition-all text-sm"
                    href="#"
                  >
                    Conditions générales
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 hover:text-[#3A506B] transition-all text-sm"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 hover:text-[#3A506B] transition-all text-sm"
                    href="#"
                  >
                    Recrutement
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-6">Contact</h4>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                123 Avenue des Champs-Élysées
                <br />
                75008 Paris, France
              </p>
              <p className="text-slate-500 text-sm">hello@publeader.fr</p>
              <p className="text-slate-500 text-sm">+33 1 23 45 67 89</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4 text-center md:text-left">
          <p>© 2026 PUBleader.</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <a className="hover:text-primary transition-colors" href="#">
              LinkedIn
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Instagram
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              X / Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
