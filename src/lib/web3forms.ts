/**
 * Web3Forms access key is a public client key (safe in frontend).
 * Prefer env vars on Vercel; this fallback keeps the live form working.
 * Override anytime with NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY / WEB3FORMS_ACCESS_KEY.
 */
export const WEB3FORMS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
  process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
  "895ac0b5-4691-45a8-9478-5db0362a7882";
