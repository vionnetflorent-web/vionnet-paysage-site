import { siteConfig } from "@/lib/content";

// Contact section: service area badge, phone/email, and a quote CTA.
// The CTA currently opens a mailto: — point it at "/devis" instead once
// the quote request form (app/devis) is ready to go live.
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-[90px] sm:py-28 lg:py-[150px] bg-stone"
    >
      <div className="max-w-[900px] mx-auto px-6 sm:px-10 lg:px-12 text-center">
        <div className="text-xs tracking-[0.34em] uppercase text-accent">
          Contact
        </div>
        <h2 className="font-serif font-medium text-[34px] sm:text-[46px] lg:text-[60px] leading-[1.1] mt-[22px] text-ink text-balance">
          Parlons de votre jardin.
        </h2>
        <p className="text-base leading-[1.7] text-[#55554f] mt-[22px] mx-auto max-w-[520px]">
          Devis gratuit et déplacement sur site. Contactez-nous pour étudier
          votre projet ensemble.
        </p>

        <div className="mt-[30px] inline-flex items-center gap-2.5 bg-white border border-black/10 px-5 py-[11px] rounded-full">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <span className="text-[13px] tracking-[0.05em] text-[#33332f]">
            Zone d&apos;intervention —{" "}
            <strong className="font-medium">{siteConfig.serviceArea}</strong>
          </span>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-14 items-center">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="no-underline flex flex-col items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#8a8a83]">
              Téléphone
            </span>
            <span className="font-serif text-[26px] sm:text-[32px] lg:text-[38px] text-ink tracking-[0.04em]">
              {siteConfig.phone}
            </span>
          </a>
          <span className="hidden sm:block w-px h-[46px] bg-black/[0.14]" />
          <a
            href={`mailto:${siteConfig.email}`}
            className="no-underline flex flex-col items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#8a8a83]">
              Email
            </span>
            <span className="font-serif text-[22px] sm:text-[28px] lg:text-[32px] text-ink">
              {siteConfig.email}
            </span>
          </a>
        </div>

        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-[52px] inline-block no-underline text-white bg-accent px-10 py-4 rounded-full text-sm tracking-[0.08em] uppercase hover:opacity-90 transition-opacity"
        >
          Demander un devis
        </a>
      </div>
    </section>
  );
}
