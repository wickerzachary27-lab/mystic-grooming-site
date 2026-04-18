"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "services", label: "Services" },
  { id: "howitworks", label: "How It Works" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_20px_rgba(122,158,126,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <button
          onClick={() => scrollToId("top")}
          className={`font-display text-xl md:text-2xl tracking-tight transition-colors ${
            scrolled ? "text-sage-dark" : "text-ink"
          }`}
        >
          Mystic Mobile Grooming
        </button>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-rose ${
                scrolled ? "text-ink" : "text-ink"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("contact")}
            className="rounded-full bg-sage px-6 py-2.5 text-sm font-bold text-cream shadow-[0_6px_20px_rgba(122,158,126,0.35)] transition-all hover:bg-sage-dark hover:shadow-[0_10px_24px_rgba(122,158,126,0.45)]"
          >
            Book Now
          </button>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-full p-2 text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sage/20 bg-cream/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className="rounded-xl px-4 py-3 text-left text-base font-semibold text-ink hover:bg-sage/10"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("contact")}
              className="mt-2 rounded-full bg-sage px-6 py-3 text-center text-base font-bold text-cream"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
