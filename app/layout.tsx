import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrew Hayter | Fullstack Engineer",
  description:
    "Andrew Hayter – Independent Fullstack Developer specializing in secure, scalable web applications. 9+ years in JavaScript/TypeScript ecosystems, cybersecurity and blockchain development.",
  keywords: [
    "Andrew Hayter",
    "fullstack developer",
    "cybersecurity",
    "React",
    "Next.js",
    "TypeScript",
    "blockchain",
    "security specialist",
    "web development",
    "consultant",
  ],
  authors: [{ name: "Andrew Hayter" }],
  creator: "Andrew Hayter",
  publisher: "Andrew Hayter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://andrewhayter.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Andrew Hayter | Fullstack Engineer",
    description:
      "Independent Fullstack Developer specializing in secure, scalable web applications. Building stuff and breaking stuff since 2015.",
    url: "https://andrewhayter.com",
    siteName: "Andrew Hayter",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Andrew Hayter - Fullstack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Hayter | Fullstack Engineer",
    description:
      "Independent Fullstack Developer specializing in secure, scalable web applications. Building stuff and breaking stuff since 2015.",
    images: ["/twitter-image"],
    creator: "@andrewhayter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrew Hayter",
    jobTitle: "Fullstack Engineer",
    description:
      "Independent Fullstack Developer specializing in secure, scalable web applications. 9+ years in JavaScript/TypeScript ecosystems, cybersecurity and blockchain development.",
    url: "https://andrewhayter.com",
    email: "andrewhayter@gmail.com",
    sameAs: [
      "https://github.com/andrewhayter",
      "https://www.linkedin.com/in/hello-andrew-hayter/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Cybersecurity",
      "Blockchain Development",
      "Web Development",
      "Fullstack Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Fullstack Engineer",
      description:
        "Building secure, scalable web applications with modern technologies",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Google Cybersecurity Certificate",
    },
    worksFor: {
      "@type": "Organization",
      name: "Independent Consulting",
      description: "Security specialist and fullstack development consultant",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
