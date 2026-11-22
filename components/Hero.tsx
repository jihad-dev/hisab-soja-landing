"use client";
import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import { PLAY_URL } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-mint-tint blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-mint-tint px-4 py-1.5 text-sm font-semibold text-mint-dark">
            <Sparkles size={15} /> ট্যুর ও গ্রুপ খরচের স্মার্ট সমাধান
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.25] sm:text-5xl lg:text-[3.4rem]">
            বন্ধুদের সাথে ট্যুর বা মেসের হিসাব এখন এক ক্লিকেই সোজা!
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate2">
            ডায়েরি আর এক্সেলের ঝামেলা ছাড়াই <span className="font-en font-semibold text-ink">Hisab Soja</span> গ্রুপের সব খরচ ন্যায্যভাবে ভাগ করে দেয় এবং বাংলাদেশি টাকায় (৳) কে কাকে কত দেবে তা তৎক্ষণাৎ হিসাব করে দেখায়।
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-ink px-6 py-3.5 text-white hover:bg-slate-800">
              <Download size={22} />
              <span className="text-left leading-tight">
                <span className="block font-en text-[11px] uppercase tracking-wide text-slate-300">Get it on</span>
                <span className="block font-en text-lg font-semibold">Google Play</span>
              </span>
            </a>
            <a href="#features"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold hover:border-mint hover:text-mint-dark">
              ফিচারসমূহ দেখুন
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
