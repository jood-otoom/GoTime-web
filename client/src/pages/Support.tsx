/**
 * GoTime Support — Orbiting Availability: warm, direct help inside a calm navy spatial frame.
 */
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { hasConfiguredValue, siteConfig } from "@/lib/config";
import { usePageMeta } from "@/lib/seo";
import { Check, ChevronDown, LoaderCircle, Mail, MessageCircleMore, Phone, Send } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

const categories = [
  "Booking",
  "Account",
  "Venue",
  "Technical Issue",
  "Partnership / List My Venue",
  "Privacy / Data Request",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
  company: string;
};

const initialState: FormState = { name: "", email: "", phone: "", category: "Booking", subject: "", message: "", company: "" };

export default function Support() {
  usePageMeta("GoTime Support — How can we help?", "Contact GoTime for help with bookings, accounts, venues, partnerships, and technical questions.", "/support");
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const requestedCategory = new URLSearchParams(window.location.search).get("category");
    if (requestedCategory && categories.includes(requestedCategory)) setForm((value) => ({ ...value, category: requestedCategory }));
  }, []);

  const update = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    if (form.company) return;
    if (form.name.trim().length < 2 || form.subject.trim().length < 3 || form.message.trim().length < 10) {
      toast.error("Please complete the required fields with a little more detail.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!hasConfiguredValue(siteConfig.publicApiUrl)) {
      toast("Support delivery is awaiting its secure GoTime endpoint configuration.");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(`${siteConfig.publicApiUrl.replace(/\/$/, "")}/support`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim() || undefined,
          category: form.category, subject: form.subject.trim(), message: form.message.trim(),
        }),
      });
      if (!response.ok) throw new Error("Support endpoint rejected request");
      setStatus("sent");
      setForm(initialState);
    } catch {
      toast.error("Your message could not be sent. Please try again shortly or use the contact details provided.");
      setStatus("idle");
    }
  };

  const emailReady = hasConfiguredValue(siteConfig.supportEmail);
  const phoneReady = hasConfiguredValue(siteConfig.supportPhone);

  return (
    <div className="gt-shell page-shell">
      <a className="skip-link focus-ring" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero page-hero-support" aria-labelledby="support-title">
          <div className="page-hero-orbit" aria-hidden="true" />
          <div className="page-hero-inner"><p className="eyebrow eyebrow-light">Support</p><h1 id="support-title">How can we<br /><em>help?</em></h1><p>For bookings, account questions, venues, partnerships and more — send us a note and the GoTime team will follow up.</p></div>
        </section>
        <section className="support-layout section-shell">
          <aside className="support-sidebar" aria-label="GoTime contact details">
            <p className="eyebrow">Other ways to reach us</p>
            <h2>Here when<br />you need us.</h2>
            <div className="contact-block">
              <Mail aria-hidden="true" /><div><span>Support email</span>{emailReady ? <a className="focus-ring" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> : <p>Added before launch</p>}</div>
            </div>
            <div className="contact-block">
              <Phone aria-hidden="true" /><div><span>Support phone</span>{phoneReady ? <a className="focus-ring" href={`tel:${siteConfig.supportPhone.replace(/\s/g, "")}`}>{siteConfig.supportPhone}</a> : <p>Added before launch</p>}</div>
            </div>
            <div className="support-note"><MessageCircleMore aria-hidden="true" /><p>Tell us what happened and include the venue or booking details where relevant.</p></div>
          </aside>
          <div className="support-form-panel">
            <div className="form-heading"><p className="eyebrow">Send a request</p><h2>Start the conversation.</h2></div>
            {status === "sent" ? (
              <div className="form-success" role="status"><span><Check aria-hidden="true" /></span><h3>Message received.</h3><p>Thanks for reaching out. The GoTime team will respond using the email address you provided.</p><Button className="gt-button gt-button-cyan" onClick={() => setStatus("idle")}>Send another message</Button></div>
            ) : (
              <form onSubmit={submit} className="support-form">
                <div className="honeypot" aria-hidden="true"><label htmlFor="company">Company</label><input id="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={(event) => update("company", event.target.value)} /></div>
                <div className="form-grid two-col">
                  <label>Full name<input required maxLength={100} autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} /></label>
                  <label>Email<input required type="email" maxLength={160} autoComplete="email" value={form.email} onChange={(event) => update("email", event.target.value)} /></label>
                </div>
                <div className="form-grid two-col">
                  <label>Phone number <span>Optional</span><input type="tel" maxLength={40} autoComplete="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} /></label>
                  <label>Category<div className="select-wrap"><select value={form.category} onChange={(event) => update("category", event.target.value)}>{categories.map((category) => <option key={category}>{category}</option>)}</select><ChevronDown aria-hidden="true" /></div></label>
                </div>
                <label>Subject<input required maxLength={160} value={form.subject} onChange={(event) => update("subject", event.target.value)} /></label>
                <label>Message<textarea required minLength={10} maxLength={5000} rows={6} value={form.message} onChange={(event) => update("message", event.target.value)} /></label>
                <div className="form-submit"><p>By sending, you agree that GoTime may use your details to respond to this request.</p><Button type="submit" className="gt-button gt-button-cyan" disabled={status === "sending"}>{status === "sending" ? <><LoaderCircle className="spin" aria-hidden="true" /> Sending</> : <>Send request <Send aria-hidden="true" /></>}</Button></div>
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

