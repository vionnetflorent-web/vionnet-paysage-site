import Image from "next/image";
import type { Service } from "@/lib/content";

// One reusable block for each of the three services (Conception, Création,
// Maintenance). `reverse` flips the image/text order on desktop.
// Pass a real `image` path to show a photo, or omit it to show the
// dashed placeholder (useful before real site photos exist).
export default function ServiceSection({ service }: { service: Service }) {
  const { id, number, eyebrow, title, description, image, imageAlt, imagePlaceholder, reverse } =
    service;

  const isEven = number === "02"; // matches original alternating background
  const bg = isEven ? "bg-[#f7f6f3]" : "bg-white";
  const padTop = number === "01" ? "pt-0" : "py-[72px] sm:py-24 lg:py-[120px]";

  return (
    <section
      id={id}
      className={`${bg} ${number === "01" ? "pb-[72px] sm:pb-24 lg:pb-[120px]" : ""} ${padTop}`}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-wrap items-center gap-9 sm:gap-14 lg:gap-[72px]">
        {/* Image is always first in source order (so it's on top on mobile);
            `reverse` only swaps left/right on desktop via the order utility. */}
        <div
          className={`order-1 ${reverse ? "sm:order-2" : ""} flex-[1.15_1_380px] h-[300px] sm:h-[400px] lg:h-[460px] relative overflow-hidden bg-white border-[0.5px] border-ink rounded-sm`}
        >
          {image ? (
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[repeating-linear-gradient(135deg,#e4e8e0_0_16px,#edf0e8_16px_32px)] flex items-end p-[22px]">
              <span className="font-mono text-[11px] tracking-[0.14em] text-[#7f8579] bg-white/75 px-2.5 py-1.5 rounded">
                {imagePlaceholder}
              </span>
            </div>
          )}
        </div>

        <div className={`order-2 ${reverse ? "sm:order-1" : ""} flex-[1_1_340px]`}>
          <div className="flex items-baseline gap-3.5">
            <span className="font-serif text-[30px] text-accent">{number}</span>
            <span className="text-xs tracking-[0.3em] uppercase text-[#8a8a83]">
              {eyebrow}
            </span>
          </div>
          <h3 className="font-serif font-medium text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.15] mt-4 text-ink">
            {title}
          </h3>
          <p className="text-base leading-[1.8] text-[#55554f] mt-5 max-w-[460px] text-pretty">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
