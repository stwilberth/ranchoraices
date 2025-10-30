import img1 from "../assets/images/hospedajes/villa-casa-sirena/1.jpg";
import img2 from "../assets/images/hospedajes/villa-casa-sirena/2.jpg";
import img3 from "../assets/images/hospedajes/villa-casa-sirena/3.jpg";
import img4 from "../assets/images/hospedajes/villa-casa-sirena/4.jpg";
import img5 from "../assets/images/hospedajes/villa-casa-sirena/5.jpg";
import img6 from "../assets/images/hospedajes/villa-casa-sirena/6.jpg";
import img7 from "../assets/images/hospedajes/villa-casa-sirena/7.jpg";
import img8 from "../assets/images/hospedajes/villa-casa-sirena/8.jpg";
import img9 from "../assets/images/hospedajes/villa-casa-sirena/9.jpg";
import img10 from "../assets/images/hospedajes/villa-casa-sirena/10.jpg";
import img11 from "../assets/images/hospedajes/villa-casa-sirena/11.jpg";

// Images for Cabinas & Restaurante Hidalgo's
import hidalgo1 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/1.jpg";
import hidalgo2 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/2.jpg";
import hidalgo3 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/3.jpg";
import hidalgo4 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/4.jpg";
import hidalgo5 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/5.jpg";
import hidalgo6 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/6.jpg";
import hidalgo7 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/7.jpg";
import hidalgo8 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/8.jpg";

// Images for Cabinas & Restaurante Hidalgo's
import hidalgo1 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/1.jpg";
import hidalgo2 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/2.jpg";
import hidalgo3 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/3.jpg";
import hidalgo4 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/4.jpg";
import hidalgo5 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/5.jpg";
import hidalgo6 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/6.jpg";
import hidalgo7 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/7.jpg";
import hidalgo8 from "../assets/images/hospedajes/cabinas-restaurante-hidalgos/8.jpg";

export const accommodations = [
  {
    slug: "villa-casa-sirena",
    name: "Villa Casa Sirena",
    contact: {
      phone: "+506 8639 4010",  // Replace with actual WhatsApp number
      email: "contacto@villacasasirena.com"  // Replace with actual email
    },
    location: "Calle Griffin, 61801 Puerto Jiménez, Costa Rica",
    description: {
      es: "Villa Casa Sirena está en Puerto Jiménez, a solo 15 km del Aeropuerto de Puerto Jiménez. El alojamiento dispone de wifi gratis, jardín, terraza y bar. Hay parking privadogratis en la casa o chalet. Ideal para familias y mascotas.",
      en: "Villa Casa Sirena is located in Puerto Jiménez, just 15 km from Puerto Jiménez Airport. The accommodation features free WiFi, garden, terrace, and bar. Free private parking is available at the villa. Ideal for families and pets."
    },
    amenities: {
      es: [
        "WiFi gratis",
        "Parking privado gratuito",
        "Jardín",
        "Terraza",
        "Bar",
        "Cocina equipada",
        "Lavadora",
        "Admite mascotas",
        "Habitaciones familiares",
        "Prohibido fumar"
      ],
      en: [
        "Free WiFi",
        "Free private parking",
        "Garden",
        "Terrace",
        "Bar",
        "Fully equipped kitchen",
        "Washing machine",
        "Pet-friendly",
        "Family rooms",
        "Non-smoking throughout"
      ]
    },
    roomDetails: {
      type: "Casa de 2 dormitorios",
      bedrooms: [
        { name: "Dormitorio 1", beds: "1 cama doble" },
        { name: "Dormitorio 2", beds: "1 cama individual" }
      ]
    },
    nearbyAttractions: {
      es: [
        { name: "Parque Nacional Corcovado", distance: "800 m" },
        { name: "Parque Golfito 2", distance: "4,8 km" },
        { name: "Aeropuerto de Puerto Jiménez", distance: "15 km" }
      ],
      en: [
        { name: "Corcovado National Park", distance: "800 m" },
        { name: "Golfito 2 Park", distance: "4.8 km" },
        { name: "Puerto Jiménez Airport", distance: "15 km" }
      ]
    },
    checkInOut: {
      checkIn: "14:00",
      checkOut: "12:00"
    },
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11],
    website: "#",
    facebook: "#",
    languages: ["Español", "English"]
  },
  {
    slug: "cabinas-restaurante-hidalgos",
    name: "Cabinas & Restaurante Hidalgo's",
    contact: {
      phone: "+506 8613-1842",  // Primary phone
      email: "info@hidalgos.com"  // Placeholder email
    },
    location: "Puerto Jiménez, Península de Osa, Costa Rica",
    description: {
      es: "Cabinas & Restaurante Hidalgo's ofrece un ambiente familiar y acogedor en el corazón de Puerto Jiménez. Disfruta de cómodas habitaciones, deliciosa comida típica costarricense y la atención personalizada que caracteriza a este lugar. Ideal para quienes buscan descanso, buena comida y una experiencia local auténtica.",
      en: "Cabinas & Restaurante Hidalgo's offers a family-friendly and cozy atmosphere in the heart of Puerto Jiménez. Enjoy comfortable rooms, delicious typical Costa Rican food, and the personalized attention that characterizes this place. Ideal for those seeking rest, good food, and an authentic local experience."
    },
    amenities: {
      es: [
        "Restaurante con comida típica",
        "Cabinas cómodas y limpias",
        "Parqueo privado gratuito",
        "WiFi gratis",
        "Ambientes familiares",
        "Pet-friendly"
      ],
      en: [
        "Restaurant with typical food",
        "Comfortable and clean cabins",
        "Free private parking",
        "Free WiFi",
        "Family environments",
        "Pet-friendly"
      ]
    },
    roomDetails: {
      type: "Cabinas individuales y familiares",
      bedrooms: [
        { name: "Cabina Estándar", beds: "1-2 camas" },
        { name: "Cabina Familiar", beds: "2-4 camas" }
      ]
    },
    nearbyAttractions: {
      es: [
        { name: "Parque Nacional Corcovado", distance: "800 m" },
        { name: "Playa Puntarenitas", distance: "2 km" },
        { name: "Aeropuerto de Puerto Jiménez", distance: "1.5 km" }
      ],
      en: [
        { name: "Corcovado National Park", distance: "800 m" },
        { name: "Puntarenitas Beach", distance: "2 km" },
        { name: "Puerto Jiménez Airport", distance: "1.5 km" }
      ]
    },
    checkInOut: {
      checkIn: "14:00",
      checkOut: "12:00"
    },
    images: [hidalgo1, hidalgo2, hidalgo3, hidalgo4, hidalgo5, hidalgo6, hidalgo7, hidalgo8],
    website: "#",
    facebook: "#",
    languages: ["Español", "English"]
  }
  // Add more as needed
];