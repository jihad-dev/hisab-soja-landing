import DevCard from "./DevCard";
import SectionHeading from "./SectionHeading";

export default function Developer() {
  return (
    <section id="developer" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="ডেভেলপার পরিচিতি" sub="যিনি হিসাব সোজা বানিয়েছেন।" />
        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <DevCard />
        </div>
      </div>
    </section>
  );
}
