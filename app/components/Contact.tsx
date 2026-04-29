"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      `Demande Leader Borne — ${company || name}`
    );
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone}\nSociété : ${company}\n\nMessage :\n${message}`
    );

    window.location.href = `mailto:contact@publeader.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 bg-surface-container-low overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-primary mb-4">
            Discutons de votre Leader Borne
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Laissez-nous vos coordonnées, on revient vers vous sous 24h.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-outline-variant/20 p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          <div className="sm:col-span-1">
            <label
              htmlFor="contact-name"
              className="block text-sm font-bold text-primary mb-2"
            >
              Nom complet
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
              placeholder="Jean Dupont"
            />
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="contact-email"
              className="block text-sm font-bold text-primary mb-2"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
              placeholder="vous@entreprise.com"
            />
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="contact-phone"
              className="block text-sm font-bold text-primary mb-2"
            >
              Téléphone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
              placeholder="+33 6 12 34 56 78"
            />
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="contact-company"
              className="block text-sm font-bold text-primary mb-2"
            >
              Société / établissement
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
              placeholder="Hôtel des Champs, Concession auto, etc."
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="contact-message"
              className="block text-sm font-bold text-primary mb-2"
            >
              Votre projet
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition resize-none"
              placeholder="Décrivez votre site, le nombre de bornes envisagées, vos objectifs…"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-on-surface-variant">
              En envoyant ce formulaire, vous acceptez d&apos;être recontacté
              par notre équipe.
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-primary-container transition-all disabled:opacity-60"
            >
              <span className="material-symbols-outlined text-xl">send</span>
              {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>
          </div>

          {status === "sent" && (
            <p className="sm:col-span-2 text-sm text-secondary font-medium">
              Votre client mail s&apos;est ouvert avec votre message prérempli.
              Validez l&apos;envoi pour finaliser la demande.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
