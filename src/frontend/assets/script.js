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
    title: "A1 Sportback",
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
    title: "A1 Sportback",
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
    title: "A1 Sportback",
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
    title: "A1 Sportback",
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
    title: "A1 Sportback",
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
    title: "A1 Sportback",
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
    title: "A1 Sportback",
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
    title: "A1 Sportback",
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

// -------------
const applyAnimation = (element, property, newValue) => {
  // Définit l'animation de sortie (fade out)
  element.style.transition = "opacity 0.1s ease, transform 0.1s ease";
  element.style.opacity = 0;
  element.style.transform = "scale(0.9)";

  setTimeout(() => {
    // Change la propriété spécifiée après l'animation de sortie
    element[property] = newValue;

    // Définit l'animation d'entrée (fade in)
    element.style.opacity = 1;
    element.style.transform = "scale(1)";
  }, 100); // Délai correspondant à la durée de la transition (500ms)
};

// ------------
const contacter = document.getElementById("contacter");

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("#footer");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Le footer est visible.");
        // contacter.children[0].src = "/move_up.svg";
        // contacter.children[1].textContent = "Remonter sur la page";

        applyAnimation(contacter.children[0], "src", "/move_up.svg");
        applyAnimation(
          contacter.children[1],
          "textContent",
          "Remonter sur la page"
        );
      } else {
        // contacter.children[0].src = "/phone.svg";
        // contacter.children[1].textContent = "Contacter un conseiller";

        applyAnimation(contacter.children[0], "src", "/phone.svg");
        applyAnimation(
          contacter.children[1],
          "textContent",
          "Contacter un conseiller"
        );
      }
    });
  });

  observer.observe(footer);
});

let scrollY = window.scrollY;
// recuperer le srcoll Y et mettre à jour la variable scrollY
window.addEventListener("scroll", () => {
  scrollY = window.scrollY;
  console.log(scrollY);
});

contacter.addEventListener("click", () => {
  console.log("click");
  console.log(contacter.children[1].textContent);
  if (contacter.children[1].textContent === "Contacter un conseiller") {
    localStorage.setItem("scrollY", scrollY);
    // scroll en bas de page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  } else {
    // scroll en haut de page
    window.scrollTo({
      top: localStorage.getItem("scrollY"),
      behavior: "smooth",
    });
  }

  // console.log("click");

  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth",
  // });
});
