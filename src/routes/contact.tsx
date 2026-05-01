import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, Send, Github } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_o6yrdlo";
const EMAILJS_TEMPLATE_ID = "template_on7k397";
const EMAILJS_PUBLIC_KEY = "0geVCP2EJV6aglqNJ";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lalit Tiwari" },
      { name: "description", content: "Get in touch with Lalit Tiwari via email, phone, or LinkedIn." },
      { property: "og:title", content: "Contact — Lalit Tiwari" },
      { property: "og:description", content: "Reach out for opportunities and collaborations." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const result = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    setStatus("Sending your message…");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: result.data.name,
          from_email: result.data.email,
          message: result.data.message,
          reply_to: result.data.email,
          to_email: "phlalittiwari@gmail.com",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="animate-fade-in-up">
        <p className="font-mono text-sm text-primary mb-3">// contact</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Let's <span className="text-gradient">talk</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Have an opportunity, question, or just want to say hi? I'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-4">
          <ContactItem icon={<Mail />} label="Email" value="phlalittiwari@gmail.com" href="mailto:phlalittiwari@gmail.com" />
          <ContactItem icon={<Phone />} label="Phone" value="+91 95034 96312" href="tel:+919503496312" />
          <ContactItem icon={<Linkedin />} label="LinkedIn" value="lalit-tiwari08" href="https://www.linkedin.com/in/lalit-tiwari08" />
          <ContactItem icon={<Github />} label="GitHub" value="Lalittiwari1908" href="https://github.com/Lalittiwari1908" />
        </div>

        <form onSubmit={onSubmit} className="md:col-span-3 glass rounded-xl p-6 md:p-8 space-y-4">
          <Field name="name" label="Name" placeholder="Your name" error={errors.name} />
          <Field name="email" label="Email" type="email" placeholder="you@example.com" error={errors.email} />
          <div>
            <label className="block text-sm font-medium mb-2 font-mono text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={5}
              maxLength={1000}
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending…" : "Send Message"} <Send size={16} />
          </button>
          {status && <p className="text-sm text-primary">{status}</p>}
        </form>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/60 hover:-translate-y-0.5 transition-all"
    >
      <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-mono text-muted-foreground">{label}</p>
        <p className="text-sm font-medium truncate">{value}</p>
      </div>
    </a>
  );
}

function Field({ name, label, type = "text", placeholder, error }: { name: string; label: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 font-mono text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
