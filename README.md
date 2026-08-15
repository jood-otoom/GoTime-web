# GoTime Public Website

GoTime is a responsive public marketing site for venue discovery and booking. It uses the supplied GoTime brand assets and the **Orbiting Availability** visual system: a navy spatial field, cyan action/status signals, rounded geometry, and the mark’s forward diagonal cut.

## Routes

| Route | Purpose |
|---|---|
| `/` | Public homepage, player download prompts, and venue partnership entry point. |
| `/support` | Validated support and venue-partnership request form. |
| `/privacy` | Reserved placeholder for approved privacy text. |
| `/terms` | Reserved placeholder for approved terms text. |

## Public configuration

All values are accessed from `client/src/lib/config.ts`. Configure them in the project’s production settings; do not add secrets to client-side variables.

| Value | Purpose | Required before launch? |
|---|---|---|
| `VITE_SITE_URL` | The public canonical URL. | Yes |
| `VITE_SUPPORT_EMAIL` | Email displayed in the footer and support page. | Yes |
| `VITE_SUPPORT_PHONE` | Optional support phone display and link. | Optional |
| `VITE_IOS_APP_STORE_URL` | iOS app-store destination for the homepage badge. | Yes, if app is available on iOS |
| `VITE_GOOGLE_PLAY_URL` | Google Play destination for the homepage badge. | Yes, if app is available on Android |
| `VITE_PUBLIC_API_URL` | Base URL for the external `POST /support` handler. | Yes, to activate support submissions |
| `VITE_PARTNER_CONTACT_DESTINATION` | Reserved for future partner-routing integration. | Optional |
| `VITE_LEGAL_LAST_UPDATED` | Published date for Privacy and Terms documents. | Yes, when legal text is published |

## Support form integration

The form validates inputs client-side, includes a hidden honeypot, and only reports success after a successful network response. When `VITE_PUBLIC_API_URL` is configured, it sends JSON to:

```text
POST {VITE_PUBLIC_API_URL}/support
```

The handler should validate and rate-limit requests server-side, discard honeypot submissions, then route the message to GoTime’s chosen email or CRM provider. It must set appropriate CORS rules for the public site origin and should never expose email-provider credentials to the browser.

## Final launch checklist

Before publishing, replace the approved Privacy Policy and Terms & Conditions placeholder copy, set the real canonical URL and contact details, configure live app-store links, and connect the support handler. Validate keyboard navigation, visible focus states, mobile navigation, form success/error paths, SEO sharing metadata, and all legal/support links in the staging environment.

The site is ready to publish from the managed project interface once a checkpoint has been created.
