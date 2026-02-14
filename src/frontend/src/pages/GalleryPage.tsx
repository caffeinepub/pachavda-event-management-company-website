import { useState } from 'react';
import Seo from '@/components/seo/Seo';
import GalleryLightbox from '@/components/site/GalleryLightbox';
import { galleryItems } from '@/content/galleryItems';

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const imageItems = galleryItems.filter((item) => item.type === 'image');

  return (
    <>
      <Seo
        title="Event Gallery - Our Work Portfolio | Pachavda Event Management"
        description="Browse our portfolio of beautiful event decorations including weddings, birthdays, corporate events, and more. See our work in Sanand and Ahmedabad."
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-lg text-white/90">
              Explore our portfolio of stunning event decorations and celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => item.type === 'image' && setSelectedIndex(imageItems.findIndex((img) => img.src === item.src))}
              >
                {item.type === 'image' ? (
                  <>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-semibold">{item.alt}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">{item.alt}</p>
                      <p className="text-xs text-gray-500 mt-1">Video coming soon</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <GalleryLightbox
          images={imageItems}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}
