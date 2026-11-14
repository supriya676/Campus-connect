import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data";
import { Portal,PageHead,Status } from "@/components/Portal";
export function generateStaticParams(){return students.map(s=>({id:s.id}));}
export default async function StudentDetails({params}){
 const {id}=await params; const s=students.find(x=>x.id===id); if(!s) notFound();
 return <Portal><PageHead title="Student Details" subtitle="Student profile and academic overview." action={<Link className="button secondary" href="/students">← All Students</Link>}/>
 <div className="card"><div className="profile-head"><div className="big-avatar">{s.name.split(" ").map(x=>x[0]).join("")}</div><div><h2 style={{marginBottom:5}}>{s.name}</h2><div className="muted">{s.department} · {s.year}</div></div></div><hr style={{border:0,borderTop:"1px solid #edf0f5",margin:"22px 0"}}/><div className="info-grid">{[["Roll Number",s.roll],["Email",s.email],["Department",s.department],["Academic Year",s.year],["Attendance",s.attendance+"%"]].map(([a,b])=><div key={a}><div className="info-label">{a}</div><div className="info-value">{b}</div></div>)}</div></div>
 <div className="grid two-col" style={{marginTop:18}}><div className="card"><h2>Skills</h2>{s.skills.map(x=><span className="pill progress" style={{margin:"0 7px 8px 0"}} key={x}>{x}</span>)}</div><div className="card"><h2>Enrolled Courses</h2>{s.courses.map(x=><div className="list-row" key={x}><strong>{x}</strong><Status value="Active"/></div>)}</div></div>
 <div className="card" style={{marginTop:18}}><h2>Assignment Status</h2><div className="list-row"><span>Submitted assignments</span><Status value="Submitted"/></div><div className="list-row"><span>Pending assignments</span><Status value="Pending"/></div></div>
 </Portal>;
}
