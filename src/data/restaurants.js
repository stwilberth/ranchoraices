// Images for Restaurante Alquimia
import causaLimena from "../assets/images/restaurantes/alquimia/causa-limena-con-tartar.jpg";
import costilla from "../assets/images/restaurantes/alquimia/deliciosa-costilla-de.jpg";
import ceviche from "../assets/images/restaurantes/alquimia/delicioso-ceviche-peruano.jpg";
import hamburguesa from "../assets/images/restaurantes/alquimia/hamburguesa-alquimia.jpg";
import pescaDia from "../assets/images/restaurantes/alquimia/la-pesca-del-dia-delicioso.jpg";
import pizza from "../assets/images/restaurantes/alquimia/pizza-pizza-pizza.jpg";
import trufas from "../assets/images/restaurantes/alquimia/trufas-de-red-velvet.jpg";

export const restaurants = [
  {
    slug: "restaurante-alquimia",
    name: "Restaurante Alquimia",
    contact: {
      phone: "+506 8491 7041",
      email: "info@alquimia.com"
    },
    location: "Calle Teca, Ojochal 60504, Costa Rica",
    description: {
      es: "Restaurante Alquimia ofrece platillos de marisco e internacionales en un ambiente relajado en Ojochal. Destaca por su delicioso postre: trufas de red velvet.",
      en: "Restaurante Alquimia offers seafood and international dishes in a relaxed atmosphere in Ojochal. It stands out for its delicious dessert: red velvet truffles."
    },
    services: {
      es: [
        "Desayuno",
        "Comidas",
        "Cenas"
      ],
      en: [
        "Breakfast",
        "Lunch",
        "Dinner"
      ]
    },
    specialties: {
      es: [
        "Mariscos",
        "Trufas de red velvet"
      ],
      en: [
        "Seafood",
        "Red velvet truffles"
      ]
    },
    nearbyAttractions: {
      es: [
        { name: "Playa Zancudo", distance: "5 km" },
        { name: "Parque Nacional Corcovado", distance: "50 km" }
      ],
      en: [
        { name: "Zancudo Beach", distance: "5 km" },
        { name: "Corcovado National Park", distance: "50 km" }
      ]
    },
    hours: {
      monday: "7:00 – 20:00",
      tuesday: "7:00 – 20:00",
      wednesday: "7:00 – 20:00",
      thursday: "7:00 – 20:00",
      friday: "7:00 – 20:00",
      saturday: "7:00 – 20:00",
      sunday: "7:00 – 20:00"
    },
    images: [causaLimena, costilla, ceviche, hamburguesa, pescaDia, pizza, trufas],
    website: "#",
    facebook: "#",
    languages: ["Español", "English"]
  }
  // Add more as needed
];