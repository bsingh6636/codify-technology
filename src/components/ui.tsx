import type { ReactNode } from "react";

export function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Logo({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? "brand-light" : ""}`} href="#top" aria-label="Fieldwork home"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true"><path d="M4 25V4h21M4 14h16M14 25V4" stroke="currentColor" strokeWidth="3.5" /></svg><span>fieldwork<span className="brand-period">.</span></span></a>;
}

export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><p className="eyebrow"><span>{number}</span> / {label}</p><div className="heading-row"><h2>{title}</h2>{children && <p className="section-description">{children}</p>}</div></div>;
}
