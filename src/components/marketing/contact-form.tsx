"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ds";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent"; reference: string }
  | { kind: "error"; message: string };

const FIELD_BASE =
  "w-full rounded-xs border border-rule-strong bg-paper px-3 py-[10px] text-sm text-ink placeholder:text-muted-2 transition-colors duration-fast focus:border-ink focus:outline-none";

const LABEL_BASE =
  "block font-mono text-[11px] font-medium uppercase tracking-kicker text-muted";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      role: String(data.get("role") ?? "").trim(),
      organization: String(data.get("organization") ?? "").trim(),
      country: String(data.get("country") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({
        kind: "error",
        message: "Please supply at least a name, email, and short message.",
      });
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => ({}))) as {
        reference?: string;
        message?: string;
      };
      if (!res.ok) {
        setStatus({
          kind: "error",
          message:
            body.message ??
            "We could not deliver your message. Please email briefings@noorinsight.co directly.",
        });
        return;
      }
      setStatus({
        kind: "sent",
        reference: body.reference ?? "NI-UNKNOWN",
      });
      form.reset();
    } catch {
      setStatus({
        kind: "error",
        message:
          "We could not reach the submission endpoint. Please email briefings@noorinsight.co directly.",
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="border border-rule bg-paper-soft p-8 sm:p-10">
        <p className="font-mono text-[11px] uppercase tracking-kicker text-ember">
          Received
        </p>
        <p className="mt-3 font-serif text-2xl font-normal leading-[1.3] text-ink">
          Thank you. You will hear from a named partner within two business days.
        </p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-kicker text-muted">
          Reference · {status.reference}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 border border-rule bg-paper-soft p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field
          label="Institutional email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@institution.org"
        />
        <Field label="Role" name="role" autoComplete="organization-title" />
        <Field
          label="Organization"
          name="organization"
          autoComplete="organization"
        />
        <Field label="Country" name="country" autoComplete="country-name" />
      </div>
      <div>
        <label htmlFor="contact-message" className={LABEL_BASE}>
          Short message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={`${FIELD_BASE} mt-2 resize-y leading-[1.6]`}
          placeholder="What you would like to cover in the briefing."
        />
      </div>
      <p className="text-sm leading-[1.55] text-muted">
        Briefings are delivered under NDA. We will not share your message
        outside the firm without written consent.
      </p>
      <div className="flex flex-wrap items-center gap-5">
        <Button
          type="submit"
          variant="accent"
          disabled={status.kind === "submitting"}
        >
          {status.kind === "submitting" ? "Sending…" : "Request briefing"}
        </Button>
        {status.kind === "error" ? (
          <p role="alert" className="text-sm text-variance">
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className={LABEL_BASE}>
        {label}
        {required ? <span className="text-ember"> *</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={`${FIELD_BASE} mt-2`}
      />
    </div>
  );
}
