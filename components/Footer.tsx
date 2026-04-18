"use client";

const links = [
  { id: "services", label: "Services" },
  { id: "howitworks", label: "How It Works" },
  { id: "about", label: "Why Mobile" },
  { id: "contact", label: "Book Now" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  return (
    <footer className="bg-sage-dark text-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-tight">
              Mystic Mobile Grooming
            </p>
            <p className="mt-2 text-sm text-cream/80">
              Eugene, OR · House call grooming by Ember
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 md:justify-center">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToId(l.id)}
                className="text-sm font-semibold text-cream/90 transition-colors hover:text-rose"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="text-sm md:text-right">
            <a
              href="tel:+19093335986"
              className="block font-display text-xl text-cream transition-colors hover:text-rose"
            >
              (909) 333-5986
            </a>
            <a
              href="mailto:Mysticmobilegrooming@outlook.com"
              className="mt-1 block break-all text-cream/85 transition-colors hover:text-rose"
            >
              Mysticmobilegrooming@outlook.com
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2025 Mystic Mobile Grooming</p>
          <p>Serving Eugene, Springfield &amp; surrounding areas</p>
        </div>
      </div>
    </footer>
  );
}
