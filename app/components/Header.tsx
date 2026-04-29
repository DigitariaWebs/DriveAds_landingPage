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
          <div className="relative h-20 w-28 sm:h-24 sm:w-32 overflow-hidden">
            <Image
              src="/logo.png"
              alt="PUBleader"
              fill
              priority
              quality={100}
              sizes="(max-width: 640px) 112px, 128px"
              className="object-contain object-center"
            />
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8 font-label">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-slate-800 font-extrabold hover:text-[#3A506B] transition-colors duration-300"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <a
            href="#contact"
            className="hidden md:block text-[#3A506B] font-extrabold hover:text-primary-container transition-all"
          >
            Contactez-nous
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
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#3A506B]"
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
                  className="block py-3 px-2 text-slate-800 font-extrabold hover:text-[#3A506B] hover:bg-slate-50 rounded font-label"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block py-3 px-2 text-[#3A506B] font-extrabold"
              >
                Contactez-nous
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
