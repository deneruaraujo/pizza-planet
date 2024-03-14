import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header"
import { Providers } from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Pizza Planet',
    template: '%s - Pizza Planet'
  },
  description: "O planeta da pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="pt-BR">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </Providers >
  );
}
