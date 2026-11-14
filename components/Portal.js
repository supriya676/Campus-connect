"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["⌂","Dashboard","/dashboard"], ["♙","Students","/students"],
  ["▣","Courses","/courses"], ["✓","Assignments","/assignments"],
  ["◉","Profile","/profile"], ["⚙","Settings","/settings"]
];
export function Portal({ children }) {
  const path = usePathname();
  return <div className="shell">
    <aside className="sidebar">
      <Link href="/dashboard" className="brand"><span className="brand-mark">C</span> CampusConnect</Link>
      <div className="nav-label">MAIN MENU</div>
      <nav>{links.map(([icon,label,href]) => <Link key={href} href={href} className={`nav-link ${path===href || (href!=="/dashboard" && path.startsWith(href+"/")) ? "active":""}`}><span>{icon}</span>{label}</Link>)}</nav>
      <div className="nav-label">ACCOUNT</div>
      <Link className="nav-link" href="/"><span>↪</span>Logout</Link>
    </aside>
    <main className="main">
      <header className="topbar"><div><strong>Student Portal</strong><br/><small>Friday, 6 November 2026</small></div><div className="top-user"><span className="avatar">SS</span><span>Supriya Singh<br/><small>Student</small></span></div></header>
      <section className="content">{children}<div className="footer-note">© 2026 CampusConnect · Student Management Portal</div></section>
    </main>
  </div>;
}
export function PageHead({title,subtitle,action}) {
  return <div className="page-head"><div><h1>{title}</h1><div className="muted">{subtitle}</div></div>{action}</div>;
}
export function Stat({label,value,icon,note}) {
  return <div className="card"><div className="stat-top"><span>{label}</span><span className="stat-icon">{icon}</span></div><div className="stat-number">{value}</div><div className="muted">{note}</div></div>;
}
export function Status({value}) {
  const cls=value==="Pending"?"pending":value==="In Progress"?"progress":"";
  return <span className={`pill ${cls}`}>{value}</span>;
}
