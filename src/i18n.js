// Simple i18n utility for Astro/React
export const languages = {
  es: {
    siteName: 'Rancho Raíces',
    home: 'Inicio',
    tours: 'Tours de Chocolate',
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
  },
  en: {
    siteName: 'Rancho Raíces',
    home: 'Home',
    tours: 'Chocolate Tours',
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
  },
};

export function getLangFromUrl(url) {
  if (url.pathname.startsWith('/en')) return 'en';
  return 'es';
}
