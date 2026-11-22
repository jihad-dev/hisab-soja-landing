"use client";
import { useState } from "react";
import { Download, Menu, UserRound, Wallet, X } from "lucide-react";
import Modal from "./Modal";
import DevCard from "./DevCard";
import { PLAY_URL } from "@/lib/data";

const links = [
  { href: "#purpose", label: "উদ্দেশ্য" },
  { href: "#features", label: "ফিচারসমূহ" },
  { href: "#mission", label: "মিশন ও ভিশন" },
  { href: "#faq", label: "প্রশ্নোত্তর" },
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [dev, setDev] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="প্রধান নেভিগেশন">
        <a href="#top" className="flex items-center gap-2 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint-dark text-white"><Wallet size={19} /></span>
          <span>হিসাব সোজা <span className="font-en text-sm font-semibold text-slate2">Hisab Soja</span></span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-2 text-sm font-medium text-slate2 hover:bg-slate-100 hover:text-ink">{l.label}</a>
            </li>
          ))}
          <li>
            <button onClick={() => setDev(true)} className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-slate2 hover:bg-slate-100 hover:text-ink">
              <UserRound size={15} /> ডেভেলপার পরিচিতি
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-mint-dark px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-800">
            <Download size={16} /> <span className="hidden sm:inline">Download App (Google Play)</span><span className="sm:hidden">Download</span>
          </a>
          <button onClick={() => setMenu((v) => !v)} aria-expanded={menu} aria-label="মেনু" className="rounded-full p-2 hover:bg-slate-100 lg:hidden">
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menu && (
        <div className="border-t border-slate-100 bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setMenu(false)} className="block rounded-xl px-3 py-3 font-medium hover:bg-slate-50">{l.label}</a></li>
            ))}
            <li>
              <button onClick={() => { setMenu(false); setDev(true); }} className="block w-full rounded-xl px-3 py-3 text-left font-medium hover:bg-slate-50">ডেভেলপার পরিচিতি</button>
            </li>
          </ul>
        </div>
      )}

      <Modal open={dev} onClose={() => setDev(false)} title="ডেভেলপার পরিচিতি" side>
        <DevCard />
      </Modal>
    </header>
  );
}
