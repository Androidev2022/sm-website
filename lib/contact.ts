// Single source of truth for contact links used across the site.
export const WHATSAPP_NUMBER = "918630180711"; // country code + number, digits only
export const WHATSAPP_MESSAGE = "Hi SM Solutions, I'd like to discuss a project.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
