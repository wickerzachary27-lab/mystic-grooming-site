import Image from "next/image";
import { Heart, Sparkles, Clock } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Less Stress for Your Dog",
    body: "No car rides, no waiting room, no other animals. Mobile grooming is proven to be calmer for anxious dogs.",
  },
  {
    icon: Sparkles,
    title: "One-on-One Care",
    body: "Your dog has Ember's full attention the entire appointment. No rushing, no cages, no distractions.",
  },
  {
    icon: Clock,
    title: "Convenient for You",
    body: "No drop-off, no pick-up window. Ember works around your schedule.",
  },
];

export default function WhyMobile() {
  return (
    <section id="about" className="relative bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_25px_60px_rgba(122,158,126,0.25)] ring-4 ring-cream">
              <Image
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80"
                alt="Happy fluffy dog"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-8 hidden rounded-2xl bg-sage px-6 py-4 shadow-lg lg:block">
              <p className="font-display text-xl text-cream">
                Calm. Careful. Caring.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-rose-dark">
              Our Approach
            </p>
            <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
              Why Mobile Grooming?
            </h2>
            <p className="mt-5 max-w-xl text-lg text-ink/70">
              Grooming shouldn&rsquo;t be something your dog dreads. Mobile
              grooming changes everything.
            </p>

            <div className="mt-10 space-y-6">
              {benefits.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex gap-5 rounded-2xl bg-cream p-6 shadow-[0_4px_20px_rgba(122,158,126,0.08)] ring-1 ring-sage/15"
                >
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-rose/20 text-rose-dark">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-ink">{title}</h3>
                    <p className="mt-1.5 text-base leading-relaxed text-ink/70">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
