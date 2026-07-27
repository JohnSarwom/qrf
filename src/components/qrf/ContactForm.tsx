import { useId, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { contactForm } from "@/content/contact";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

type ContactMethod = (typeof contactForm.preferredContactMethods)[number];

interface FormValues {
  name: string;
  organisation: string;
  email: string;
  telephone: string;
  preferredContact: ContactMethod;
  solution: string;
  location: string;
  requirement: string;
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const initialValues: FormValues = {
  name: "",
  organisation: "",
  email: "",
  telephone: "",
  preferredContact: "Email",
  solution: "",
  location: "",
  requirement: "",
  consent: false,
};

/**
 * Submission target. Set VITE_CONTACT_ENDPOINT to post enquiries to a form
 * service, CRM or serverless handler. Without it the form falls back to
 * composing an email to the published address so enquiries still reach QRF.
 */
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

if (import.meta.env.DEV && !endpoint && !company.generalEmail) {
  console.warn(
    "[QRF] Contact form has no delivery channel. Set VITE_CONTACT_ENDPOINT or " +
      "company.generalEmail in src/content/company.ts before going live, or " +
      "enquiries submitted through the website will not reach anyone.",
  );
}

const fieldClasses =
  "min-h-12 w-full rounded-qrf-sm border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-qrf-muted transition-colors focus:border-qrf-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-qrf-ink";

const labelClasses = "mb-2 block text-sm font-bold text-white";

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name so we know who to respond to.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (values.preferredContact === "Telephone" && !values.telephone.trim()) {
    errors.telephone =
      "Enter a telephone number, or change your preferred contact method to email.";
  }

  if (!values.solution) {
    errors.solution = "Select the area your enquiry relates to.";
  }

  if (!values.requirement.trim()) {
    errors.requirement = "Tell us briefly what you need, so we can respond usefully.";
  }

  if (!values.consent) {
    errors.consent = "Please confirm consent so we can respond to your enquiry.";
  }

  return errors;
}

function composeEmailBody(values: FormValues): string {
  return [
    `Name: ${values.name}`,
    `Organisation: ${values.organisation || "Not supplied"}`,
    `Email: ${values.email}`,
    `Telephone: ${values.telephone || "Not supplied"}`,
    `Preferred contact method: ${values.preferredContact}`,
    `Solution of interest: ${values.solution}`,
    `Site or location: ${values.location || "Not supplied"}`,
    "",
    "Requirement:",
    values.requirement,
  ].join("\n");
}

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  // Bots complete hidden fields; genuine users never see this one.
  const [honeypot, setHoneypot] = useState("");

  const fieldId = (name: string) => `${formId}-${name}`;
  const errorId = (name: string) => `${formId}-${name}-error`;

  const update = <K extends keyof FormValues>(name: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (honeypot) {
      // Silently accept and discard: do not tell an automated submitter why.
      setStatus("success");
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }

    setStatus("submitting");

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        setStatus("success");
        setValues(initialValues);
      } catch {
        setStatus("error");
      }
      return;
    }

    if (company.generalEmail) {
      const subject = `Website enquiry: ${values.solution}`;
      window.location.href = `mailto:${company.generalEmail}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(composeEmailBody(values))}`;
      setStatus("success");
      return;
    }

    // No endpoint and no published address: the site cannot deliver this.
    // Retrying will not help, so say so rather than blaming the visitor.
    setStatus("unconfigured");
  };

  const errorEntries = Object.entries(errors) as [keyof FormValues, string][];

  if (status === "success") {
    return (
      <div
        className="qrf-card-surface qrf-card-padding flex min-h-96 flex-col items-start justify-center"
        role="status"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-qrf-sm bg-qrf-blue text-white shadow-qrf-glow">
          <CheckCircle2 aria-hidden="true" className="h-6 w-6" />
        </span>
        <h3 className="mt-8 font-heading text-2xl font-bold text-white">
          Enquiry received
        </h3>
        <p className="qrf-pretty mt-4 max-w-md text-sm leading-7 text-qrf-soft">
          {contactForm.successMessage}
        </p>
        <button
          className="mt-8 text-sm font-bold text-qrf-cyan transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan"
          onClick={() => setStatus("idle")}
          type="button"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="qrf-card-surface qrf-card-padding" noValidate onSubmit={handleSubmit}>
      <p className="qrf-kicker">Enquiry</p>
      <h2 className="qrf-heading mt-4 text-white" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}>
        Tell us what you need
      </h2>

      {errorEntries.length > 0 && (
        <div
          className="mt-7 rounded-qrf-sm border border-red-400/40 bg-red-500/10 p-4"
          ref={errorSummaryRef}
          role="alert"
          tabIndex={-1}
        >
          <p className="flex items-center gap-2 text-sm font-bold text-red-200">
            <AlertCircle aria-hidden="true" className="h-4 w-4" />
            Please check the following
          </p>
          <ul className="mt-3 grid gap-1.5">
            {errorEntries.map(([field, message]) => (
              <li key={field}>
                <a
                  className="text-sm text-red-200 underline underline-offset-4 hover:text-white"
                  href={`#${fieldId(field)}`}
                >
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === "error" && (
        <div
          className="mt-7 rounded-qrf-sm border border-red-400/40 bg-red-500/10 p-4 text-sm leading-6 text-red-100"
          role="alert"
        >
          {contactForm.genericErrorMessage}
        </div>
      )}

      {status === "unconfigured" && (
        <div
          className="mt-7 rounded-qrf-sm border border-amber-400/40 bg-amber-500/10 p-4 text-sm leading-6 text-amber-100"
          role="alert"
        >
          Online enquiries are not available at the moment. Please use the
          contact details on this page to reach the QRF team directly.
        </div>
      )}

      <div className="mt-8 grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className={labelClasses} htmlFor={fieldId("name")}>
              Name <span className="text-qrf-cyan">*</span>
            </label>
            <input
              aria-describedby={errors.name ? errorId("name") : undefined}
              aria-invalid={Boolean(errors.name)}
              autoComplete="name"
              className={cn(fieldClasses, errors.name && "border-red-400/70")}
              id={fieldId("name")}
              name="name"
              onChange={(event) => update("name", event.target.value)}
              placeholder="Your full name"
              type="text"
              value={values.name}
            />
            {errors.name && (
              <p className="mt-2 text-xs font-semibold text-red-300" id={errorId("name")}>
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className={labelClasses} htmlFor={fieldId("organisation")}>
              Organisation
            </label>
            <input
              autoComplete="organization"
              className={fieldClasses}
              id={fieldId("organisation")}
              name="organisation"
              onChange={(event) => update("organisation", event.target.value)}
              placeholder="Company or agency"
              type="text"
              value={values.organisation}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className={labelClasses} htmlFor={fieldId("email")}>
              Email <span className="text-qrf-cyan">*</span>
            </label>
            <input
              aria-describedby={errors.email ? errorId("email") : undefined}
              aria-invalid={Boolean(errors.email)}
              autoComplete="email"
              className={cn(fieldClasses, errors.email && "border-red-400/70")}
              id={fieldId("email")}
              name="email"
              onChange={(event) => update("email", event.target.value)}
              placeholder="you@organisation.com"
              type="email"
              value={values.email}
            />
            {errors.email && (
              <p className="mt-2 text-xs font-semibold text-red-300" id={errorId("email")}>
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className={labelClasses} htmlFor={fieldId("telephone")}>
              Telephone
            </label>
            <input
              aria-describedby={errors.telephone ? errorId("telephone") : undefined}
              aria-invalid={Boolean(errors.telephone)}
              autoComplete="tel"
              className={cn(fieldClasses, errors.telephone && "border-red-400/70")}
              id={fieldId("telephone")}
              inputMode="tel"
              name="telephone"
              onChange={(event) => update("telephone", event.target.value)}
              placeholder="+675 ..."
              type="tel"
              value={values.telephone}
            />
            {errors.telephone && (
              <p
                className="mt-2 text-xs font-semibold text-red-300"
                id={errorId("telephone")}
              >
                {errors.telephone}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className={labelClasses} htmlFor={fieldId("solution")}>
              Area of interest <span className="text-qrf-cyan">*</span>
            </label>
            <select
              aria-describedby={errors.solution ? errorId("solution") : undefined}
              aria-invalid={Boolean(errors.solution)}
              className={cn(fieldClasses, errors.solution && "border-red-400/70")}
              id={fieldId("solution")}
              name="solution"
              onChange={(event) => update("solution", event.target.value)}
              value={values.solution}
            >
              <option className="bg-qrf-card" disabled value="">
                Select an area
              </option>
              {contactForm.solutionOptions.map((option) => (
                <option className="bg-qrf-card" key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.solution && (
              <p
                className="mt-2 text-xs font-semibold text-red-300"
                id={errorId("solution")}
              >
                {errors.solution}
              </p>
            )}
          </div>

          <div>
            <label className={labelClasses} htmlFor={fieldId("location")}>
              Site or location
            </label>
            <input
              className={fieldClasses}
              id={fieldId("location")}
              name="location"
              onChange={(event) => update("location", event.target.value)}
              placeholder="Port Moresby, regional or remote site"
              type="text"
              value={values.location}
            />
          </div>
        </div>

        <fieldset>
          <legend className={labelClasses}>
            Preferred contact method <span className="text-qrf-cyan">*</span>
          </legend>
          <div className="flex flex-wrap gap-3">
            {contactForm.preferredContactMethods.map((method) => {
              const selected = values.preferredContact === method;
              return (
                <label
                  className={cn(
                    "flex min-h-12 cursor-pointer items-center gap-3 rounded-qrf-sm border px-4 py-3 text-sm font-bold transition-colors focus-within:ring-2 focus-within:ring-qrf-cyan",
                    selected
                      ? "border-qrf-bright bg-qrf-blue/15 text-white"
                      : "border-white/15 bg-white/[0.04] text-qrf-soft hover:border-white/30",
                  )}
                  key={method}
                >
                  <input
                    checked={selected}
                    className="h-4 w-4 accent-qrf-bright"
                    name={`${formId}-preferredContact`}
                    onChange={() => update("preferredContact", method)}
                    type="radio"
                    value={method}
                  />
                  {method}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label className={labelClasses} htmlFor={fieldId("requirement")}>
            Your requirement <span className="text-qrf-cyan">*</span>
          </label>
          <textarea
            aria-describedby={cn(
              errors.requirement ? errorId("requirement") : "",
              `${formId}-privacy`,
            ).trim()}
            aria-invalid={Boolean(errors.requirement)}
            className={cn(
              fieldClasses,
              "min-h-36 resize-y leading-6",
              errors.requirement && "border-red-400/70",
            )}
            id={fieldId("requirement")}
            name="requirement"
            onChange={(event) => update("requirement", event.target.value)}
            placeholder="Describe the site, the systems involved and what you are trying to achieve."
            rows={5}
            value={values.requirement}
          />
          {errors.requirement && (
            <p
              className="mt-2 text-xs font-semibold text-red-300"
              id={errorId("requirement")}
            >
              {errors.requirement}
            </p>
          )}
        </div>

        <p className="text-xs leading-6 text-qrf-muted" id={`${formId}-privacy`}>
          {contactForm.privacyNotice} Read our{" "}
          <Link
            className="font-semibold text-qrf-cyan underline decoration-qrf-cyan/40 underline-offset-4 transition-colors hover:text-white"
            to="/privacy"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              aria-describedby={errors.consent ? errorId("consent") : undefined}
              aria-invalid={Boolean(errors.consent)}
              checked={values.consent}
              className="mt-0.5 h-5 w-5 flex-none accent-qrf-bright"
              id={fieldId("consent")}
              name="consent"
              onChange={(event) => update("consent", event.target.checked)}
              type="checkbox"
            />
            <span className="text-sm leading-6 text-qrf-soft">
              {contactForm.consentLabel} <span className="text-qrf-cyan">*</span>
            </span>
          </label>
          {errors.consent && (
            <p
              className="mt-2 text-xs font-semibold text-red-300"
              id={errorId("consent")}
            >
              {errors.consent}
            </p>
          )}
        </div>

        <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0">
          <label htmlFor={fieldId("company-website")}>Leave this field empty</label>
          <input
            autoComplete="off"
            id={fieldId("company-website")}
            name="company-website"
            onChange={(event) => setHoneypot(event.target.value)}
            tabIndex={-1}
            type="text"
            value={honeypot}
          />
        </div>

        <button
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-qrf-sm border border-qrf-bright bg-qrf-blue px-5 py-3 font-body text-sm font-bold text-white shadow-qrf-glow transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-qrf-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qrf-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-qrf-ink disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "Sending..." : "Send Enquiry"}
          <Send
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>
      </div>
    </form>
  );
}
