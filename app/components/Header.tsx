"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#solutions", label: "Solutions" },
  { href: "#timeline", label: "Timeline" },
  { href: "#app", label: "App" },
  { href: "#pricing", label: "Pricing" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="#" aria-label="PUBleader" className="flex items-center">
          <Image
            src="/logo.png"
            alt="PUBleader"
            width={96}
            height={96}
            priority
            quality={100}
            sizes="(max-width: 640px) 40px, 48px"
            className="h-10 sm:h-12 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8 font-label">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-slate-600 hover:text-[#1B2B58] transition-colors duration-300"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="hidden md:block text-[#1B2B58] font-medium hover:text-yellow-500 transition-all">
            Se connecter
          </button>
          <button className="bg-secondary-fixed text-on-secondary-fixed px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-bold hover:scale-95 duration-150 active:opacity-80">
            Rejoindre
          </button>
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#1B2B58]"
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl">
          <ul className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 text-slate-600 hover:text-[#1B2B58] hover:bg-slate-50 rounded font-label"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full text-left py-3 px-2 text-[#1B2B58] font-medium">
                Se connecter
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
