import Image from "next/image";
import { siteConfig } from "@/lib/content";

// Homepage hero: logo + tagline on a stone panel, two photo placeholders
// on the right. Replace the placeholder divs with <Image> once real
// site photos are available (see README "Adding real photos").
export default function Hero() {
  return (
    <header
      id="top"
      className="mt-[74px] flex flex-wrap min-h-[calc(100vh-74px)]"
    >
      <div className="flex-[1_1_440px] bg-stone flex flex-col justify-center px-10 sm:px-14 lg:px-[72px] py-12 sm:py-16 lg:py-[88px]">
        <Image
          src="/images/vionnet-logo.png"
          alt="Vionnet Paysage"
          width={410}
          height={290}
          className="w-full max-w-[410px] h-auto block"
          priority
        />
        <div className="mt-11 h-px w-14 bg-accent" />
        <div className="mt-[26px] text-[13px] tracking-[0.36em] uppercase text-[#6f6f6a]">
          {siteConfig.tagline}
        </div>
        <p className="mt-[18px] max-w-[380px] text-base leading-[1.7] text-[#55554f]">
          {siteConfig.description}
        </p>
        <a
          href="#realisations"
          className="mt-10 inline-flex items-center gap-2.5 no-underline text-ink text-sm tracking-[0.1em] uppercase hover:gap-4 transition-all"
        >
          Voir nos réalisations{" "}
          <span className="font-serif text-[22px]">→</span>
        </a>
      </div>

      <div className="flex-[2_1_520px] flex min-h-[420px]">
        <div className="flex-1 relative bg-[repeating-linear-gradient(135deg,#e4e8e0_0_16px,#edf0e8_16px_32px)] border-l border-black/5 flex items-end p-6">
          <span className="font-mono text-[11px] tracking-[0.14em] text-[#7f8579] bg-white/70 px-2.5 py-1.5 rounded">
            PHOTO — jardin paysager
          </span>
        </div>
        <div className="flex-1 relative bg-[repeating-linear-gradient(135deg,#dee4d9_0_16px,#e7ebe2_16px_32px)] border-l border-black/5 flex items-end p-6">
          <span className="font-mono text-[11px] tracking-[0.14em] text-[#7f8579] bg-white/70 px-2.5 py-1.5 rounded">
            PHOTO — terrasse &amp; plantations
          </span>
        </div>
      </div>
    </header>
  );
}
