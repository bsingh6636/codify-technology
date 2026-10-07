import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://codifyteam.com"),
  title: "Codify Technologies — Engineering for what comes next",
  description: "Dedicated engineering teams, custom software, product delivery, and cloud expertise. A thoughtful approach to building software that moves your business forward.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://codifyteam.com/" },
  icons: { icon: "/icon.svg" },
  openGraph: { title: "Codify Technologies — Engineering for what comes next", siteName: "Codify Technologies", url: "https://codifyteam.com/", description: "Thoughtful teams. Dependable software. From the first idea to what comes next.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a>{children}</body></html>;
}
