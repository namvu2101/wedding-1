"use client";

import { useMemo, useState } from "react";
import { getDictionary, type Locale } from "@/lib/content";

type ContactFormProps = {
  locale: Locale;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  location: string;
  guestCount: string;
  budgetRange: string;
  serviceInterested: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  weddingDate: "",
  location: "",
  guestCount: "",
  budgetRange: "",
  serviceInterested: "",
  message: "",
};

export function ContactForm({ locale }: ContactFormProps) {
  const dictionary = getDictionary(locale);
  const services = dictionary.home.services.items;
  const labels =
    locale === "vi"
      ? {
          name: "Họ tên",
          email: "Email",
          phone: "Số điện thoại",
          weddingDate: "Ngày cưới / sự kiện",
          location: "Địa điểm",
          guestCount: "Số khách",
          budgetRange: "Ngân sách dự kiến",
          serviceInterested: "Dịch vụ quan tâm",
          message: "Lời nhắn",
          submit: "Gửi yêu cầu tư vấn",
          sending: "Đang gửi...",
          success: "Cảm ơn bạn. Yêu cầu tư vấn đã được ghi nhận.",
          error: "Vui lòng hoàn thiện các trường bắt buộc.",
          select: "Chọn",
        }
      : {
          name: "Name",
          email: "Email",
          phone: "Phone",
          weddingDate: "Wedding / Event Date",
          location: "Location",
          guestCount: "Guest Count",
          budgetRange: "Budget Range",
          serviceInterested: "Service Interested",
          message: "Message",
          submit: "Send inquiry",
          sending: "Sending...",
          success: "Thank you. Your inquiry has been received.",
          error: "Please complete the required fields.",
          select: "Select",
        };

  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const emailInvalid = useMemo(
    () => Boolean(form.email) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    [form.email],
  );

  function updateField(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.serviceInterested || !form.message || emailInvalid) {
      setStatus("error");
      setError(labels.error);
      return;
    }

    setStatus("submitting");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, locale }),
    });

    if (!response.ok) {
      setStatus("error");
      setError(labels.error);
      return;
    }

    setStatus("success");
    setForm(initialState);
  }

  return (
    <form className="grid gap-5 md:grid-cols-2" onSubmit={onSubmit} noValidate>
      <Field label={labels.name} required>
        <input
          autoComplete="name"
          className="form-control"
          name="name"
          required
          type="text"
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
        />
      </Field>
      <Field label={labels.email} required>
        <input
          autoComplete="email"
          aria-invalid={emailInvalid}
          className="form-control"
          name="email"
          required
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
        />
      </Field>
      <Field label={labels.phone} required>
        <input
          autoComplete="tel"
          className="form-control"
          name="phone"
          required
          type="tel"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
        />
      </Field>
      <Field label={labels.weddingDate}>
        <input
          className="form-control"
          name="weddingDate"
          type="date"
          value={form.weddingDate}
          onChange={(event) => updateField("weddingDate", event.target.value)}
        />
      </Field>
      <Field label={labels.location}>
        <input
          className="form-control"
          name="location"
          type="text"
          value={form.location}
          onChange={(event) => updateField("location", event.target.value)}
        />
      </Field>
      <Field label={labels.guestCount}>
        <input
          className="form-control"
          inputMode="numeric"
          name="guestCount"
          type="text"
          value={form.guestCount}
          onChange={(event) => updateField("guestCount", event.target.value)}
        />
      </Field>
      <Field label={labels.budgetRange}>
        <select
          className="form-control"
          name="budgetRange"
          value={form.budgetRange}
          onChange={(event) => updateField("budgetRange", event.target.value)}
        >
          <option value="">{labels.select}</option>
          <option value="under-50k">Under $50k</option>
          <option value="50k-100k">$50k - $100k</option>
          <option value="100k-250k">$100k - $250k</option>
          <option value="250k-plus">$250k+</option>
        </select>
      </Field>
      <Field label={labels.serviceInterested} required>
        <select
          className="form-control"
          name="serviceInterested"
          required
          value={form.serviceInterested}
          onChange={(event) => updateField("serviceInterested", event.target.value)}
        >
          <option value="">{labels.select}</option>
          {services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </Field>
      <Field label={labels.message} required wide>
        <textarea
          className="form-control min-h-40 resize-y"
          name="message"
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </Field>

      <div className="grid gap-4 md:col-span-2">
        <button
          className="label-caps min-h-12 border border-primary bg-primary px-8 py-4 text-surface transition-colors duration-300 hover:bg-secondary disabled:cursor-wait disabled:opacity-60"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? labels.sending : labels.submit}
        </button>
        <p className="min-h-6 text-sm leading-6 text-muted" role="status" aria-live="polite">
          {status === "success" ? labels.success : error}
        </p>
      </div>
    </form>
  );
}

function Field({
  children,
  label,
  required,
  wide,
}: {
  children: React.ReactNode;
  label: string;
  required?: boolean;
  wide?: boolean;
}) {
  return (
    <label className={`grid gap-2 ${wide ? "md:col-span-2" : ""}`}>
      <span className="label-caps text-[0.68rem] text-primary">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
