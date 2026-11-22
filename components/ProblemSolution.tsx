import { CheckCircle2, XCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pairs = [
  {
    problem: "ট্যুর শেষে কে কাকে কত দেবে তা নিয়ে বিভ্রান্তি ও অসংখ্য লেনদেন।",
    solution: "Instant Net Debt Settlement অ্যালগরিদম, যা সর্বনিম্ন লেনদেনে সব হিসাব চুকিয়ে দেয়।",
  },
  {
    problem: "সবার ফোনে অ্যাপ না থাকলে হিসাব শেয়ার করা কঠিন।",
    solution: "একজন লিডার হিসাব রাখবেন এবং এক ক্লিকে PDF রিপোর্ট, সামারি কার্ড ও টেক্সট হোয়াটসঅ্যাপ/মেসেঞ্জারে শেয়ার করতে পারবেন।",
  },
  {
    problem: "বাজেটের বাইরে অতিরিক্ত খরচ হয়ে যাওয়া।",
    solution: "Real-time Budget Tracker ও Category Analytics (খাবার, যাতায়াত, হোটেল) দিয়ে খরচ চোখে চোখে রাখুন।",
  },
];

export default function ProblemSolution() {
  return (
    <section id="purpose" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="অ্যাপসের উদ্দেশ্য ও সমস্যা সমাধান"
          sub="গ্রুপের আর্থিক হিসাব স্বচ্ছ রাখাই আমাদের লক্ষ্য, যাতে টাকার ভুল বোঝাবুঝি কখনও ট্যুর বা বন্ধুত্ব নষ্ট না করে।"
        />
        <div className="mt-6 hidden gap-5 text-center text-sm font-bold md:grid md:grid-cols-2">
          <p className="text-coral">আগের ঝামেলা</p>
          <p className="text-mint-dark">হিসাব সোজা সমাধান</p>
        </div>
        <div className="mt-10 space-y-5 md:mt-3">
          {pairs.map((p) => (
            <div key={p.problem} className="grid gap-3 md:grid-cols-2 md:gap-5">
              <div className="flex gap-3 rounded-2xl border border-red-100 bg-coral-tint/50 p-5">
                <XCircle className="mt-0.5 shrink-0 text-coral" size={22} />
                <div>
                  <p className="mb-1 text-xs font-bold text-coral md:hidden">আগের ঝামেলা</p>
                  <p className="leading-relaxed">{p.problem}</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border border-green-200 bg-mint-tint/60 p-5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-mint-dark" size={22} />
                <div>
                  <p className="mb-1 text-xs font-bold text-mint-dark md:hidden">হিসাব সোজা সমাধান</p>
                  <p className="leading-relaxed">{p.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
