import "./globals.css";

export const metadata = {
  title: "Andrew Hayter | Full-stack Dev",
  description: "Andrew Hayter – Full-stack developer & security specialist.",
  keywords: [
    "Andrew Hayter",
    "full-stack developer",
    "cybersecurity",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
