import { PageMeta } from "@/components/PageMeta";
import { QrfButton } from "@/components/qrf";

const NotFound = () => {
  return (
    <main className="qrf-page flex min-h-screen items-center pt-28">
      <PageMeta
        description="The requested QRF website page could not be found."
        title="Page Not Found | QRF PNG"
      />
      <div className="qrf-container py-24 text-center">
        <p className="font-heading text-sm font-bold tracking-[0.2em] text-qrf-cyan">
          404
        </p>
        <h1 className="qrf-display mt-5 text-white">Page not found</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-qrf-soft">
          The page may have moved or may not be available yet.
        </p>
        <QrfButton className="mt-8" href="/">
          Return to Home
        </QrfButton>
      </div>
    </main>
  );
};

export default NotFound;
