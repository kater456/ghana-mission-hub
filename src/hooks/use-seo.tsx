import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
};

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({ title, description, canonical, image, type = "website" }: SEOProps) {
  useEffect(() => {
    const url = canonical ?? (typeof window !== "undefined" ? window.location.href : "");
    document.title = title;

    upsertMeta('meta[name="description"]', "name", "description", description);

    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    if (url) upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    if (image) upsertMeta('meta[property="og:image"]', "property", "og:image", image);

    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    if (image) upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

    if (url) upsertLink("canonical", url);
  }, [title, description, canonical, image, type]);
}
