import type { ReactNode } from "react";

export function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Logo({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? "brand-light" : ""}`} href="#top" aria-label="Codify Technologies home"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true"><path d="m10 6-7 8.5 7 8.5m9-17 7 8.5-7 8.5m-3-19-3 21" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="brand-wordmark">codify<span className="brand-descriptor">TECHNOLOGIES</span></span></a>;
}

export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><p className="eyebrow"><span>{number}</span> / {label}</p><div className="heading-row"><h2>{title}</h2>{children && <p className="section-description">{children}</p>}</div></div>;
}
