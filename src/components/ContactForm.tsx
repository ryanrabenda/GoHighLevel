"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/lib/business";

const serviceOptions = [
  "Tree Removal",
  "Tree Pruning",
  "Landscaping",
  "Junk Removal",
  "Land Clearing",
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
        className="flex flex-col items-center gap-4 rounded-sm bg-forest-deep px-6 py-16 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-moss">
          <svg viewBox="0 0 24 24" fill="none" stroke="#102e22" strokeWidth="2.5" className="h-7 w-7">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="font-display text-3xl font-bold uppercase text-offwhite">
          Request Received
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-offwhite/75">
          Thanks for reaching out. We&rsquo;ll be in touch shortly to schedule
          your free estimate. Need to talk now?
        </p>
        <a href={business.phoneHref} className="font-display text-2xl font-bold text-khaki">
          Call {business.phoneDisplay}
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
        <label htmlFor="service" className="block font-eyebrow text-xs uppercase tracking-wider text-offwhite/80">
          Service Needed <span className="text-moss">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className="mt-2 w-full rounded-sm border border-offwhite/20 bg-forest-dark px-4 py-3 text-offwhite focus:border-moss"
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
          <p id="service-error" className="mt-1 text-xs text-amber">
            {errors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="details" className="block font-eyebrow text-xs uppercase tracking-wider text-offwhite/80">
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className="mt-2 w-full rounded-sm border border-offwhite/20 bg-forest-dark px-4 py-3 text-offwhite focus:border-moss"
          placeholder="Tell us about the trees, the property or the job."
        />
      </div>

      <div>
        <label htmlFor="photo" className="block font-eyebrow text-xs uppercase tracking-wider text-offwhite/80">
          Upload Photos (optional)
        </label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          className="mt-2 w-full rounded-sm border border-offwhite/20 bg-forest-dark px-4 py-3 text-sm text-offwhite/70 file:mr-4 file:rounded-sm file:border-0 file:bg-moss file:px-3 file:py-1.5 file:font-eyebrow file:text-xs file:uppercase file:text-forest-dark"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-amber">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 rounded-sm bg-moss px-8 py-4 font-eyebrow text-sm uppercase tracking-wider text-forest-dark transition-colors hover:bg-khaki disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request My Free Estimate"}
      </button>

      <p className="text-center text-sm text-offwhite/60">
        Prefer to talk?{" "}
        <a href={business.phoneHref} className="font-semibold text-khaki">
          Call {business.phoneDisplay}
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
      <label htmlFor={name} className="block font-eyebrow text-xs uppercase tracking-wider text-offwhite/80">
        {label} {required && <span className="text-moss">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 w-full rounded-sm border border-offwhite/20 bg-forest-dark px-4 py-3 text-offwhite focus:border-moss"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-amber">
          {error}
        </p>
      )}
    </div>
  );
}
