import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Placeholder blog index. Once ready, replace the list below with real
// posts — e.g. fetched from a headless CMS (Sanity, Contentful) or from
// local MDX files under app/blog/[slug]/page.tsx.
export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="mt-[74px] min-h-[60vh] px-6 sm:px-10 lg:px-12 py-24 max-w-[900px] mx-auto text-center">
        <div className="text-xs tracking-[0.34em] uppercase text-accent">
          Journal
        </div>
        <h1 className="font-serif font-medium text-[36px] sm:text-[48px] mt-6 text-ink">
          Le blog arrive bientôt
        </h1>
        <p className="text-base leading-[1.8] text-[#55554f] mt-6 max-w-[560px] mx-auto">
          Conseils de saison, retours de chantier et actualités du jardin —
          cette page est prête à accueillir vos premiers articles.
        </p>
      </main>
      <Footer />
    </>
  );
}
