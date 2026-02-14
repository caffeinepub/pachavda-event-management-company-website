import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { businessInfo } from '@/content/businessInfo';

export default function FloatingContactActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <a href={businessInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg bg-green-600 hover:bg-green-700 text-white"
          aria-label="Contact via WhatsApp"
        >
          <SiWhatsapp className="h-6 w-6" />
        </Button>
      </a>
      <a href={`tel:${businessInfo.phone}`}>
        <Button
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg bg-brand-blue hover:bg-brand-blue-dark text-white"
          aria-label="Call now"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </a>
    </div>
  );
}
