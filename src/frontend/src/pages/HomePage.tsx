import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Calendar, Sparkles, Users, Award, Heart } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import { services } from '@/content/services';
import { siteCopy } from '@/content/siteCopy';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Pachavda Event Management - Premier Event Planner in Sanand, Gujarat"
        description="Professional event management and decoration services in Sanand, Ahmedabad. Wedding decorator, birthday decoration, corporate events, and more. Get your free quote today!"
      />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner-event-collage.dim_1920x900.png"
            alt="Pachavda Event Management - Beautiful event decorations"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Creating Unforgettable Moments in Sanand
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              {siteCopy.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-dark text-white text-lg px-8 py-6">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Event
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {siteCopy.home.introTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {siteCopy.home.introText}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">10+ Years Experience</h3>
                <p className="text-gray-600 text-sm">Trusted by hundreds of families</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">500+ Events</h3>
                <p className="text-gray-600 text-sm">Successfully executed</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">100% Satisfaction</h3>
                <p className="text-gray-600 text-sm">Dedicated to your happiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring your vision to life with creativity and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.slice(0, 6).map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="font-semibold">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {siteCopy.comingSoon.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {siteCopy.comingSoon.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {siteCopy.comingSoon.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Perfect Event?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss your vision and create an unforgettable experience together. Contact us today for a free consultation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-8 py-6">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
