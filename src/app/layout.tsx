import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { HeaderComponent } from "@/components/ui/header";
import { FooterComponent } from "@/components/sections/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DTechCraft Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body className={montserrat.className}>
        <HeaderComponent />
        {children}
        <FooterComponent  />
      </body>
    </html>
  );
}
