import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderComponent } from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
