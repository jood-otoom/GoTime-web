/**
 * GoTime Home — Orbiting Availability: scattered places and time options converge into one confident booking route.
 */
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { hasConfiguredValue, siteConfig } from "@/lib/config";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Compass,
  Download,
  MapPin,
  MoveRight,
  Play,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

const assets = {
  hero: "/manus-storage/gotime-hero-venue-network_947e383a.jpg",
  editorial: "/manus-storage/gotime-editorial-lounge_f9a9d8be.jpg",
  partner: "/manus-storage/gotime-venue-partner_449907df.jpg",
  orbit: "/manus-storage/gotime-availability-orbit_53d267a8.jpg",
};

const steps = [
  {
    number: "01",
    title: "Discover",
    copy: "Explore places to play in one clear view.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Choose",
    copy: "Find the venue and available time that works for you.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Book",
    copy: "Reserve with less manual coordination.",
    icon: Check,
  },
];

const partnerBenefits = [
  ["01", "Get discovered", "Appear where people are looking for their next place to play."],
  ["02", "Reach new customers", "Give more people the opportunity to find your venue."],
  ["03", "Make availability visible", "Turn open time into a clear booking opportunity."],
  ["04", "Reduce manual coordination", "Move reservations into an organised digital workflow."],
];

function StoreBadge({ type }: { type: "ios" | "android" }) {
  const isIos = type === "ios";
  const url = isIos ? siteConfig.iosAppStoreUrl : siteConfig.googlePlayUrl;
  const label = isIos ? "Download on the App Store" : "Get it on Google Play";
  const handleMissing = () => toast("The store link will be added before GoTime’s public launch.");

  if (hasConfiguredValue(url)) {
    return (
      <a className="store-badge focus-ring" href={url} target="_blank" rel="noreferrer">
        <span className="store-icon" aria-hidden="true">{isIos ? "●" : "▶"}</span>
        <span><small>{isIos ? "Download on the" : "GET IT ON"}</small>{isIos ? "App Store" : "Google Play"}</span>
      </a>
    );
  }

  return (
    <button className="store-badge focus-ring" type="button" onClick={handleMissing} aria-label={`${label}; link pending configuration`}>
      <span className="store-icon" aria-hidden="true">{isIos ? "●" : "▶"}</span>
      <span><small>{isIos ? "Download on the" : "GET IT ON"}</small>{isIos ? "App Store" : "Google Play"}</span>
    </button>
  );
}

