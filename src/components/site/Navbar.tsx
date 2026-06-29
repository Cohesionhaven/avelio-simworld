import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "../ui/button";

const navItems = [
  { label: "Trailer", href: "#trailer" },
  { label: "Vision", href: "#vision" },
  { label: "Technology", href: "#technology" },
  { label: "Devices", href: "#devices" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Waitlist", href: "#waitlist" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="site-container flex items-center justify-between py-3">
        <a
          href="#hero"
          className="flex min-w-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
            AS
          </span>
          <span className="truncate">Avelio Simworld</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="glass" size="sm" asChild>
            <a href="#waitlist">Join waitlist</a>
          </Button>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isOpen && (
        <nav
          aria-label="Mobile primary"
          className="border-t border-border/70 bg-background/95 px-4 py-3 shadow-elegant lg:hidden"
        >
          <div className="site-container grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-2" asChild>
              <a href="#waitlist" onClick={() => setIsOpen(false)}>
                Join waitlist
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
