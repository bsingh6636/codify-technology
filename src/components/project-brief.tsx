"use client";

import { useRef, useState } from "react";
import { Arrow } from "./ui";

export function ProjectBrief() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [downloaded, setDownloaded] = useState(false);
  function download(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const content = `CODIFY TECHNOLOGIES — PROJECT BRIEF\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nInterested in: ${data.get("service")}\n\nWhat we are building:\n${data.get("project")}\n`;
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = "codify-project-brief.txt"; link.click();
    URL.revokeObjectURL(url); setDownloaded(true);
  }
  return <><button className="button button-light" onClick={() => { setDownloaded(false); dialog.current?.showModal(); }}>Start a conversation <Arrow diagonal /></button><dialog ref={dialog} className="brief-dialog" aria-labelledby="brief-title" onClick={event => { if (event.target === dialog.current) dialog.current?.close(); }}><button className="dialog-close" aria-label="Close project brief" onClick={() => dialog.current?.close()}>×</button><p className="eyebrow">A GOOD PLACE TO START</p><h2 id="brief-title">Tell us what’s next.</h2><p className="dialog-description">Put your ideas into a short project brief. Download it to share with your team or your engineering partner.</p><form onSubmit={download}><div className="form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label><label>Work email<input name="email" type="email" autoComplete="email" required maxLength={200} /></label></div><label>What do you need?<select name="service"><option>Dedicated engineering team</option><option>Custom software development</option><option>Product development & delivery</option><option>Cloud & DevOps engineering</option><option>Technology consulting</option><option>Help figuring it out</option></select></label><label>A little about your project<textarea name="project" rows={4} required maxLength={5000} placeholder="The problem, your goals, and where you are today…" /></label><button className="button button-dark" type="submit">Download project brief <Arrow /></button><p className="form-note" role="status">{downloaded ? "Your brief is ready. It was downloaded to your device; nothing has been sent." : "Your details stay in your browser. This form creates a draft; it doesn’t send an inquiry."}</p></form></dialog></>;
}
