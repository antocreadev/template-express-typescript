import { createComponent } from "./components/item.js";

console.log(createComponent);
const data = [
  {
    image: "/q4.png",
    title: "Q4 Sportback e-tron",
    description: "Un nouveau plaisir de conduite",
    link: "https://www.audi.fr/fr/web/fr/gamme/q4-e-tron/audi-q4-sportback-e-tron.html",
    price: 53550,
    remise: 10,
  },
  {
    image: "/audiA7_sportback.png",
    title: "Audi A7 Sportback",
    description: "Le Coupé luxueux au design racé",
    link: "https://www.audi.fr/fr/web/fr/gamme/a7/a7-sportback.html",
    price: 75390,
    remise: 5,
  },
  {
    image: "/Audi-R8-Coupé-V10-performance-quattro.png",
    title: "R8 Coupé V10 performance quattro",
    description: "La plus intense des supercars",
    link: "https://www.audi.fr/fr/web/fr/gamme/r8/r8-coupe-v10-performance-quattro.html",
    price: 126200,
    remise: 10,
  },
  {
    image: "/AudiA1_Sportback.png",
    title: "Un modèle athlétique et connecté",
    description: "Un modèle athlétique et connecté",
    link: "https://www.audi.fr/fr/web/fr/gamme/a1/a1-sportback.html",
    price: 26990,
    remise: 15,
  },
  {
    image: "/S5_cabriolet.png",
    title: "S5 Cabriolet",
    description: "Le Cabriolet au dynamisme sensationnel",
    link: "https://www.audi.fr/fr/web/fr/gamme/a5/s5-cabriolet.html",
    price: 58595,
    remise: 10,
  },
];

// Sélectionner l'élément "app" dans le DOM
const app = document.getElementById("items");

// Boucler à travers le tableau et ajouter chaque composant au DOM
data.forEach((item) => {
  const component = createComponent(item);
  app.appendChild(component);
});
