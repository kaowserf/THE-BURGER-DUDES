"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Prevent browser from restoring previous scroll position on refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // Always start at the very top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}
