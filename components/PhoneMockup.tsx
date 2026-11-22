"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Clock } from "lucide-react";

type Row = { from: string; to: string; amount: number };
const rows: Row[] = [
  { from: "Sagar", to: "Rafi", amount: 650 },
  { from: "Nila", to: "Rafi", amount: 420 },
];

export default function PhoneMockup() {
  const [paid, setPaid] = useState<Record<string, boolean>>({ Sagar: true, Nila: false });
  const pending = rows.filter((r) => !paid[r.from]).reduce((s, r) => s + r.amount, 0);

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-[290px] rounded-[2.6rem] border-[10px] border-ink bg-mist shadow-2xl sm:w-[310px]"
      role="img" aria-label="Hisab Soja অ্যাপের Settle Up স্ক্রিনের প্রিভিউ"
    >
      <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
      <div className="px-4 pb-5 pt-10">
        <div className="flex items-center gap-2">
          <ArrowLeft size={18} className="text-slate2" />
          <div>
            <p className="font-en text-base font-bold">Settle Up</p>
            <p className="text-xs text-slate2">কক্সবাজার ট্যুর • ৫ জন সদস্য</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-white p-4 shadow-card">
          <p className="text-xs text-slate2">মোট বাকি</p>
          <p className="font-en text-3xl font-bold text-ink">৳{pending.toLocaleString("en-US")}</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
            <motion.div className="h-full rounded-full bg-mint" animate={{ width: `${((1070 - pending) / 1070) * 100}%` }} />
          </div>
          <p className="mt-1.5 text-[11px] text-slate2">১,০৭০ টাকার মধ্যে ৳{(1070 - pending).toLocaleString("en-US")} পরিশোধিত</p>
        </div>

        <div className="mt-3 space-y-3">
          {rows.map((r) => {
            const done = paid[r.from];
            return (
              <div key={r.from} className="rounded-2xl bg-white p-3.5 shadow-card">
                <div className="flex items-center justify-between font-en text-sm font-semibold">
                  <span>{r.from}</span>
                  <span className="flex items-center gap-1 text-xs font-medium text-slate2">pays <ArrowRight size={13} /></span>
                  <span>{r.to}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="font-en text-xl font-bold">৳{r.amount}</p>
                  <button
                    onClick={() => setPaid((p) => ({ ...p, [r.from]: !p[r.from] }))} aria-pressed={done}
                    aria-label={`${r.from} এর পেমেন্ট স্ট্যাটাস পরিবর্তন করুন`}
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-en text-[11px] font-bold ${
                      done ? "bg-mint-tint text-mint-dark" : "bg-coral-tint text-coral"
                    }`}
                  >
                    {done ? <Check size={12} /> : <Clock size={12} />}
                    {done ? "DEBT PAID" : "PENDING"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-center text-[11px] text-slate2">স্ট্যাটাস ব্যাজে ট্যাপ করে দেখুন</p>
      </div>
    </motion.div>
  );
}
