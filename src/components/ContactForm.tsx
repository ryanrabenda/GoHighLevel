"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/business";

const serviceOptions = [
  "Tree Removal",
  "Tree Pruning",
  "Landscaping",
  "Land Clearing",
  "Junk Removal",
  "Stonework",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

interface Errors {
  name?: string;
  phone?: string;
  service?: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors: Errors = {};
    const name = data.get("name")?.toString().trim();
    const phone = data.get("phone")?.toString().trim();
    const service = data.get("service")?.toString().trim();

    if (!name) nextErrors.name = "Please enter your name.";
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (!service) nextErrors.service = "Please select a service.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-2xl bg-forest px-6 py-16 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="#221c15" strokeWidth="2.5" className="h-7 w-7">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="font-display text-3xl font-semibold text-cream">Request Received</h3>
        <p className="max-w-sm font-body text-sm leading-relaxed text-cream/75">
          Thanks for reaching out. We&rsquo;ll be in touch shortly to schedule
          your free estimate. Need to talk now?
        </p>
        <a href={company.phoneHref} className="font-display text-2xl font-semibold text-gold">
          Call {company.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required error={errors.name} autoComplete="name" />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          error={errors.phone}
          autoComplete="tel"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" autoComplete="email" />
        <Field label="Property Address / Town" name="address" autoComplete="address-level2" />
      </div>

      <div>
        <label htmlFor="service" className="block font-label text-xs font-semibold uppercase tracking-wide text-cream/80">
          Service Needed <span className="text-gold">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className="mt-2 w-full rounded-lg border border-cream/25 bg-forest-deep px-4 py-3 text-cream focus:border-gold"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1 text-xs text-gold">
            {errors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="details" className="block font-label text-xs font-semibold uppercase tracking-wide text-cream/80">
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className="mt-2 w-full rounded-lg border border-cream/25 bg-forest-deep px-4 py-3 text-cream focus:border-gold"
          placeholder="Tell us about the trees, the property or the job."
        />
      </div>

      <div>
        <label htmlFor="photo" className="block font-label text-xs font-semibold uppercase tracking-wide text-cream/80">
          Upload Photos (optional)
        </label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          className="mt-2 w-full rounded-lg border border-cream/25 bg-forest-deep px-4 py-3 text-sm text-cream/70 file:mr-4 file:rounded-full file:border-0 file:bg-gold file:px-3 file:py-1.5 file:font-label file:text-xs file:font-semibold file:uppercase file:text-charcoal"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-gold">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 rounded-full bg-gold px-8 py-4 font-label text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:bg-parchment disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request My Free Estimate"}
      </button>

      <p className="text-center font-body text-sm text-cream/60">
        Prefer to talk?{" "}
        <a href={company.phoneHref} className="font-semibold text-gold">
          Call {company.phone}
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block font-label text-xs font-semibold uppercase tracking-wide text-cream/80">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 w-full rounded-lg border border-cream/25 bg-forest-deep px-4 py-3 text-cream focus:border-gold"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-gold">
          {error}
        </p>
      )}
    </div>
  );
}
