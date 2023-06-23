import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Figtree, Inter, Manrope, Slackey, Space_Mono } from "next/font/google";

const space_mono = Space_Mono({
  subsets: ["latin"],
  variable: "--space-mono",
  weight: ["400"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--figtree",
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--manrope",
  weight: ["400", "500"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${figtree.variable} ${manrope.variable} ${inter.variable} ${space_mono.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
