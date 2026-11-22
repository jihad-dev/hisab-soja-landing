"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "অন্য বন্ধুদের ফোনে কি অ্যাপ থাকা বাধ্যতামূলক?",
    a: "না। শুধু একজন লিডারের ফোনে অ্যাপ থাকলেই চলবে। তিনি হিসাব রেখে PDF রিপোর্ট, সামারি কার্ড বা টেক্সট আকারে সবাইকে শেয়ার করতে পারবেন।",
  },
  {
    q: "ইন্টারনেট ছাড়া কি হিসাব দেখা যাবে?",
    a: "হ্যাঁ। আপনার হিসাব ফোনের লোকাল ডাটায় থাকে, তাই ইন্টারনেট ছাড়াই দেখা ও যোগ করা যায়। নিরাপত্তার জন্য JSON ব্যাকআপ নিয়ে রাখতে পারবেন।",
  },
  {
    q: "রিপোর্ট কীভাবে শেয়ার করব?",
    a: "সেটেলমেন্ট স্ক্রিন থেকে শেয়ার বাটনে চাপ দিয়ে PDF, ইমেজ কার্ড বা টেক্সট বেছে নিন। এরপর হোয়াটসঅ্যাপ, মেসেঞ্জার বা যেকোনো অ্যাপে পাঠিয়ে দিন।",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading title="সচরাচর জিজ্ঞাসা" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-slate-200 bg-mist">
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
                  >
                    {f.q}
                    <ChevronDown size={20} className={`shrink-0 text-mint-dark transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 leading-relaxed text-slate2">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
