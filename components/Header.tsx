import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";

// Fixed top navigation with logo, section links, and a contact CTA.
// Reused as-is across every page (see app/layout.tsx if you want it global,
// or import directly per-page as done on the homepage).
export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[74px] flex items-center justify-between px-5 sm:px-8 lg:px-[52px] bg-white/[0.94] backdrop-blur-md border-b border-black/[0.07] z-[100]">
      <Link href="/#top" className="flex items-center gap-3 no-underline">
        <Image
          src="/images/vionnet-flower.png"
          alt="Vionnet Paysage"
          width={36}
          height={36}
          className="h-9 w-auto block"
          priority
        />
        <span className="flex flex-col leading-none">
          <span className="font-serif text-[23px] tracking-[0.15em] text-ink font-semibold">
            VIONNET
          </span>
          <span className="text-[8px] tracking-[0.44em] text-[#9a9a95] mt-[3px]">
            PAYSAGE
          </span>
        </span>
      </Link>

      <div className="hidden md:flex gap-6 lg:gap-9 items-center text-sm tracking-[0.03em]">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="no-underline text-[#33332f] hover:text-accent transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="no-underline text-white bg-accent px-5 py-2.5 rounded-full tracking-[0.05em] hover:opacity-90 transition-opacity"
        >
          Contact
        </a>
      </div>

      {/* Mobile: keep it simple — just the contact CTA, links are reachable
          by scrolling. Extend with a real menu/drawer if the page count grows. */}
      <a
        href="#contact"
        className="md:hidden no-underline text-white bg-accent px-4 py-2 rounded-full text-sm tracking-[0.05em]"
      >
        Contact
      </a>
    </nav>
  );
}
