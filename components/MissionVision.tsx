import { Eye, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section id="mission" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
        <article className="rounded-3xl border border-green-200 bg-mint-tint/60 p-8">
          <Target className="text-mint-dark" size={30} />
          <h2 className="mt-4 text-2xl font-bold">আমাদের মিশন <span className="font-en text-base font-semibold text-slate2">Our Mission</span></h2>
          <p className="mt-3 leading-relaxed">
            বাংলাদেশের শিক্ষার্থী, ভ্রমণপ্রেমী এবং ব্যাচেলর মেস মেম্বারদের দৈনন্দিন যৌথ খরচের হিসাবকে শতভাগ স্বচ্ছ, নির্ভুল এবং ঝামেলামুক্ত করা।
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <Eye className="text-ink" size={30} />
          <h2 className="mt-4 text-2xl font-bold">আমাদের ভিশন <span className="font-en text-base font-semibold text-slate2">Our Vision</span></h2>
          <p className="mt-3 leading-relaxed">
            স্থানীয় প্রয়োজনকে কেন্দ্র করে সহজ ও কার্যকরী ডিজিটাল ফিনটেক টুল তৈরি করা, যা সাধারণ মানুষের দৈনন্দিন আর্থিক ব্যবস্থাপনাকে আরও স্মার্ট করে তুলবে।
          </p>
        </article>
      </div>
    </section>
  );
}
