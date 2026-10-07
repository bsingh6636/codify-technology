"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow, Logo } from "./ui";

const links = [{ href: "#services", text: "What we do" }, { href: "#approach", text: "Our approach" }, { href: "#portals", text: "Portals" }];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return <header className="site-header"><div className="container header-inner"><Logo /><nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href}>{link.text}</a>)}</nav><a className="header-cta" href="#contact">Let’s build something <Arrow diagonal /></a><button ref={toggle} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span /><span className={open ? "menu-open" : ""} /></button></div><nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.text}</a>)}<a href="#contact" onClick={() => setOpen(false)}>Let’s build something <Arrow diagonal /></a></nav></header>;
}
