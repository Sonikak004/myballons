import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myballoonsmyprops.com"),
  alternates: {
    canonical: '/',
  },
  title: "My Balloons My Prop's | Best Event Planners & Decorators in Bangalore",
  description: "Top-rated event management company in Bengaluru. Specializing in luxury weddings, corporate events, birthday balloon decorations, and custom themes.",
  keywords: ["Event Planners Bangalore", "Balloon Decoration Bangalore", "Wedding Decorators Begur", "Corporate Event Management", "Birthday Planners Bengaluru", "My Balloons My Props"],
  openGraph: {
    title: "My Balloons My Prop's | Event Planners in Bangalore",
    description: "Creating unforgettable experiences. Book Bangalore's best decorators for your next event!",
    url: "https://myballoonsmyprops.com",
    siteName: "My Balloons My Prop's",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import SmoothScroller from "@/components/SmoothScroller";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans bg-background text-foreground" suppressHydrationWarning>
        <SmoothScroller>
          {children}
          <FloatingWhatsApp />
        </SmoothScroller>
      </body>
    </html>
  );
}
