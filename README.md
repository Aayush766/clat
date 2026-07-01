# Career Heights Gaya — Premium Website (Next.js 15 + Tailwind)

A premium, SEO-optimised, lead-generation-focused rebuild of the Career Heights Gaya website —
same branding, same logo, same photos, fully modernised and technically optimised for Google.

## Tech Stack

- Next.js 15 (App Router, Server Components)
- React 19 + TypeScript
- Tailwind CSS (custom navy + gold theme matching the existing brand)
- React Hook Form + Zod (enquiry form validation)
- Lucide Icons
- next/image (automatic WebP, lazy loading, responsive images)
- next/font (self-hosted Google Fonts, zero layout shift)

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

To build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
app/
  layout.tsx          Root layout — metadata, Organization/Website/Breadcrumb schema, fonts
  page.tsx             Homepage — composes all sections
  sitemap.ts           Auto-generated /sitemap.xml
  robots.ts            Auto-generated /robots.txt
  api/enquiry/route.ts Enquiry form submission handler (wire up your CRM/email here)
  blog/[slug]/page.tsx Individual blog post pages (internal linking)
components/            All page sections (Hero, Courses, Faculty, FAQ, etc.)
lib/site-data.ts       Single source of truth: NAP, courses, faculty, testimonials, FAQs
lib/schema.ts          JSON-LD schema builders (LocalBusiness, EducationalOrganization, FAQ, Course)
public/images/         Renamed, compressed, SEO-friendly WebP images from your existing assets
```

## Every SEO Report Item — Implementation Map

| Report Item | Status | Where |
|---|---|---|
| Page Title (keyword-rich) | ✅ | `app/layout.tsx` → `metadata.title` |
| Meta Description | ✅ | `app/layout.tsx` → `metadata.description` |
| H1 with primary keyword | ✅ | `components/Hero.tsx` |
| H2 heading structure (keyword-rich) | ✅ | Every section component |
| Image renaming + ALT text | ✅ | `public/images/*.webp` renamed; ALT text on every `<Image>` |
| Lazy loading + WebP | ✅ | `next/image` (automatic) |
| Internal linking (keyword anchors) | ✅ | Nav, Courses cards, Footer, Blog cards |
| LocalBusiness + EducationalOrganization Schema | ✅ | `lib/schema.ts` → `organizationSchema()` |
| FAQ Schema | ✅ | `components/FAQ.tsx` |
| AggregateRating Schema | ✅ | Included in `organizationSchema()` |
| Breadcrumb | ✅ | `app/page.tsx` (visible to crawlers, screen-reader accessible) |
| Course Schema | ✅ | `lib/schema.ts` → `courseSchemas()` |
| Website + SearchAction Schema | ✅ | `lib/schema.ts` → `websiteSchema()` |
| Canonical tags | ✅ | `metadata.alternates.canonical` (layout + blog posts) |
| Open Graph + Twitter Cards | ✅ | `app/layout.tsx` |
| Robots.txt | ✅ | `app/robots.ts` |
| XML Sitemap | ✅ | `app/sitemap.ts` |
| NAP consistency | ✅ | Single source: `lib/site-data.ts` (used everywhere) |
| Local keyword placement (Gaya, Bihar, Kautilyapuri) | ✅ | Hero, WhyUs, Courses, Footer, Contact copy |
| Mobile optimisation | ✅ | Fully responsive Tailwind layout, sticky mobile CTA bar |
| Sticky CTA / Floating WhatsApp & Call | ✅ | `components/FloatingButtons.tsx`, `StickyMobileCTA.tsx` |
| Exit-intent / Scholarship popup | ✅ | `components/ExitIntentPopup.tsx` |
| Limited Seats / Admission Alert | ✅ | `components/AnnouncementBar.tsx` |
| Google Map embed | ✅ | `components/LocationContact.tsx` (live iframe, not a static image) |
| Reviews / Testimonials section | ✅ | `components/Testimonials.tsx` |
| Blog section with internal links | ✅ | `components/Blog.tsx` + `app/blog/[slug]` |
| Accessibility (ARIA, semantic HTML) | ✅ | Semantic tags, `aria-label`/`aria-expanded` throughout |

## Manual / Off-Page Tasks (Cannot Be Done in Code)

These items from the report require action **outside** the codebase:

1. **Google Business Profile** — update description (copy provided in the original report), add
   photos, services, and enable Q&A. Use the NAP in `lib/site-data.ts` exactly as-is everywhere.
2. **Google Search Console** — verify the live domain and submit `/sitemap.xml`.
3. **Local citations** — list on JustDial, Sulekha, Shiksha.com, CollegeDekho, IndiaMart, and
   Bihar-specific directories with identical NAP.
4. **Review collection** — request Google reviews from enrolled students via WhatsApp; target 50+.
5. **Real coordinates** — `lib/site-data.ts` has approximate Gaya lat/long for `GeoCoordinates`;
   replace with your exact Google Maps pin coordinates before going live.
6. **Connect the enquiry form to a real backend** — `app/api/enquiry/route.ts` currently logs
   submissions server-side. Wire it to email (Resend/SendGrid), Google Sheets, or a CRM — see
   `.env.example` for common integration variables.
7. **Analytics** — add Google Analytics 4 / Google Tag Manager once you have a measurement ID.

## Performance Notes

- All images are pre-compressed to WebP and served responsively via `next/image`.
- Fonts are self-hosted via `next/font` (no external font requests, no CLS).
- Sections below the fold are lazy-loaded images; hero image uses `priority`.
- No client-side heavy libraries are loaded on initial paint beyond the enquiry form.

Run a Lighthouse audit after deploying (Vercel recommended) to confirm 90+ scores — real-world
scores depend on your hosting/CDN, so deploy first, then audit the live URL.

## Brand & Content Notes

- Logo, color palette (navy `#0f2444` + gold `#d4a144`, matched from your existing logo/banner),
  and all original photos have been preserved exactly as requested — nothing was redesigned or replaced.
- All homepage copy has been rewritten for EEAT and natural keyword usage (no keyword stuffing),
  following the exact before/after guidance in the SEO report.
