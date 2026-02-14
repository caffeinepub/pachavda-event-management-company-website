import { businessInfo } from '@/content/businessInfo';

interface InquiryData {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  message: string;
}

export function generateWhatsAppLink(data: InquiryData): string {
  const message = `Hello! I submitted an inquiry on your website.

*Name:* ${data.name}
*Phone:* ${data.phone}
*Event Type:* ${data.eventType}
*Event Date:* ${data.eventDate}
*Location:* ${data.location}
*Message:* ${data.message}

Looking forward to hearing from you!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodedMessage}`;
}
