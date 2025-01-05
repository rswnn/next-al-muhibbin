import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al-muhibbin",
  description: "Undangan Maulid Nabi Muhammad SAW dan Milad Majelis Ta'lim Al-Muhibbin",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-b from-[#302c6c] to-[#9d2d86]`}
      >
        {children}
      </body>
    </html>
  );
}
