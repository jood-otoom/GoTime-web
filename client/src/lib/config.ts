/**
 * GoTime public site configuration.
 * Design reminder: Orbiting Availability uses one clear, centralised source for
 * destinations so the site feels orderly and launch changes stay low-risk.
 */
const configured = (value?: string) =>
  Boolean(value && value.trim() && !value.includes("["));

export const siteConfig = {
  siteName: "GoTime",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://gotimejo.com",
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || "",
  supportPhone: import.meta.env.VITE_SUPPORT_PHONE || "",
  iosAppStoreUrl: import.meta.env.VITE_IOS_APP_STORE_URL || "",
  googlePlayUrl: import.meta.env.VITE_GOOGLE_PLAY_URL || "",
  publicApiUrl: import.meta.env.VITE_PUBLIC_API_URL || "",
  partnerContactDestination:
    import.meta.env.VITE_PARTNER_CONTACT_DESTINATION || "",
  legalLastUpdated: import.meta.env.VITE_LEGAL_LAST_UPDATED || "",
};

export const hasConfiguredValue = configured;

