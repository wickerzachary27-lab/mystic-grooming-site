"use client";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HeroCTAs() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <button
        onClick={() => scrollToId("contact")}
        className="rounded-full bg-sage px-8 py-4 text-base font-bold text-cream shadow-[0_10px_30px_rgba(122,158,126,0.4)] transition-all hover:-translate-y-0.5 hover:bg-sage-dark hover:shadow-[0_14px_34px_rgba(122,158,126,0.5)]"
      >
        Book a Grooming
      </button>
      <button
        onClick={() => scrollToId("howitworks")}
        className="rounded-full border-2 border-rose bg-cream/60 px-8 py-4 text-base font-bold text-rose-dark backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-rose hover:text-cream"
      >
        How It Works
      </button>
    </div>
  );
}