export default function Home() {
  return (
    <div className="gt-shell">
      <a className="skip-link focus-ring" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-pulse" aria-hidden="true" /> Venue discovery, organised</div>
              <h1 id="hero-title">Find your place.<br /><em>Pick your time.</em><br />Go.</h1>
              <p>Discover venues, see availability, and book your next session with GoTime.</p>
              <div className="hero-actions">
                <Button asChild className="gt-button gt-button-cyan hero-primary">
                  <a href="#download">Get GoTime <ArrowRight aria-hidden="true" /></a>
                </Button>
                <Button asChild variant="outline" className="gt-button gt-button-ghost">
                  <Link href="/support?category=Partnership%20%2F%20List%20My%20Venue">List Your Venue <ArrowUpRight aria-hidden="true" /></Link>
                </Button>
              </div>
              <div className="hero-understatement"><span>One place to discover.</span><span>One clearer way to book.</span></div>
            </div>

            <div className="hero-stage" aria-label="Illustration of GoTime organising venue choices and available time slots">
              <div className="hero-image-wrap">
                <img src={assets.hero} alt="Modern gaming venue interior with friends playing" fetchPriority="high" />
              </div>
              <div className="stage-grid" aria-hidden="true" />
              <div className="orbit-line orbit-line-one" aria-hidden="true" />
              <div className="orbit-line orbit-line-two" aria-hidden="true" />
              <div className="venue-pip venue-pip-one" aria-hidden="true"><MapPin /><span>Explore</span></div>
              <div className="venue-pip venue-pip-two" aria-hidden="true"><Sparkles /><span>Choose</span></div>
              <div className="slot-stack" aria-hidden="true">
                <div className="slot-caption"><Clock3 /> Available times</div>
                <div className="slot-row"><span>18:30</span><span className="active-slot">20:00</span><span>21:30</span></div>
              </div>
              <div className="hero-status" aria-hidden="true"><span className="status-dot" /> Your next session, in view</div>
              <div className="hero-mark-fragment" aria-hidden="true" />
            </div>
          </div>
          <div className="hero-bottom-line" aria-hidden="true"><span>DISCOVER</span><i /><span>CHOOSE</span><i /><span>BOOK</span><i /><span>PLAY</span></div>
        </section>

        <section className="intro-section section-shell" aria-labelledby="how-title">
          <div className="section-heading section-heading-inline">
            <div><p className="eyebrow">A clearer route to play</p><h2 id="how-title">Your next session<br /><span>takes three moves.</span></h2></div>
            <p className="heading-note">Less time switching between searches, messages and venue pages. More time deciding where to go.</p>
          </div>
          <div className="step-rail">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="step-card" key={step.title}>
                  <div className="step-top"><span>{step.number}</span><Icon aria-hidden="true" /></div>
                  <h3>{step.title}</h3><p>{step.copy}</p>
                  {index < steps.length - 1 && <ChevronRight className="step-arrow" aria-hidden="true" />}
                </article>
              );
            })}
          </div>
        </section>

        <section className="discovery-section" aria-labelledby="discovery-title">
          <div className="discovery-canvas">
            <div className="discovery-copy">
              <p className="eyebrow eyebrow-light">Discovery, brought together</p>
              <h2 id="discovery-title">More places.<br /><em>One place to find them.</em></h2>
              <p>GoTime brings venue options and booking paths into one more organised experience.</p>
              <a className="text-link focus-ring" href="#download">See where it can take you <MoveRight aria-hidden="true" /></a>
            </div>
            <div className="convergence-diagram" aria-label="Scattered searches, messages, and venue options becoming one GoTime discovery route">
              <span className="scatter scatter-one">Search</span>
              <span className="scatter scatter-two">Messages</span>
              <span className="scatter scatter-three">Venue pages</span>
              <span className="scatter scatter-four">Locations</span>
              <div className="convergence-center"><img src="/manus-storage/gotime-logo-gradient_f712c8b6.png" alt="GoTime mark" /><span>One clear route</span></div>
              <i className="diagram-path path-a" aria-hidden="true" /><i className="diagram-path path-b" aria-hidden="true" /><i className="diagram-path path-c" aria-hidden="true" /><i className="diagram-path path-d" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="editorial-section section-shell" aria-labelledby="spot-title">
          <div className="editorial-image-frame">
            <img src={assets.editorial} alt="Friends enjoying a refined social gaming lounge" loading="lazy" />
            <span className="image-label">A new place to play can be closer than you think.</span>
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">Make the plan</p>
            <h2 id="spot-title">Your next spot<br />might be <em>closer</em><br />than you think.</h2>
            <p>Discover places you already know — and places you have not tried yet. GoTime keeps the search focused on what matters: the venue, the time, and the plan.</p>
            <a className="circle-link focus-ring" href="#download" aria-label="Get GoTime"><ArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>

        <section id="venues" className="venue-section" aria-labelledby="venues-title">
          <div className="venue-image-pane"><img src={assets.partner} alt="Venue manager in a polished gaming centre" loading="lazy" /><div className="venue-image-veil" /></div>
          <div className="venue-copy">
            <p className="eyebrow eyebrow-light">For venues</p>
            <h2 id="venues-title">Your space deserves<br />to be <em>discovered.</em></h2>
            <p>GoTime helps venues become easier to discover, book and manage.</p>
            <div className="benefit-list">
              {partnerBenefits.map(([number, title, copy]) => (
                <article key={number} className="benefit-item"><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
              ))}
            </div>
            <Button asChild className="gt-button gt-button-ivory venue-cta"><Link href="/support?category=Partnership%20%2F%20List%20My%20Venue">Partner with GoTime <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <section className="ecosystem-section section-shell" aria-labelledby="ecosystem-title">
          <div className="ecosystem-copy"><p className="eyebrow">A shared route</p><h2 id="ecosystem-title">More than a booking moment.</h2><p>GoTime connects the people looking for places to play with the venues ready to be found.</p></div>
          <div className="ecosystem-stage">
            <img src={assets.orbit} alt="Abstract illustration of people, GoTime, and venues connected by a shared route" loading="lazy" />
            <div className="ecosystem-node node-player"><span>PLAYER</span><p>Discover<br />Choose<br />Book</p></div>
            <div className="ecosystem-node node-gotime"><img src="/manus-storage/gotime-logo-gradient_f712c8b6.png" alt="" /><span>GOTIME</span></div>
            <div className="ecosystem-node node-venue"><span>VENUE</span><p>Be discovered<br />Share availability<br />Manage</p></div>
          </div>
        </section>

        <section id="download" className="download-section" aria-labelledby="download-title">
          <div className="download-shape download-shape-one" aria-hidden="true" /><div className="download-shape download-shape-two" aria-hidden="true" />
          <div className="download-content">
            <p className="eyebrow eyebrow-light">Your time, made clearer</p>
            <h2 id="download-title">Less searching.<br /><em>More playing.</em></h2>
            <p>Discover your next venue with GoTime.</p>
            <div className="store-badges"><StoreBadge type="ios" /><StoreBadge type="android" /></div>
          </div>
          <div className="download-symbol" aria-hidden="true"><img src="/manus-storage/gotime-logo-gradient_f712c8b6.png" alt="" /><span>GO<br />TIME</span></div>
          <Link className="partner-link focus-ring" href="/support?category=Partnership%20%2F%20List%20My%20Venue">Own a venue? <strong>List it with GoTime</strong><ArrowUpRight aria-hidden="true" /></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

