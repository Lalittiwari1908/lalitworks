import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Code2, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lalit Tiwari — Developer Portfolio" },
      { name: "description", content: "Motivated developer building practical and efficient solutions. View projects, skills, and get in touch." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-primary mb-6">
            <Sparkles size={12} /> Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Lalit Tiwari</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            Motivated developer building practical and efficient solutions. Passionate about clean code, strong fundamentals, and constant learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-95 transition-all"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:border-primary transition-colors font-medium"
            >
              <Mail size={18} /> Contact Me
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-2"><Code2 size={14} className="text-primary"/> Python · C</span>
            <span className="flex items-center gap-2"><Code2 size={14} className="text-primary"/> HTML · CSS</span>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-40" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/40 shadow-elegant">
              <img
                src={profileImg}
                alt="Lalit Tiwari"
                width={768}
                height={768}
                className="w-full h-full object-cover scale-125 object-top"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 glass px-4 py-2 rounded-lg font-mono text-xs">
              <span className="text-primary">$</span> developer --motivated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
