import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Autometa - AI Automation Solutions",
  description: "Autometa empowers businesses with cutting-edge AI automation solutions that streamline operations, reduce costs, and drive innovation.",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: ['/favicon.png'],
    apple: [{ url: '/favicon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'apple-touch-icon', url: '/favicon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* We'll use a direct link tag for the favicon */}
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Root element for Calendly popups */}
        <div id="calendly-root"></div>
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
