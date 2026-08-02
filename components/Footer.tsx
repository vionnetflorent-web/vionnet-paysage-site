import Image from "next/image";
import { siteConfig } from "@/lib/content";

// Site-wide footer with logo, service area, and contact links.
export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/[0.08] px-6 sm:px-10 lg:px-[52px] py-[54px]">
      <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/vionnet-flower.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-auto block"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[22px] tracking-[0.15em] text-ink font-semibold">
              VIONNET
            </span>
            <span className="text-[8px] tracking-[0.44em] text-[#9a9a95] mt-[3px]">
              PAYSAGE
            </span>
          </span>
        </div>

        <div className="flex flex-wrap gap-7 text-sm text-[#55554f] items-center">
          <span className="text-[#8a8a83]">Saint-Brieuc · Côtes-d&apos;Armor (22)</span>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="no-underline text-[#55554f] hover:text-accent transition-colors"
          >
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="no-underline text-[#55554f] hover:text-accent transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="text-xs tracking-[0.06em] text-[#9a9a95]">
          © {siteConfig.year} {siteConfig.name} — {siteConfig.tagline}
        </div>
      </div>
    </footer>
  );
}
