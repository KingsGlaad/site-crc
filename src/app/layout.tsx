import type { Metadata } from "next";
import { Rubik} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import 'leaflet/dist/leaflet.css'
import { Toaster } from "sonner";


const rubikFont = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Seja Bem Vindo a Cristo Reina Church",
  icons: [
    {
      rel: "icon",
      url: "/logo-preto.png",
      media: "(prefers-color-scheme: light)",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/logo.png",
      media: "(prefers-color-scheme: dark)",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/logo.png",
      type: "image/x-icon",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" suppressHydrationWarning>
      <body
        className={`${rubikFont.variable} antialiased`}
      >
       <ThemeProvider attribute="class" defaultTheme="dark" enableSystem >
        <Header/>
        {children}
        <Toaster/>
        <Footer/>
       </ThemeProvider>
      </body>
    </html>
  );
}
