/**
 * GoTime legal document shell — Orbiting Availability turns long-form requirements into calm, accessible reading space.
 */
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/config";
import { usePageMeta } from "@/lib/seo";
import { AlertCircle, ArrowLeft, FileText } from "lucide-react";
import { Link } from "wouter";

type LegalDocumentProps = { type: "Privacy Policy" | "Terms & Conditions"; description: string; path: "/privacy" | "/terms" };

export function LegalDocument({ type, description, path }: LegalDocumentProps) {
  usePageMeta(`GoTime ${type}`, description, path);
  const lastUpdated = siteConfig.legalLastUpdated || "To be added with the approved document";
  return (
    <div className="gt-shell legal-shell">
      <a className="skip-link focus-ring" href="#legal-content">Skip to legal content</a>
      <SiteHeader />
      <main id="legal-content">
        <section className="legal-hero"><div className="legal-hero-inner"><Link href="/" className="legal-back focus-ring"><ArrowLeft aria-hidden="true" /> GoTime home</Link><p className="eyebrow eyebrow-light">Legal</p><h1>{type}</h1><p>Last updated: {lastUpdated}</p></div></section>
        <section className="legal-layout section-shell">
          <aside className="legal-toc"><p className="eyebrow">On this page</p><a className="focus-ring" href="#notice">Document status</a><a className="focus-ring" href="#approved-copy">Approved content</a></aside>
          <article className="legal-content">
            <div id="notice" className="legal-notice"><AlertCircle aria-hidden="true" /><div><h2>Approved legal text pending</h2><p>The final {type.toLowerCase()} has not yet been supplied. This page is intentionally marked as a placeholder and does not represent final legal terms or policy language.</p></div></div>
            <section id="approved-copy" className="legal-placeholder"><FileText aria-hidden="true" /><p className="eyebrow">Document space reserved</p><h2>The approved {type.toLowerCase()} will appear here.</h2><p>Once supplied, GoTime’s final text can be placed here verbatim in the existing accessible reading layout, with clear headings and linked anchors.</p></section>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

