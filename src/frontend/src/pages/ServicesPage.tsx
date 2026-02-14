import Seo from '@/components/seo/Seo';
import ServiceCard from '@/components/site/ServiceCard';
import { services } from '@/content/services';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Event Services - Wedding Decorator & Birthday Decoration in Sanand"
        description="Professional event decoration services in Sanand: wedding decoration, birthday decoration, corporate events, stage setup, flower decoration, balloon decoration, lighting & sound."
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-white/90">
              Comprehensive event management and decoration services for every occasion in Sanand, Ahmedabad, and nearby areas
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Need a Custom Package?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every event is unique. Let us create a customized service package tailored to your specific needs and budget.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue-dark text-white">
                Request a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
