import Image from "next/image";
import { galleryItems } from "@/lib/content";

// Dark "Réalisations" gallery. Backed by `galleryItems` in lib/content.ts —
// add an `image` path per item once real project photos are available and
// this component will render the photo instead of the placeholder tile.
export default function Realisations() {
  return (
    <section
      id="realisations"
      className="py-[90px] sm:py-28 lg:py-[140px] bg-forest"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="text-xs tracking-[0.34em] uppercase text-[#a7c4b4]">
              Nos jardins
            </div>
            <h2 className="font-serif font-medium text-[32px] sm:text-[44px] lg:text-[54px] leading-[1.1] mt-4 text-[#f4f2ec]">
              Réalisations
            </h2>
          </div>
          <p className="max-w-[380px] text-[15px] leading-[1.7] text-[#c3d3ca] m-0">
            Un aperçu de nos aménagements — galerie à compléter avec vos
            propres photos de chantiers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[18px]">
          {galleryItems.map((tile, i) => (
            <div
              key={tile.label}
              className="h-[300px] relative overflow-hidden border border-white/[0.14] flex flex-col justify-between p-5 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.10)_0_16px,rgba(255,255,255,0.05)_16px_32px)]"
            >
              {tile.image ? (
                <Image
                  src={tile.image}
                  alt={tile.label}
                  fill
                  sizes="(min-width: 1024px) 280px, 100vw"
                  className="object-cover"
                />
              ) : (
                <>
                  <span className="font-serif text-2xl text-white/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-[#bdd0c6]">
                    PHOTO — {tile.label}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
