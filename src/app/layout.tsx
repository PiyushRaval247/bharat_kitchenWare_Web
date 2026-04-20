import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bharat Kitchenware Mall | Best Kitchenware & Mall in Deesa",
  description: "Bharat Kitchenware Mall in Deesa is your one-stop destination for premium utensils, cookware, and kitchen appliances. Visit the best mall in Deesa for quality kitchen essentials by Om Bhai.",
  keywords: [
    "Bharat Kitchenware",
    "Bharat Mall",
    "Mall in Deesa",
    "Kitchenware in Deesa",
    "Nearby Malls in Deesa",
    "Om Bhai Bharat Kitchenware",
    "Best Kitchenware Store Deesa",
    "Quality Utensils Deesa",
    "Cookware Mall Deesa",
    "Bharat Kitchenware Mall"
  ],
  openGraph: {
    title: "Bharat Kitchenware Mall | Best Kitchenware & Mall in Deesa",
    description: "Premium utensils, cookware, and kitchen appliances at Bharat Kitchenware Mall in Deesa. Curating culinary excellence with Om Bhai.",
    url: "https://bharatkitchenware.com",
    siteName: "Bharat Kitchenware Mall",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
        {/* Force favicon refresh */}
        <link rel="icon" href="/icon.png?v=2" />
        <link rel="shortcut icon" href="/icon.png?v=2" />
        <link rel="apple-touch-icon" href="/icon.png?v=2" />
      </head>
      <body className={`${plusJakartaSans.variable} ${manrope.variable} font-body antialiased selection:bg-primary/20 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
