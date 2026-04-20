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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-24 sm:h-28 flex items-center justify-between">
        <a href="#" aria-label="PUBleader" className="flex items-center">
          <div className="relative h-16 w-20 sm:h-20 sm:w-24 overflow-hidden">
            <Image
              src="/logo-v2.png"
              alt="PUBleader"
              fill
              priority
              quality={100}
              sizes="(max-width: 640px) 80px, 96px"
              className="object-cover object-center scale-[1.4]"
            />
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8 font-label">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-slate-800 font-extrabold hover:text-[#1B2B58] transition-colors duration-300"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <a
            href="#pricing"
            className="hidden md:block text-[#1B2B58] font-extrabold hover:text-primary-container transition-all"
          >
            Se connecter
          </a>
          <a
            href="#pricing"
            className="bg-secondary-fixed text-on-secondary-fixed px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-extrabold hover:scale-95 duration-150 active:opacity-80"
          >
            Rejoindre
          </a>
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
                  className="block py-3 px-2 text-slate-800 font-extrabold hover:text-[#1B2B58] hover:bg-slate-50 rounded font-label"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block py-3 px-2 text-[#1B2B58] font-extrabold"
              >
                Se connecter
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
