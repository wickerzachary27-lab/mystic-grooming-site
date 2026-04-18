import { Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-rose/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-sage/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-rose-dark">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
              Ready to Book?
            </h2>
            <p className="mt-5 max-w-lg text-lg text-ink/70">
              Text or call Ember to schedule. She responds fast and works
              around your schedule.
            </p>

            <a
              href="tel:+19093335986"
              className="mt-8 flex items-center gap-4 rounded-2xl bg-sage px-6 py-5 text-cream shadow-[0_14px_40px_rgba(122,158,126,0.35)] transition-all hover:-translate-y-0.5 hover:bg-sage-dark"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-cream/20">
                <Phone size={22} strokeWidth={2.2} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-cream/80">
                  Call or Text
                </span>
                <span className="block font-display text-2xl tracking-tight sm:text-3xl">
                  (909) 333-5986
                </span>
              </span>
            </a>

            <a
              href="mailto:Mysticmobilegrooming@outlook.com"
              className="mt-4 flex items-center gap-4 rounded-2xl bg-cream px-6 py-5 text-ink ring-1 ring-sage/25 transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-rose/20 text-rose-dark">
                <Mail size={22} strokeWidth={2.2} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-ink/60">
                  Email
                </span>
                <span className="block break-all font-display text-lg text-ink sm:text-xl">
                  Mysticmobilegrooming@outlook.com
                </span>
              </span>
            </a>

            <div className="mt-8 rounded-2xl border border-dashed border-sage/40 bg-cream/60 p-5">
              <p className="font-display text-lg text-sage-dark">
                Service Area
              </p>
              <p className="mt-1 text-sm text-ink/70">
                Eugene, Springfield &amp; surrounding areas
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
