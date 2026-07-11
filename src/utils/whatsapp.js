import { BUSINESS } from '../config/business';

export function buildWhatsAppLink(context, data = {}) {
  const messages = {
    generic: `Hello ${BUSINESS.name}, I would like to inquire about your premium septic services.`,
    service: `Hello ${BUSINESS.name},\nI am looking for ${data.service} service.\nMy location is: ${data.area || '[Please specify your area]'}\nPlease let me know your availability.`,
    quickBook: `Urgent Booking Request\n\nName: ${data.name}\nService needed: ${data.service}\nLocation: ${data.area}`,
    fullBooking: `Detailed Service Request\n\nName: ${data.name}\nPhone: ${data.mobile}\nService Type: ${data.service}\nArea: ${data.area}\nLandmark: ${data.landmark || 'Not provided'}\nDescription of Issue: ${data.details || 'Not provided'}`,
  };
  
  const text = encodeURIComponent(messages[context] || messages.generic);
  // Ensure the phone number format doesn't have extra '+' if passed incorrectly
  const phone = BUSINESS.whatsapp.replace(/\+/g, '');
  return `https://wa.me/${phone}?text=${text}`;
}

export function buildCallLink() {
  return `tel:${BUSINESS.phone}`;
}
