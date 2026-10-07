import { Arrow } from "./ui";

// Public frontend hosts verified against infra/config/stack.yaml.
// API hosts are intentionally omitted from visitor navigation.
const portals = [
  { name: "Dharche", host: "dharche.codifyteam.com" },
  { name: "Siranchowk", host: "siranchowk.codifyteam.com" },
  { name: "Ratnagar", host: "ratnagar.codifyteam.com" },
  { name: "Madhyabindu", host: "madhyabindumun.codifyteam.com" },
  { name: "Devghat", host: "devghat.codifyteam.com" },
];

export function MunicipalPortals() {
  return <section className="portal-section" id="portals" aria-labelledby="portals-title"><div className="container portal-layout"><div><p className="eyebrow">CONNECTED PLATFORMS</p><h2 id="portals-title">Municipal portals</h2><p className="portal-description">Already using one of our platforms?<br />Go directly to your municipality’s portal.</p></div><ul className="portal-list">{portals.map(portal => <li key={portal.host}><a href={`https://${portal.host}/`}><span><strong>{portal.name}</strong><span className="portal-host">{portal.host}</span></span><Arrow diagonal /></a></li>)}</ul></div></section>;
}
