import {
  Droplets,
  Scissors,
  Wrench,
  Wind,
  Smile,
  Layers,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  name: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: Droplets,
    name: "Bath & Brush",
    desc: "A warm, gentle bath with premium shampoo and a thorough brush-out.",
  },
  {
    icon: Scissors,
    name: "Full Groom",
    desc: "Bath, haircut, brush-out, and finish — tailored to your dog's breed and style.",
  },
  {
    icon: Wrench,
    name: "Nail Trim",
    desc: "Careful nail trimming and filing to keep paws healthy and comfortable.",
  },
  {
    icon: Wind,
    name: "Ear Cleaning",
    desc: "Safe, gentle ear cleaning to prevent buildup and keep ears healthy.",
  },
  {
    icon: Smile,
    name: "Teeth Brushing",
    desc: "Fresh breath and a healthier smile with dog-safe toothpaste.",
  },
  {
    icon: Layers,
    name: "De-Shedding Treatment",
    desc: "Specialized treatment that dramatically reduces shedding in your home.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-rose-dark">
            Services
          </p>
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
            What&rsquo;s Included
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">
            Full-service grooming, brought right to your driveway. Mix and
            match what your pup needs — Ember tailors every visit.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-2xl border-l-4 border-transparent bg-cream p-8 shadow-[0_6px_30px_rgba(122,158,126,0.08)] ring-1 ring-sage/15 transition-all duration-300 hover:-translate-y-1 hover:border-rose hover:shadow-[0_14px_40px_rgba(212,160,160,0.18)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/15 text-sage-dark transition-colors group-hover:bg-sage group-hover:text-cream">
                <Icon size={28} strokeWidth={2} />
              </div>
              <h3 className="font-display text-2xl text-ink">{name}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
