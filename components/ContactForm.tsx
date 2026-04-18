"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";

const serviceOptions = [
  "Bath & Brush",
  "Full Groom",
  "Nail Trim",
  "Ear Cleaning",
  "Teeth Brushing",
  "De-Shedding Treatment",
  "Not sure yet — help me pick",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const dogName = String(data.get("dogName") ?? "");
    const breed = String(data.get("breed") ?? "");
    const service = String(data.get("service") ?? "");
    const when = String(data.get("when") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `New grooming request from ${name}`;
    const body =
      `Hi Ember,\n\n` +
      `I'd love to book a grooming. Here are the details:\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Dog's Name: ${dogName}\n` +
      `Breed / Size: ${breed}\n` +
      `Service: ${service}\n` +
      `Preferred Date/Time: ${when}\n\n` +
      `Message:\n${message}\n`;

    const href = `mailto:Mysticmobilegrooming@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-sage/10 p-10 text-center ring-1 ring-sage/25">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-cream">
          <Check size={28} strokeWidth={3} />
        </div>
        <h3 className="font-display text-2xl text-sage-dark sm:text-3xl">
          Thanks — your email is ready to send!
        </h3>
        <p className="mt-3 text-base text-ink/70">
          Your email client should have opened with the details filled in.
          If nothing happened, reach out directly at{" "}
          <a
            href="mailto:Mysticmobilegrooming@outlook.com"
            className="font-semibold text-sage-dark underline"
          >
            Mysticmobilegrooming@outlook.com
          </a>{" "}
          or call{" "}
          <a
            href="tel:+19093335986"
            className="font-semibold text-sage-dark underline"
          >
            (909) 333-5986
          </a>
          .
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-rose-dark hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-cream p-8 shadow-[0_10px_40px_rgba(122,158,126,0.12)] ring-1 ring-sage/20 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Your Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Dog's Name" name="dogName" required />
        <Field label="Breed / Size" name="breed" required />
        <div className="flex flex-col gap-2">
          <label
            htmlFor="service"
            className="text-xs font-bold uppercase tracking-[0.18em] text-sage-dark"
          >
            Preferred Service
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="rounded-xl border border-sage/30 bg-white px-4 py-3 text-base text-ink outline-none transition-colors focus:border-sage focus:ring-2 focus:ring-sage/30"
          >
            <option value="" disabled>
              Select a service…
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <Field
          label="Preferred Date / Time"
          name="when"
          placeholder="e.g. Saturday morning"
          required
        />
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs font-bold uppercase tracking-[0.18em] text-sage-dark"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Anything Ember should know about your pup?"
          className="resize-none rounded-xl border border-sage/30 bg-white px-4 py-3 text-base text-ink outline-none transition-colors focus:border-sage focus:ring-2 focus:ring-sage/30"
        />
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-sage px-8 py-4 text-base font-bold text-cream shadow-[0_10px_30px_rgba(122,158,126,0.4)] transition-all hover:-translate-y-0.5 hover:bg-sage-dark sm:w-auto"
      >
        Send Request
      </button>
      <p className="mt-4 text-xs text-ink/55">
        Opens in your email app with everything filled in.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs font-bold uppercase tracking-[0.18em] text-sage-dark"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-sage/30 bg-white px-4 py-3 text-base text-ink outline-none transition-colors focus:border-sage focus:ring-2 focus:ring-sage/30"
      />
    </div>
  );
}
