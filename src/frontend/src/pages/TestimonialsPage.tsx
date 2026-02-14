import Seo from '@/components/seo/Seo';
import TestimonialCard from '@/components/site/TestimonialCard';
import { testimonials } from '@/content/testimonials';

export default function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Client Testimonials - What Our Customers Say | Pachavda Event Management"
        description="Read reviews and testimonials from our satisfied clients in Sanand and Ahmedabad. See why families trust us for their special events."
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h1>
            <p className="text-lg text-white/90">
              Don't just take our word for it - hear from the families and businesses we've had the pleasure of serving
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
