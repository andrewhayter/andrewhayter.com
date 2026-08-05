import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrew Hayter | Product Engineer — Content Systems & AI-Era Growth",
  description:
    "Independent product engineer, 9+ years. I build content and data platforms that compound — programmatic content systems, structured data pipelines, and the infrastructure to run it all in production.",
  keywords: [
    "Andrew Hayter",
    "product engineer",
    "growth engineer",
    "content systems",
    "data pipelines",
    "programmatic SEO",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "AI-assisted development",
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
    title: "Andrew Hayter | Product Engineer — Content Systems & AI-Era Growth",
    description:
      "Independent product engineer, 9+ years. I turn raw data and messy workflows into content and product systems that compound at scale — and run the infrastructure underneath myself.",
    url: "https://andrewhayter.com",
    siteName: "Andrew Hayter",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Andrew Hayter - Product Engineer, Content Systems & AI-Era Growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Hayter | Product Engineer — Content Systems & AI-Era Growth",
    description:
      "Independent product engineer, 9+ years. Programmatic content systems, structured data pipelines, and the infrastructure to run it all in production.",
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

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark' : true;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrew Hayter",
    jobTitle: "Product Engineer",
    description:
      "Independent product engineer with 9+ years building content platforms, data pipelines, and infrastructure-backed applications. Focused on systems that turn raw or public data into defensible product and content advantages at scale.",
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
      "PostgreSQL",
      "Content Systems",
      "Data Pipelines",
      "Programmatic SEO",
      "AI-Assisted Development",
      "Linux Infrastructure",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Independent",
      description: "Independent Product Engineer / Founding Engineer",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#F6F4EF" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#161513" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
