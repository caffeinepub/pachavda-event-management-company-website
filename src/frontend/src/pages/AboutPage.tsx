import Seo from '@/components/seo/Seo';
import { siteCopy } from '@/content/siteCopy';
import { Target, Heart, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us - Pachavda Event Management Company"
        description="Learn about Pachavda Event Management Company, our story, mission, and values. Serving Sanand, Ahmedabad, and nearby areas with professional event planning services."
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pachavda Event Management</h1>
            <p className="text-lg text-white/90">
              Creating memorable experiences for families and businesses across Sanand and Ahmedabad
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-brand-blue" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">{siteCopy.about.story.paragraph1}</p>
              <p className="mb-4">{siteCopy.about.story.paragraph2}</p>
              <p>{siteCopy.about.story.paragraph3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-brand-blue" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mission & Values</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-6">{siteCopy.about.mission.text}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteCopy.about.mission.values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-brand-blue" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience & Expertise</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-6">{siteCopy.about.expertise.text}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteCopy.about.expertise.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-brand-blue rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
