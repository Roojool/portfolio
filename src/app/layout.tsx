import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/links";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.headline,
  metadataBase: new URL("https://roojool.github.io/portfolio"),
  keywords: [
    "Rujul Talekar",
    "AI Researcher",
    "Systems Builder",
    "Human-Centered AI",
    "Video Management Systems",
    "Edge Video Analytics",
    "Bufferbloat",
    "Computer Vision",
    "VIT Pune"
  ],
  authors: [{ name: profile.name, url: socialLinks.github.url }],
  creator: profile.name,
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.svg"
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roojool.github.io/portfolio",
    title: `${profile.name} — ${profile.title}`,
    description: profile.headline,
    siteName: `${profile.name} Portfolio`
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.headline
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    affiliation: {
      "@type": "EducationalOrganization",
      name: profile.institution
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "India"
    },
    url: "https://roojool.github.io/portfolio",
    sameAs: [
      socialLinks.github.url,
      socialLinks.linkedin.url,
      socialLinks.orcid.url
    ],
    knowsAbout: [
      "Human-Centered AI",
      "Video Management Systems",
      "Computer Vision",
      "Cellular Bufferbloat",
      "Network Telemetry",
      "Edge Video Analytics"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
