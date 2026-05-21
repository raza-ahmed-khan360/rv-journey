import { Abril_Fatface, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientCanvasProvider from "@/components/3d/ClientCanvasProvider";

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "RV Journey — One Nation. One Road. One Story.",
    template: "%s | RV Journey",
  },
  description: "Follow an epic cross-country RV journey across America — one conversation at a time.",
  openGraph: {
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${abrilFatface.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ClientCanvasProvider />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
