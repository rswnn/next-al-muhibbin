import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Al-muhibbin",
  description: "EST 2006",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased bg-gradient-to-b from-[#302c6c] to-[#9d2d86]`}
      >
        {children}
      </body>
    </html>
  );
}
