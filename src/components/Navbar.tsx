import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-lg font-bold">
          <span className="text-gradient">&lt;LT/&gt;</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-4 py-2 text-sm text-foreground rounded-md bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setLight(!light)}
            className="ml-2 p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border px-6 py-4 flex flex-col gap-2 animate-fade-in-up">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
              activeProps={{ className: "px-4 py-2 text-sm text-foreground bg-secondary rounded-md" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setLight(!light)}
            className="px-4 py-2 text-sm text-left text-muted-foreground hover:text-foreground flex items-center gap-2"
          >
            {light ? <Moon size={16} /> : <Sun size={16} />}
            {light ? "Dark mode" : "Light mode"}
          </button>
        </div>
      )}
    </header>
  );
}
