# Vionnet Paysage — site Next.js

Site vitrine pour Vionnet Paysage (paysagiste, Saint-Brieuc / Côtes-d'Armor),
construit avec Next.js 15 (App Router), TypeScript et Tailwind CSS.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Déployer sur Vercel

1. Poussez ce dossier sur un repo GitHub/GitLab/Bitbucket.
2. Sur [vercel.com](https://vercel.com), "New Project" → importez le repo.
3. Vercel détecte Next.js automatiquement — aucune configuration requise.
   Cliquez "Deploy".

## Structure du projet

```
app/
  layout.tsx        → layout racine (polices, <html>/<body>, metadata)
  page.tsx           → page d'accueil (assemble les sections)
  globals.css        → styles de base + variable --accent-color
  blog/page.tsx       → placeholder blog (à remplacer par de vrais articles)
  realisations/page.tsx → galerie complète des réalisations
  devis/page.tsx      → formulaire de demande de devis (client component)
  admin/page.tsx      → placeholder espace admin (⚠️ sans authentification)
  api/devis/route.ts  → endpoint qui reçoit les demandes de devis

components/
  Header.tsx, Footer.tsx
  Hero.tsx, Intro.tsx
  ServiceSection.tsx  → bloc réutilisable (Conception / Création / Maintenance)
  Realisations.tsx    → galerie (preview homepage)
  About.tsx, Contact.tsx

lib/
  content.ts          → TOUT le texte, les coordonnées, les listes.
                         Modifiez ce fichier pour changer le contenu du
                         site sans toucher aux composants.

public/images/         → logo, motif fleur, plan de conception.
```

## Modifier le contenu

La quasi-totalité des textes, coordonnées et listes vit dans
`lib/content.ts` (`siteConfig`, `navLinks`, `services`, `galleryItems`,
`aboutTags`). C'est le premier fichier à ouvrir pour un changement de
texte, de téléphone, d'email ou de zone d'intervention.

## Ajouter de vraies photos

- **Réalisations / chantiers** : ajoutez vos fichiers dans
  `public/images/realisations/` puis renseignez `image` sur l'entrée
  correspondante dans `galleryItems` (lib/content.ts).
- **Création / Maintenance** : renseignez `image` sur le service
  correspondant dans `services` (lib/content.ts) — le composant
  `ServiceSection` bascule automatiquement de l'espace réservé pointillé
  vers la photo (affichée via `next/image`, optimisée automatiquement).
- **Portrait / équipe** : remplacez le bloc placeholder dans
  `components/About.tsx` par un `<Image>`.

## Évolutions prévues

Le projet est structuré pour accueillir facilement, sans réécrire
l'existant :

- **Blog** (`app/blog/`) : remplacez le contenu statique par des articles
  MDX (`app/blog/[slug]/page.tsx`) ou par un appel à un CMS headless
  (Sanity, Contentful, etc.).
- **Galerie de réalisations** (`app/realisations/`) : ajoutez simplement
  des entrées à `galleryItems` ; passez à une source de données externe
  (CMS, base de données) quand le volume de photos le justifie.
- **Formulaire de devis** (`app/devis/` + `app/api/devis/route.ts`) :
  l'endpoint reçoit déjà les soumissions et les logue — branchez-y un
  envoi d'email (Resend, SendGrid) ou un stockage (base de données,
  Airtable) dans `app/api/devis/route.ts`.
- **Espace d'administration** (`app/admin/`) : placeholder non protégé.
  Ajoutez une authentification (NextAuth.js, Clerk) avant toute mise en
  ligne, puis construisez les sous-pages de gestion (réalisations,
  articles, demandes de devis).

## Personnalisation visuelle

- Couleur d'accent : variable CSS `--accent-color` dans
  `app/globals.css` (utilisée par la classe Tailwind `accent`).
- Polices : Cormorant Garamond (titres) et Jost (texte courant), chargées
  via `next/font/google` dans `app/layout.tsx`.

## Stack

- [Next.js 15](https://nextjs.org/docs) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

Aucune dépendance superflue : uniquement Next.js, React et Tailwind.
