import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site-data";
import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/schema";
import FloatingButtons from "@/components/FloatingButtons";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f2444",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Best CLAT Coaching in Gaya | Career Heights Gaya — Bihar's Top Law Entrance Institute",
    template: "%s | Career Heights Gaya",
  },
  description:
    "Looking for the best CLAT coaching in Gaya? Career Heights offers expert law entrance coaching in Bihar for CLAT, AILET & CUET — with experienced faculty, personalised mentoring, and proven results. Enroll today!",
  keywords: [
    "CLAT Coaching in Gaya",
    "Best CLAT Coaching in Gaya",
    "CLAT Coaching Bihar",
    "Best Law Entrance Coaching Bihar",
    "AILET Coaching Gaya",
    "CUET Coaching Gaya",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "Best CLAT Coaching in Gaya | Career Heights Gaya",
    description:
      "Gaya's #1 CLAT, AILET & CUET coaching institute. Expert faculty, personalised mentoring, proven results in Bihar's most trusted law entrance institute.",
    images: [
      {
        url: "/images/clat-coaching-institute-gaya-career-heights.webp",
        width: 1200,
        height: 630,
        alt: "Career Heights Gaya — Best CLAT Coaching Institute in Gaya, Bihar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best CLAT Coaching in Gaya | Career Heights Gaya",
    description:
      "Gaya's #1 CLAT, AILET & CUET coaching institute in Bihar. Expert faculty, personalised mentoring, proven results.",
    images: ["/images/clat-coaching-institute-gaya-career-heights.webp"],
  },
  icons: {
    icon: "/images/career-heights-gaya-logo.png",
    apple: "/images/career-heights-gaya-logo.png",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [organizationSchema(), websiteSchema(), breadcrumbSchema()];

  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body">
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
        <FloatingButtons />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
