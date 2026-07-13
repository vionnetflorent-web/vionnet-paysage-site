import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Admin space placeholder. Before going further:
// - Add authentication (e.g. NextAuth.js or Clerk) to protect this route.
// - Move real admin logic into app/admin/**/page.tsx sub-routes.
// - Consider a route group like app/(admin)/ with its own layout once
//   the admin area has its own nav/shell distinct from the public site.
export default function AdminPage() {
  return (
    <>
      <Header />
      <main className="mt-[74px] min-h-[60vh] px-6 sm:px-10 lg:px-12 py-24 max-w-[700px] mx-auto text-center">
        <div className="text-xs tracking-[0.34em] uppercase text-accent">
          Espace privé
        </div>
        <h1 className="font-serif font-medium text-[34px] sm:text-[42px] mt-6 text-ink">
          Administration
        </h1>
        <p className="text-base leading-[1.8] text-[#55554f] mt-6">
          Cette section est prête à recevoir un espace d&apos;administration
          (gestion des réalisations, des articles de blog, des demandes de
          devis). Ajoutez une authentification avant de la mettre en ligne.
        </p>
      </main>
      <Footer />
    </>
  );
}
