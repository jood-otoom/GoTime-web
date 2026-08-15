/**
 * GoTime metadata helper — Orbiting Availability keeps each route precise, legible, and launch-ready.
 */
import { useEffect } from "react";

export function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const origin = "https://gotimejo.com";
    if (descriptionTag) descriptionTag.setAttribute("content", description);
    if (canonical) canonical.setAttribute("href", `${origin}${path}`);
  }, [title, description, path]);
}

