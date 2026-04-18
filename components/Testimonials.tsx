import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Bailey was nervous about grooming but Ember was so patient and gentle. She came out looking amazing and wasn't stressed at all. We're never going back to a salon!",
    name: "Sarah M.",
    where: "Eugene",
  },
  {
    quote:
      "The convenience alone is worth it. Ember texted when she was on her way, finished on time, and my dog looked great. Highly recommend.",
    name: "Tom K.",
    where: "Springfield",
  },
  {
    quote:
      "Ember is amazing with my anxious rescue. He used to shake at the groomer but now he's totally calm. Best decision I made.",
    name: "Jess R.",
    where: "Eugene",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-rose-dark">
            Kind Words
          </p>
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Loved by Local Pups &amp; People
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex h-full flex-col rounded-2xl border-b-4 border-rose bg-white p-8 shadow-[0_10px_40px_rgba(122,158,126,0.1)]"
            >
              <Quote
                size={36}
                className="text-rose/60"
                strokeWidth={1.5}
              />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-sage/15 pt-4">
                <p className="font-display text-xl text-sage-dark">
                  {t.name}
                </p>
                <p className="text-sm text-ink/60">{t.where}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
