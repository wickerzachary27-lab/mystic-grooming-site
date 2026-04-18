import Image from "next/image";
import HeroCTAs from "./HeroCTAs";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-cream pt-24"
    >
      <Image
        src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=2400&q=80"
        alt="Happy smiling golden retriever"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream/80 to-cream/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
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
      </div>
    </section>
  );
}
