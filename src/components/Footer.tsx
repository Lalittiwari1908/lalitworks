import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-gradient font-bold">Lalit Tiwari</p>
          <p className="text-xs text-muted-foreground mt-1">© 2026 Lalit Tiwari. Built with care.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:phlalittiwari@gmail.com"
            className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/lalit-tiwari08"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Lalittiwari1908"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
