import { lazy, Suspense } from 'react';
import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import SiteLayout from './components/site/SiteLayout';

// Lazy load Gallery for performance
const GalleryPage = lazy(() => import('./pages/GalleryPage'));

// Root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import SetupLaunchPage from './pages/SetupLaunchPage';

// Define routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading gallery...</div>}>
      <GalleryPage />
    </Suspense>
  ),
});

const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/testimonials',
  component: TestimonialsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const setupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/setup-launch',
  component: SetupLaunchPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  galleryRoute,
  testimonialsRoute,
  contactRoute,
  setupRoute,
]);

// Create router
const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
