import type { Metadata } from "next";
import { Fraunces, Source_Serif_4, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { company, images, counties } from "@/lib/business";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.tarzantreescaping.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tarzan Treescaping | Tree Removal, Land Clearing & Landscaping | Newburgh NY",
    template: "%s | Tarzan Treescaping",
  },
  description:
    "Tarzan Treescaping provides tree removal, pruning, landscaping, land clearing, junk removal and stonework in Newburgh and throughout the Hudson Valley. Request a free estimate today.",
  keywords: [
    "Tree Service Newburgh NY",
    "Tree Removal Newburgh NY",
    "Tree Trimming Newburgh NY",
    "Tree Pruning Newburgh NY",
    "Land Clearing Newburgh NY",
    "Landscaping Newburgh NY",
    "Junk Removal Newburgh NY",
    "Stonework Newburgh NY",
    "Hudson Valley Tree Service",
    "Hudson Valley Land Clearing",
    "Hudson Valley Landscaping",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tarzan Treescaping | Tree Removal, Land Clearing & Landscaping | Newburgh NY",
    description:
      "Tree removal, pruning, landscaping, land clearing, junk removal and stonework in Newburgh and throughout the Hudson Valley.",
    url: siteUrl,
    siteName: company.name,
    locale: "en_US",
    type: "website",
    images: [{ url: images.hero, width: 1600, height: 686, alt: company.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarzan Treescaping | Newburgh NY",
    description:
      "Tree removal, pruning, landscaping, land clearing, junk removal and stonework in the Hudson Valley.",
    images: [images.hero],
  },
  icons: {
    icon: images.favicon,
    shortcut: images.favicon,
    apple: images.favicon,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description:
      "Tree removal, tree pruning, landscaping, junk removal, land clearing and stonework serving Newburgh, NY and the Hudson Valley.",
    url: siteUrl,
    telephone: company.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: company.zip,
      addressCountry: "US",
    },
    areaServed: counties.map((county) => ({
      "@type": "AdministrativeArea",
      name: county,
    })),
    // No verified current Google rating/review count is available — see
    // company.googleRating in business.ts. Only emit aggregateRating once
    // real figures are on hand; publishing invented numbers here would be
    // misleading structured data.
    ...(company.googleRating && company.googleReviewCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: company.googleRating,
            reviewCount: company.googleReviewCount,
          },
        }
      : {}),
    priceRange: "$$",
    makesOffer: [
      "Tree Removal",
      "Tree Pruning",
      "Landscaping",
      "Land Clearing",
      "Junk Removal",
      "Stonework",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        provider: { "@type": "LocalBusiness", name: company.name },
      },
    })),
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionConfig reducedMotion="user">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1 pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
          <MobileActionBar />
        </MotionConfig>
      </body>
    </html>
  );
}
