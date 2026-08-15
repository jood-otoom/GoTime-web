/**
 * GoTime footer — Orbiting Availability: a quiet, readable anchor after the final kinetic CTA.
 */
import { BrandLockup } from "@/components/SiteHeader";
import { hasConfiguredValue, siteConfig } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export function SiteFooter() {
  const supportEmail = hasConfiguredValue(siteConfig.supportEmail)
    ? siteConfig.supportEmail
    : "Support details added before launch";
  const supportPhone = hasConfiguredValue(siteConfig.supportPhone)
    ? siteConfig.supportPhone
    : "";

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <BrandLockup inverse />
          <p>Making it easier to discover, book and enjoy places to play.</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <Link href="/" className="footer-link focus-ring">Home</Link>
          <a href="/#venues" className="footer-link focus-ring">For Venues</a>
          <Link href="/support" className="footer-link focus-ring">Support</Link>
        </div>
        <div className="footer-column">
          <p className="footer-label">Legal</p>
          <Link href="/privacy" className="footer-link focus-ring">Privacy Policy</Link>
          <Link href="/terms" className="footer-link focus-ring">Terms &amp; Conditions</Link>
        </div>
        <div className="footer-column footer-contact">
          <p className="footer-label">Contact</p>
          {hasConfiguredValue(siteConfig.supportEmail) ? (
            <a className="footer-link focus-ring" href={`mailto:${siteConfig.supportEmail}`}>
              {supportEmail}<ArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span className="footer-link footer-link-muted">{supportEmail}</span>
          )}
          {supportPhone && (
            <a className="footer-link focus-ring" href={`tel:${supportPhone.replace(/\s/g, "")}`}>
              {supportPhone}<ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} GoTime. All rights reserved.</span>
        <span>Find. Book. Play.</span>
      </div>
    </footer>
  );
}

