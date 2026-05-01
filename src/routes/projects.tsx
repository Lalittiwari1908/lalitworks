import { createFileRoute } from "@tanstack/react-router";
import { Github, ExternalLink, Briefcase } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Lalit Tiwari" },
      { name: "description", content: "Selected projects: YouTube Video Downloader, Amazon Webpage Clone, and Gym Website." },
      { property: "og:title", content: "Projects — Lalit Tiwari" },
      { property: "og:description", content: "A showcase of practical projects built while learning and growing." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "YouTube Video Downloader",
    description: "A tool to download YouTube videos efficiently. Focused on backend logic and reliable file handling.",
    tech: ["Python", "Backend"],
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Amazon Webpage Clone",
    description: "A pixel-attentive frontend replica of the Amazon homepage. Practiced layout, spacing, and responsive design.",
    tech: ["HTML", "CSS", "UI/UX"],
    accent: "from-orange-400 to-pink-500",
  },
  {
    title: "Gym Website",
    description: "A responsive marketing site for a gym with clean styling, structured sections, and mobile-first layout.",
    tech: ["HTML", "CSS", "Responsive"],
    accent: "from-violet-400 to-purple-600",
  },
];

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="animate-fade-in-up">
        <p className="font-mono text-sm text-primary mb-3">// projects</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Things I've <span className="text-gradient">built</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Practical projects that strengthened my fundamentals and shipped real outcomes.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group glass rounded-xl overflow-hidden hover:border-primary/60 transition-all hover:-translate-y-2 hover:shadow-elegant flex flex-col"
          >
            <div className={`h-40 bg-gradient-to-br ${p.accent} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_60%)]" />
              <div className="absolute bottom-3 left-4 font-mono text-xs text-white/90">
                ./{p.title.toLowerCase().replace(/\s+/g, "-")}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-semibold text-xl">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-secondary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3 text-sm">
                <a href="#" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <Github size={16} /> Code
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 glass rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
          <Briefcase />
        </div>
        <div>
          <p className="font-mono text-sm text-primary">// career objective</p>
          <h2 className="text-2xl md:text-3xl font-bold mt-1">Fresher with momentum</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">
            Actively building projects, sharpening development skills, and seeking opportunities to contribute to real-world products. Focused on learning, consistency, and steady growth as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
