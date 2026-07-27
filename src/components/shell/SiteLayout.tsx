import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnnouncementBar } from "./AnnouncementBar";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      target?.scrollIntoView({ block: "start" });
      root.style.scrollBehavior = previousScrollBehavior;
      return;
    }

    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousScrollBehavior;
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-qrf-ink">
      <AnnouncementBar />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
