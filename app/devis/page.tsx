"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Quote request form. Submits to /api/devis (see app/api/devis/route.ts).
// This is a client component because it needs form state — everything
// else in the app stays a server component by default.
export default function DevisPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Header />
      <main className="mt-[74px] min-h-[70vh] bg-stone px-6 sm:px-10 lg:px-12 py-24">
        <div className="max-w-[560px] mx-auto">
          <div className="text-xs tracking-[0.34em] uppercase text-accent text-center">
            Devis gratuit
          </div>
          <h1 className="font-serif font-medium text-[34px] sm:text-[42px] mt-4 text-ink text-center">
            Décrivez votre projet
          </h1>

          {status === "sent" ? (
            <p className="mt-10 text-center text-base text-[#33332f]">
              Merci — votre demande a bien été envoyée, nous revenons vers
              vous rapidement.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
              <input
                name="name"
                required
                placeholder="Nom"
                className="bg-white border border-black/10 rounded-lg px-4 py-3 text-base outline-none focus:border-accent"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="bg-white border border-black/10 rounded-lg px-4 py-3 text-base outline-none focus:border-accent"
              />
              <input
                name="phone"
                placeholder="Téléphone (optionnel)"
                className="bg-white border border-black/10 rounded-lg px-4 py-3 text-base outline-none focus:border-accent"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Votre projet en quelques mots..."
                className="bg-white border border-black/10 rounded-lg px-4 py-3 text-base outline-none focus:border-accent resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 bg-accent text-white rounded-full px-8 py-3.5 text-sm tracking-[0.08em] uppercase hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {status === "sending" ? "Envoi..." : "Envoyer la demande"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Une erreur est survenue, merci de réessayer.
                </p>
              )}
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
