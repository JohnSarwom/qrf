import { useEffect } from "react";

interface PageMetaProps {
  description: string;
  image?: string;
  title: string;
}

const canonicalOrigin = "https://www.qrfpng.com";

export function PageMeta({ description, image = "/og-v2.jpg", title }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      element?.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    const imageUrl = image.startsWith("http")
      ? image
      : `${canonicalOrigin}${image}`;
    setMeta('meta[property="og:image"]', "content", imageUrl);
    setMeta('meta[name="twitter:image"]', "content", imageUrl);

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${canonicalOrigin}${window.location.pathname}`;
  }, [description, image, title]);

  return null;
}
