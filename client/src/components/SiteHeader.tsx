/**
 * GoTime header — Orbiting Availability: calm wayfinding above an energetic spatial page.
 */
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

const markUrl = "/manus-storage/gotime-logo-gradient_f712c8b6.png";

const navigation = [
  { label: "Home", href: "/" },
  { label: "For Venues", href: "/#venues" },
  { label: "Support", href: "/support" },
  { label: "Legal", href: "/privacy" },
];

export function BrandLockup({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className="brand-lockup focus-ring"
      aria-label="GoTime home">
      <img src={markUrl} alt="" className="brand-mark" />
      <span className={cn("brand-word", inverse ? "text-ivory" : "text-navy")}>
        GO<span>TIME</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("site-header", scrolled && "site-header-scrolled")}>
      <div className="header-inner">
        <BrandLockup inverse />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link focus-ring">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Button asChild className="header-cta gt-button gt-button-cyan">
            <a href="/#download">Get GoTime</a>
          </Button>
          <button
            className="menu-trigger focus-ring"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div className={cn("mobile-nav", open && "mobile-nav-open")} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link focus-ring"
              onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href="/#download" className="mobile-download focus-ring" onClick={() => setOpen(false)}>
            Get GoTime
          </a>
        </nav>
      </div>
    </header>
  );
}

