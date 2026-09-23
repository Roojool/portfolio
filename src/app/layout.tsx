import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { profile } from "@/data/profile";
import { SITE_INFO, SITE_URL } from "@/config/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${SITE_INFO.name} — ${SITE_INFO.title}`,
  },
  description: SITE_INFO.headline,
  keywords: [
    "Rujul Talekar",
    "AI Researcher",
    "Systems Builder",
    "Human-Centered AI",
    "Video Management Systems",
    "Edge Video Analytics",
    "Cellular Bufferbloat",
    "Computer Vision",
    "VIT Pune",
  ],
  authors: [{ name: SITE_INFO.name, url: SITE_INFO.githubUrl }],
  creator: SITE_INFO.name,
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    title: `${SITE_INFO.name} — ${SITE_INFO.title}`,
    description: SITE_INFO.headline,
    siteName: `${SITE_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_INFO.name} — ${SITE_INFO.title}`,
    description: SITE_INFO.headline,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_INFO.name,
    jobTitle: SITE_INFO.title,
    affiliation: {
      "@type": "EducationalOrganization",
      name: profile.institution,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    url: SITE_URL,
    sameAs: [
      SITE_INFO.githubUrl,
      SITE_INFO.linkedinUrl,
      SITE_INFO.orcidUrl,
    ],
    knowsAbout: [
      "Human-Centered AI",
      "Video Management Systems",
      "Computer Vision",
      "Cellular Bufferbloat",
      "Network Telemetry",
      "Edge Video Analytics",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="group/layout relative isolate">
            <Header />
            <main className="max-w-screen overflow-x-clip px-2">{children}</main>
            <Footer />
            <MobileBottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
