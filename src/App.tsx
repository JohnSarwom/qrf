
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteLayout } from "./components/shell";
import { routePages } from "./content/routePages";
import { legalPages } from "./content/legal";
import { solutionDetails } from "./content/solutionDetail";

const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DesignSystem = lazy(() => import("./pages/DesignSystem"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const RoutePage = lazy(() => import("./pages/RoutePage"));
const SolutionDetailPage = lazy(() => import("./pages/SolutionDetailPage"));
const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));
const SupportPage = lazy(() => import("./pages/SupportPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center bg-qrf-ink">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-qrf-cyan" />
    <span className="sr-only">Loading page</span>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/design-system" element={<DesignSystem />} />
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/support" element={<SupportPage />} />
          {legalPages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<LegalPage page={page} />}
            />
          ))}
          {solutionDetails.map((detail) => (
            <Route
              key={detail.slug}
              path={detail.slug}
              element={<SolutionDetailPage detail={detail} />}
            />
          ))}
          {routePages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<RoutePage page={page} />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
