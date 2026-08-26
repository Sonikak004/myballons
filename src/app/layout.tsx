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
  title: "My Balloons My Prop's - Event Management",
  description: "Specializing in creating unforgettable experiences for every occasion.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import SmoothScroller from "@/components/SmoothScroller";

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
        </SmoothScroller>
      </body>
    </html>
  );
}
