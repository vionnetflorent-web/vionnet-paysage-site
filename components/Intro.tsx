// Centered intro statement between the hero and the service sections.
export default function Intro() {
  return (
    <section className="py-[90px] sm:py-[120px] lg:py-[150px] bg-white">
      <div className="max-w-[920px] mx-auto px-6 sm:px-10 lg:px-12 text-center">
        <div className="text-xs tracking-[0.34em] uppercase text-accent">
          Paysagiste en Bretagne
        </div>
        <h2 className="font-serif font-medium text-[32px] sm:text-[44px] lg:text-[58px] leading-[1.12] tracking-[0.01em] mt-6 text-ink text-balance">
          Composer avec le vivant, saison après saison.
        </h2>
        <p className="max-w-[660px] mx-auto mt-[30px] text-[17px] leading-[1.85] text-[#55554f] text-pretty">
          De l&apos;esquisse aux plantations, jusqu&apos;à l&apos;entretien au
          fil des saisons, nous concevons, réalisons et entretenons des
          jardins qui vous ressemblent — avec le même soin du détail à chaque
          étape.
        </p>
      </div>
    </section>
  );
}
