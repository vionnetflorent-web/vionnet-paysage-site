import { aboutTags } from "@/lib/content";

// "À propos" section. The portrait/team photo is a placeholder — swap
// the placeholder div below for an <Image> once a real photo exists.
export default function About() {
  return (
    <section
      id="apropos"
      className="py-[90px] sm:py-28 lg:py-[140px] bg-white"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-wrap items-center gap-10 sm:gap-16 lg:gap-[84px]">
        <div className="flex-[1_1_320px] h-[320px] sm:h-[420px] lg:h-[500px] bg-[repeating-linear-gradient(135deg,#e4e8e0_0_16px,#edf0e8_16px_32px)] border border-black/[0.06] flex items-end p-[22px]">
          <span className="font-mono text-[11px] tracking-[0.14em] text-[#7f8579] bg-white/75 px-2.5 py-1.5 rounded">
            PHOTO — portrait / équipe
          </span>
        </div>

        <div className="flex-[1.1_1_380px]">
          <div className="text-xs tracking-[0.34em] uppercase text-accent">
            À propos
          </div>
          <h2 className="font-serif font-medium text-[30px] sm:text-[38px] lg:text-[48px] leading-[1.14] mt-[18px] text-ink text-balance">
            Un paysagiste breton, enraciné dans son territoire
          </h2>
          <p className="text-base leading-[1.85] text-[#55554f] mt-6 max-w-[520px] text-pretty">
            Paysagiste breton installé autour de Saint-Brieuc, Vionnet
            Paysage accompagne particuliers et professionnels dans la
            création et l&apos;entretien de leurs extérieurs.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-3">
            {aboutTags.map((tag) => (
              <span
                key={tag}
                className="text-[13px] tracking-[0.06em] text-ink border border-black/[0.14] px-[18px] py-[9px] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
