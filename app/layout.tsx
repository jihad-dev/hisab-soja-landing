import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";

const bn = Hind_Siliguri({
  subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700"],
  variable: "--font-bn", display: "swap",
});
const en = Inter({ subsets: ["latin"], variable: "--font-en", display: "swap" });

export const metadata: Metadata = {
  title: "হিসাব সোজা (Hisab Soja) — ট্যুর ও গ্রুপ খরচের স্মার্ট সমাধান",
  description:
    "বন্ধুদের সাথে ট্যুর বা মেসের হিসাব এখন এক ক্লিকেই সোজা। Hisab Soja দিয়ে গ্রুপ খরচ ভাগ করুন এবং সর্বনিম্ন লেনদেনে সব হিসাব মেটান।",
  keywords: ["Hisab Soja", "হিসাব সোজা", "expense splitter", "tour expense", "mess hisab", "Bangladesh"],
  openGraph: { title: "হিসাব সোজা (Hisab Soja)", description: "ট্যুর ও গ্রুপ খরচের স্মার্ট সমাধান", locale: "bn_BD", type: "website" },
};
export const viewport: Viewport = { themeColor: "#F8FAFC", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={`${bn.variable} ${en.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
