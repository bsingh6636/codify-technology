# Codify Technologies

A minimal engineering company landing page inspired by Arc Logi's service-led structure. Built independently with Next.js App Router, TypeScript, and Tailwind CSS 4. All application files are contained in this project.

## Develop

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Verify and build

```sh
npm run typecheck
npm run build
```

The production-ready static site is exported to `out/`. Serve that directory using any static host or `python3 -m http.server 3000 --directory out` for a local production preview.

## Customize

- `src/app/page.tsx`: company content, services, expertise, and footer.
- `src/app/globals.css`: colors, type, layouts, and responsive rules.
- `src/app/layout.tsx`: title, description, and social metadata.
- `src/components/`: reusable navigation, section headings, icons, illustrations, and project brief dialog.

The company brand is Codify Technologies and the intended production domain is `codifyteam.com`. The expertise panels are illustrative, not client case studies. No customer endorsements or performance statistics are fabricated.

The Municipal portals section links to the five existing public frontend hosts defined in `../infra/config/stack.yaml`: Dharche, Siranchowk, Ratnagar, Madhyabindu, and Devghat. It does not expose API hosts. Edit `src/components/municipal-portals.tsx` to update the directory.

Canonical metadata, sitemap, and robots.txt target `https://codifyteam.com/`. The Sites deployment is a private review preview, separate from domain hosting. On inspection, the existing infrastructure defines the municipal subdomains but no apex ingress for this landing page, and the apex does not resolve from this environment. Root-domain production deployment requires an apex DNS record and a dedicated static frontend ingress. Preserve existing municipal routes, API routes, and certificates when adding it.

The accessible project dialog downloads a plain text brief locally. It does not send inquiries or store personal information. Connect a real contact endpoint and update its explanation before using it for lead collection.

The illustrations are original SVG and CSS assets with no external image or font dependencies. Navigation supports keyboard use, the mobile menu closes with Escape, and the native dialog manages focus. Reduced motion preferences are respected.
