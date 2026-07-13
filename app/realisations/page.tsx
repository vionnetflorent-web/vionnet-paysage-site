import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryItems } from "@/lib/content";

// Full réalisations gallery page (the homepage only shows a preview via
// components/Realisations.tsx). Add more entries to `galleryItems` in
// lib/content.ts — this page and the homepage section share that data.
export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className="mt-[74px] bg-forest py-24 px-6 sm:px-10 lg:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-xs tracking-[0.34em] uppercase text-[#a7c4b4]">
            Nos jardins
          </div>
          <h1 className="font-serif font-medium text-[40px] sm:text-[54px] mt-4 text-[#f4f2ec]">
            Toutes nos réalisations
          </h1>

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
      </main>
      <Footer />
    </>
  );
}
