import Seo from '@/components/seo/Seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Lock, Search, CheckCircle } from 'lucide-react';

export default function SetupLaunchPage() {
  return (
    <>
      <Seo
        title="Setup & Launch Guide | Pachavda Event Management"
        description="Step-by-step guide for setting up your domain, enabling HTTPS, and submitting your website to Google Search Console."
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Setup & Launch Guide</h1>
            <p className="text-lg text-white/90">
              Follow these steps to get your website live and discoverable
            </p>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Domain & Hosting */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-brand-blue" />
                  </div>
                  <CardTitle className="text-2xl">Step 1: Domain & Hosting Setup</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Your website is currently hosted on the Internet Computer. To use a custom domain:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Purchase a domain name from a registrar (e.g., GoDaddy, Namecheap, Google Domains)</li>
                  <li>Access your domain's DNS settings in your registrar's control panel</li>
                  <li>Add a CNAME record pointing to your Internet Computer canister URL</li>
                  <li>Wait for DNS propagation (typically 24-48 hours)</li>
                </ol>
                <div className="bg-blue-50 border-l-4 border-brand-blue p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Your canister URL can be found in your deployment settings. Contact your developer for specific configuration details.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SSL Certificate */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <Lock className="h-6 w-6 text-brand-blue" />
                  </div>
                  <CardTitle className="text-2xl">Step 2: Enable HTTPS (SSL Certificate)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  HTTPS ensures secure communication between your website and visitors:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>The Internet Computer automatically provides SSL certificates for custom domains</li>
                  <li>Once your domain is configured, HTTPS will be enabled automatically</li>
                  <li>Verify HTTPS is working by visiting your domain with https:// prefix</li>
                  <li>Ensure all internal links use HTTPS or relative URLs</li>
                </ol>
                <div className="flex items-start gap-2 bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>Good news:</strong> SSL certificates on the Internet Computer are free and automatically renewed.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Google Search Console */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <Search className="h-6 w-6 text-brand-blue" />
                  </div>
                  <CardTitle className="text-2xl">Step 3: Submit to Google Search Console</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Help Google discover and index your website:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Go to <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Google Search Console</a></li>
                  <li>Click "Add Property" and enter your domain name</li>
                  <li>Verify ownership using one of the provided methods (DNS verification recommended)</li>
                  <li>Submit your sitemap (typically at yoursite.com/sitemap.xml)</li>
                  <li>Request indexing for your main pages</li>
                </ol>
                <div className="bg-blue-50 border-l-4 border-brand-blue p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Tip:</strong> It may take a few days to a few weeks for Google to fully index your site. Monitor your Search Console dashboard for indexing status and any issues.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Additional Tips for Success</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span><strong>Update Business Listings:</strong> Add your website URL to Google My Business, Facebook, and other directories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span><strong>Monitor Performance:</strong> Use Google Analytics to track visitor behavior and popular pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span><strong>Regular Updates:</strong> Keep your gallery and testimonials fresh with new content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span><strong>Mobile Testing:</strong> Test your website on various mobile devices to ensure optimal experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
