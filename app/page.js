import Link from "next/link";
export default function Home() {
  return <main className="login-wrap"><div className="content" style={{width:"100%",maxWidth:1120}}>
    <div className="brand"><span className="brand-mark">C</span> CampusConnect</div>
    <section className="hero">
      <div><span className="pill">STUDENT MANAGEMENT PORTAL</span><h1>One campus.<br/>Everything connected.</h1><p>Manage your courses, assignments, attendance and academic progress from one simple student dashboard.</p><Link className="button" href="/login">Get Started →</Link> <Link className="button secondary" href="/dashboard">Explore Dashboard</Link></div>
      <div className="hero-panel"><h2>Your academic snapshot</h2><div className="hero-stat"><span>Active courses</span><strong>06</strong></div><div className="hero-stat"><span>Assignments due</span><strong>04</strong></div><div className="hero-stat"><span>Attendance</span><strong>87%</strong></div><div className="hero-stat"><span>Learning progress</span><strong>On track</strong></div></div>
    </section>
  </div></main>;
}
