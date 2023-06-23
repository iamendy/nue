import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Figtree, Inter, Manrope, Slackey } from "next/font/google";

const slackey = Slackey({
  subsets: ["latin"],
  variable: "--figtree",
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
      className={`${figtree.variable} ${manrope.variable} ${inter.variable} ${slackey.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
