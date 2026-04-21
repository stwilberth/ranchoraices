// Simple i18n utility for Astro/React
export const languages = {
  es: {
    siteName: 'Rancho Raíces',
    home: 'Inicio',
    tours: 'Tours',
    restaurants: 'Restaurantes',
    about: 'Sobre Nosotros',
    gallery: 'Galería',
    contact: 'Contacto',
    accommodations: 'Hospedajes',
    blog: 'Blog',
    reserve: 'Reservar',
    heroTitle: 'Vive la experiencia del chocolate orgánico en la Península de Osa',
    heroSubtitle: 'Turismo rural, permacultura y naturaleza en Costa Rica',
    cta: 'Reserva tu tour',
    switchLang: 'English',
    fundraisingTitle: 'Ayudemos a Josué a Caminar',
    fundraisingSubtitle: 'Un nuevo paso para un padre dedicado',
    fundraisingDesc: 'Mi hermano menor de 28 años necesita una prótesis moderna. Hace 6 años perdió su pierna izquierda en un accidente de motocicleta. Su prótesis actual ya no funciona y le causa dolor. Tu donación le devolverá la movilidad y calidad de vida.',
    fundraisingButton: 'Donar en GoGetFunding',
    fundraisingLink: 'https://gogetfunding.com/a-prosthetic-leg-for-josue/',
  },
  en: {
    siteName: 'Rancho Raíces',
    home: 'Home',
    tours: 'Tours',
    restaurants: 'Restaurants',
    about: 'About Us',
    gallery: 'Gallery',
    contact: 'Contact',
    accommodations: 'Accommodations',
    blog: 'Blog',
    reserve: 'Book now',
    heroTitle: 'Experience organic chocolate in the Osa Peninsula',
    heroSubtitle: 'Rural tourism, permaculture & nature in Costa Rica',
    cta: 'Book your tour',
    switchLang: 'Español',
    fundraisingTitle: "Let's Help Josué Walk",
    fundraisingSubtitle: 'A new step for a dedicated father',
    fundraisingDesc: 'My 28-year-old younger brother needs a modern prosthesis. Six years ago he lost his left leg in a motorcycle accident. His current prosthesis no longer works and causes him pain. Your donation will restore his mobility and quality of life.',
    fundraisingButton: 'Donate on GoGetFunding',
    fundraisingLink: 'https://gogetfunding.com/a-prosthetic-leg-for-josue/',
  },
};

export function getLangFromUrl(url) {
  if (url.pathname.startsWith('/en')) return 'en';
  return 'es';
}
