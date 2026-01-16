import type { Metadata } from "next";
import { inter, robotoMono, playfair } from './fonts'
import "./globals.css";


export const metadata: Metadata = {
  title: "Tarantula | Creative & Software Agency",
  description: "Tarantula is a creative and software agency delivering innovative digital solutions.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} ${playfair.variable}`}>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
