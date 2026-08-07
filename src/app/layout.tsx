import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const siteUrl = profile.portfolio;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: profile.seo.title,
    template: `%s | ${profile.shortName}`,
  },
  description: profile.seo.description,
  keywords: profile.seo.keywords,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    title: profile.seo.title,
    description: profile.seo.description,
    images: [
      {
        url: profile.portrait,
        width: 800,
        height: 1000,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
    images: [profile.portrait],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl.replace(/\/$/, "")}${profile.portrait}`,
  jobTitle: profile.title,
  email: profile.email,
  telephone: profile.phoneHref,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  alumniOf: profile.education.map((e) => ({
    "@type": "EducationalOrganization",
    name: e.school,
  })),
  worksFor: {
    "@type": "Organization",
    name: "AlphaNUIX Technologies",
  },
  sameAs: [
    profile.socials.github,
    profile.socials.linkedin,
    profile.socials.instagram,
    profile.socials.facebook,
  ],
  knowsAbout: [
    "MERN Stack",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "REST APIs",
    "Telehealth applications",
    "Enterprise resource planning",
    "AI content moderation",
    "AI personalization",
  ],
  description: profile.summary,
  knowsLanguage: "English",
  hasCredential: profile.education.map((e) => ({
    "@type": "EducationalOccupationalCredential",
    name: e.degree,
    recognizedBy: { "@type": "Organization", name: e.school },
  })),
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${profile.name} — Featured Projects`,
  itemListElement: profile.projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      description: p.seoDescription,
      url: p.url !== "#" ? p.url : siteUrl,
      keywords: p.stack.join(", "),
      author: { "@type": "Person", name: profile.name },
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
