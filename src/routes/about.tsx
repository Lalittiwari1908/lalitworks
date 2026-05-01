import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Target, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lalit Tiwari" },
      { name: "description", content: "Learn about Lalit Tiwari — education at C V Raman University, Masters at NIT Raipur, and a developer's growth journey." },
      { property: "og:title", content: "About — Lalit Tiwari" },
      { property: "og:description", content: "A motivated developer with strong programming skills and a passion for practical solutions." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="animate-fade-in-up">
        <p className="font-mono text-sm text-primary mb-3">// about me</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Building skills, <span className="text-gradient">shipping ideas</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          I'm a motivated developer with good programming skills and a strong interest in building practical and efficient solutions. As a fresher, I'm focused on writing clean code, deepening my fundamentals, and turning ideas into working products.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        <Card icon={<GraduationCap />} title="Graduation" subtitle="C V Raman University, Bilaspur" body="Foundation in computer science fundamentals and programming." />
        <Card icon={<TrendingUp />} title="Masters" subtitle="NIT Raipur (ongoing)" body="Currently advancing my expertise and exploring deeper concepts." />
        <Card icon={<Target />} title="Mindset" subtitle="Learn. Build. Repeat." body="Consistent growth, hands-on practice, and a curiosity for new tech." />
      </div>
    </section>
  );
}

function Card({ icon, title, subtitle, body }: { icon: React.ReactNode; title: string; subtitle: string; body: string }) {
  return (
    <div className="glass rounded-xl p-6 hover:border-primary/60 transition-all hover:-translate-y-1">
      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-primary font-mono mt-1">{subtitle}</p>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{body}</p>
    </div>
  );
}
