"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Prevent browser from restoring previous scroll position on refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Clear any hash in the URL so the browser doesn't jump to an anchor
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }

    // Temporarily disable smooth scrolling so the instant jump to top wins
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    // Re-enable smooth scrolling after the jump
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = "";
    });

    // Also reset before the page unloads so the browser stores position 0
    const handleBeforeUnload = () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return null;
}
