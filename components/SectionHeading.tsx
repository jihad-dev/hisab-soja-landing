export default function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold leading-snug sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-lg leading-relaxed text-slate2">{sub}</p>}
    </div>
  );
}
