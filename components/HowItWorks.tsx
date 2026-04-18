const steps = [
  {
    num: "01",
    title: "You Book",
    body: "Reach out by phone or text to schedule. Ember will confirm a time that works for you.",
  },
  {
    num: "02",
    title: "Ember Arrives",
    body: "Ember shows up with everything needed — just have water and an outlet available. Works indoors or outdoors.",
  },
  {
    num: "03",
    title: "Pickup Your Pup",
    body: "Your dog gets calm, one-on-one attention from start to finish. No cages, no other animals, no salon stress.",
  },
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="bg-sage py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-rose/80">
            Simple &amp; Easy
          </p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/85">
            Three simple steps from first call to a freshly-groomed,
            happy pup.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="flex items-baseline gap-5">
                <span className="font-display text-7xl font-bold text-rose/90 sm:text-8xl">
                  {step.num}
                </span>
                {i < steps.length - 1 && (
                  <span className="mt-4 hidden h-px flex-1 bg-cream/25 md:block" />
                )}
              </div>
              <h3 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-cream/85">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
