import Image from "next/image";
import HeroCTAs from "./HeroCTAs";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-cream pt-24"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=2000&q=80"
          alt="Happy dog being groomed"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cream/90 via-cream/70 to-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-rose-dark">
            Eugene, Oregon
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Professional Grooming,
            <br />
            <span className="text-sage-dark italic">Delivered to Your Door.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">
            Mobile grooming by Ember — house calls only. Your dog gets
            one-on-one care in the comfort of home.
          </p>
          <div className="mt-10">
            <HeroCTAs />
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(92,125,96,0.35)] ring-4 ring-cream">
            <Image
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80"
              alt="Fluffy dog smiling after a groom"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-cream px-6 py-4 shadow-[0_14px_40px_rgba(122,158,126,0.25)] ring-1 ring-sage/20">
            <p className="font-display text-2xl text-sage-dark">Ember</p>
            <p className="text-sm text-ink/70">Your mobile groomer</p>
          </div>
          <div className="absolute -right-4 top-10 rounded-full bg-rose px-5 py-2 text-xs font-bold uppercase tracking-widest text-cream shadow-[0_10px_24px_rgba(212,160,160,0.4)]">
            House Calls Only
          </div>
        </div>
      </div>
    </section>
  );
}
