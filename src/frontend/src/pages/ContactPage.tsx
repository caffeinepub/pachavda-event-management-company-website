import { useState } from 'react';
import Seo from '@/components/seo/Seo';
import InquiryForm from '@/components/site/InquiryForm';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { businessInfo } from '@/content/businessInfo';

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      <Seo
        title="Contact Us - Get in Touch | Pachavda Event Management Sanand"
        description="Contact Pachavda Event Management Company in Sanand, Gujarat. Call us, WhatsApp, or fill out our inquiry form for event planning services near Ahmedabad."
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-white/90">
              Ready to start planning your event? We're here to help bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Phone</h3>
                    <a href={`tel:${businessInfo.phone}`} className="text-brand-blue hover:underline">
                      {businessInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SiWhatsapp className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">WhatsApp</h3>
                    <a href={businessInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                      {businessInfo.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Email</h3>
                    <a href={`mailto:${businessInfo.email}`} className="text-brand-blue hover:underline">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Location</h3>
                    <p className="text-gray-600">{businessInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">{businessInfo.hours}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${businessInfo.phone}`} className="flex-1">
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
                <a href={businessInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <SiWhatsapp className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Send Us a Message</h2>
              <InquiryForm onSuccess={() => setShowSuccess(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Find Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={businessInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pachavda Event Management Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
