import { createFileRoute } from "@tanstack/react-router";
import { Braces, Layout, Database } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Lalit Tiwari" },
      { name: "description", content: "Technical skills: Python, C, HTML, CSS, Data Structures, and Web Development." },
      { property: "og:title", content: "Skills — Lalit Tiwari" },
      { property: "og:description", content: "Languages, frontend, and core CS concepts." },
    ],
  }),
  component: Skills,
});

const groups = [
  { icon: <Braces />, title: "Languages", items: ["Python", "C"] },
  { icon: <Layout />, title: "Frontend", items: ["HTML", "CSS", "Web Development"] },
  { icon: <Database />, title: "Core Concepts", items: ["Data Structures", "Algorithms"] },
];

const proficiency = [
  { name: "Python", level: 80 },
  { name: "C", level: 75 },
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "Data Structures", level: 70 },
];

function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="animate-fade-in-up">
        <p className="font-mono text-sm text-primary mb-3">// skills</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          The <span className="text-gradient">toolkit</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          A focused stack I'm actively building on — sharpening every day.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="glass rounded-xl p-6 hover:border-primary/60 transition-all">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4">
              {g.icon}
            </div>
            <h3 className="font-semibold text-lg">{g.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-foreground">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Proficiency</h2>
        <div className="space-y-4">
          {proficiency.map((p) => (
            <div key={p.name}>
              <div className="flex justify-between text-sm mb-2 font-mono">
                <span>{p.name}</span>
                <span className="text-primary">{p.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                  style={{ width: `${p.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
