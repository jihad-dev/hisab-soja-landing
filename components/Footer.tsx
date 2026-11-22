"use client";
import { useState } from "react";
import { Download, Wallet } from "lucide-react";
import Modal from "./Modal";
import { PLAY_URL, DEV } from "@/lib/data";

const links = [
  { href: "#purpose", label: "উদ্দেশ্য" },
  { href: "#features", label: "ফিচারসমূহ" },
  { href: "#mission", label: "মিশন ও ভিশন" },
  { href: "#developer", label: "ডেভেলপার পরিচিতি" },
  { href: "#faq", label: "প্রশ্নোত্তর" },
];

export default function Footer() {
  const [privacy, setPrivacy] = useState(false);
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 text-lg font-bold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint-dark"><Wallet size={19} /></span> হিসাব সোজা
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">ট্যুর, মেস ও গ্রুপ খরচের হিসাব রাখুন স্বচ্ছভাবে, সোজা উপায়ে।</p>
        </div>
        <nav aria-label="ফুটার লিংক">
          <ul className="space-y-2 text-sm">
            {links.map((l) => (<li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>))}
            <li><button onClick={() => setPrivacy(true)} className="hover:text-white">Privacy Policy</button></li>
          </ul>
        </nav>
        <div>
          <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-slate-600 bg-black px-5 py-3 text-white hover:border-white">
            <Download size={20} />
            <span className="text-left leading-tight">
              <span className="block font-en text-[10px] uppercase tracking-wide text-slate-300">Get it on</span>
              <span className="block font-en font-semibold">Google Play</span>
            </span>
          </a>
        </div>
      </div>
      <div className="border-t border-slate-700 py-5 text-center font-en text-sm">© 2026 Hisab Soja by {DEV.name}</div>

      <Modal open={privacy} onClose={() => setPrivacy(false)} title="Privacy Policy">
        <div className="space-y-4 text-sm leading-relaxed text-slate2">
          <p><strong className="text-ink">ডাটা সংরক্ষণ:</strong> আপনার ট্যুর, সদস্য ও খরচের তথ্য আপনার ডিভাইসেই লোকালি সংরক্ষিত থাকে।</p>
          <p><strong className="text-ink">ব্যাকআপ:</strong> JSON ব্যাকআপ ফাইল আপনি নিজে তৈরি করেন এবং কোথায় রাখবেন তা আপনিই ঠিক করেন।</p>
          <p><strong className="text-ink">শেয়ারিং:</strong> PDF, ইমেজ বা টেক্সট রিপোর্ট কেবল তখনই শেয়ার হয় যখন আপনি শেয়ার বাটন চাপেন।</p>
          <p><strong className="text-ink">যোগাযোগ:</strong> প্রশ্ন বা মতামত থাকলে ডেভেলপার পরিচিতি সেকশনের ফিডব্যাক বাটন ব্যবহার করুন।</p>
        </div>
      </Modal>
    </footer>
  );
}
