// Central place for all site copy, contact info and lists.
// Update this file to change text across the site without touching components.
// This is also the natural place to later swap for data fetched from a CMS.

export const siteConfig = {
  name: "Vionnet Paysage",
  tagline: "Conception · Création · Maintenance",
  description:
    "Paysagiste breton — création et entretien de jardins et d'extérieurs sur mesure, ancré dans les Côtes-d'Armor.",
  accentColor: "#0d6b4c",
  phone: "06 22 95 74 84",
  phoneHref: "+33622957484",
  email: "contact@vionnetpaysage.com",
  serviceArea: "Saint-Brieuc et ses environs, Côtes-d'Armor (22)",
  year: new Date().getFullYear(),
};

export const navLinks = [
  { href: "#conception", label: "Conception" },
  { href: "#creation", label: "Création" },
  { href: "#maintenance", label: "Maintenance" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#apropos", label: "À propos" },
];

export type Service = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePlaceholder?: string;
  reverse?: boolean;
};

// The three core service sections. Add a new entry here to add another
// service section to the homepage — ServiceSection.tsx renders each one.
export const services: Service[] = [
  {
    id: "conception",
    number: "01",
    eyebrow: "Conception",
    title: "Dessiner votre jardin",
    description:
      "Étude du terrain, plans d'aménagement, choix des végétaux et des matériaux. Nous imaginons un espace cohérent, adapté à vos usages, à l'exposition et à la lumière du lieu.",
    image: "/images/plan-conception.png",
    imageAlt: "Plan d'aménagement de jardin",
  },
  {
    id: "creation",
    number: "02",
    eyebrow: "Création",
    title: "Donner vie au projet",
    description:
      "Terrassement, maçonnerie paysagère, plantations, engazonnement, arrosage automatique. Nous réalisons l'ensemble des travaux avec des végétaux et des matériaux soigneusement sélectionnés.",
    image: "",
    imageAlt: "Chantier et plantations",
    imagePlaceholder: "PHOTO — chantier / plantations",
    reverse: true,
  },
  {
    id: "maintenance",
    number: "03",
    eyebrow: "Maintenance",
    title: "Entretenir dans la durée",
    description:
      "Taille, tonte, soin des massifs, entretien saisonnier et contrats annuels. Un suivi régulier pour que votre jardin gagne en caractère et en générosité, année après année.",
    image: "",
    imageAlt: "Taille et entretien saisonnier",
    imagePlaceholder: "PHOTO — taille & entretien saisonnier",
  },
];

export type GalleryItem = {
  label: string;
};

// Réalisations gallery placeholders — replace `image` with a real photo path
// (e.g. "/images/realisations/jardin-1.jpg") once you have project photos.
export const galleryItems: (GalleryItem & { image?: string })[] = [
  { label: "jardin contemporain" },
  { label: "terrasse & plantations" },
  { label: "massif fleuri" },
  { label: "allée & bordures" },
  { label: "bassin & minéral" },
  { label: "haie taillée" },
];

export const aboutTags = ["Écoute", "Savoir-faire", "Durabilité", "Proximité"];
