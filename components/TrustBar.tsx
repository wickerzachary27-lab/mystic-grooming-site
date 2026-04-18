const stats = [
  { big: "1-on-1", small: "Attention for Every Dog" },
  { big: "House Call", small: "We Come to You" },
  { big: "Stress-Free", small: "No Salon Anxiety" },
];

export default function TrustBar() {
  return (
    <section className="bg-sage py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 text-center text-cream sm:grid-cols-3 lg:px-10">
        {stats.map((s) => (
          <div key={s.big} className="flex flex-col items-center">
            <p className="font-display text-4xl sm:text-5xl tracking-tight">
              {s.big}
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-cream/85">
              {s.small}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
