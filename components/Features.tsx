import { DatabaseBackup, FileText, Luggage, PieChart, Route, UserRoundCheck, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

const features: { Icon: LucideIcon; title: string; text: string }[] = [
  { Icon: Luggage, title: "Smart Tour & Event Ledger", text: "আলাদা আলাদা ট্যুর বা ইভেন্ট তৈরি করে মেম্বার যুক্ত করুন।" },
  { Icon: Route, title: "Instant Net Debt Settlement", text: "কে কাকে কত টাকা দেবে তার অটোমেটিক ক্যালকুলেশন ও Paid/Pending স্ট্যাটাস ট্র্যাকিং।" },
  { Icon: FileText, title: "One-Click PDF & Image Summary", text: "অ্যাপ ছাড়াই অন্য মেম্বারদের জন্য প্রফেশনাল PDF রিপোর্ট ও ভিজ্যুয়াল কার্ড জেনারেট ও শেয়ার।" },
  { Icon: PieChart, title: "Budget Progress & Category Breakdown", text: "খাতভিত্তিক খরচের চার্ট এবং বাজেট লিমিট অ্যালার্ট।" },
  { Icon: UserRoundCheck, title: "Individual Member Ledger", text: "প্রতিটি মেম্বারের মোট জমা, মোট খরচ এবং বর্তমান ব্যালেন্সের আলাদা হিসাব।" },
  { Icon: DatabaseBackup, title: "Secure JSON Backup & Restore", text: "লোকাল ডাটা ব্যাকআপ ও রিস্টোর সুবিধা, যাতে কোনো হিসাব হারিয়ে না যায়।" },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="অ্যাপসের মূল কার্যক্রম ও ফিচারসমূহ" sub="ট্যুর শুরুর আগে থেকে হিসাব মেটানো পর্যন্ত যা যা দরকার, সবই এক জায়গায়।" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, text }) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint-tint text-mint-dark"><Icon size={24} /></span>
              <h3 className="mt-4 font-en text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-slate2">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
