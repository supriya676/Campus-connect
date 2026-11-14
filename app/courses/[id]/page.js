import Link from "next/link";
import { notFound } from "next/navigation";
import { courses,assignments } from "@/data";
import { Portal,PageHead,Status } from "@/components/Portal";
export function generateStaticParams(){return courses.map(c=>({id:c.id}));}
export default async function CourseDetails({params}){const {id}=await params;const c=courses.find(x=>x.id===id);if(!c)notFound();const related=assignments.filter(a=>a.course===c.name);
 return <Portal><PageHead title={c.name} subtitle={`${c.code} · Course details`} action={<Link className="button secondary" href="/courses">← All Courses</Link>}/>
 <div className="card"><span className="pill progress">{c.code}</span><h2 style={{marginTop:15}}>{c.name}</h2><p className="muted">{c.description}</p><div className="info-grid" style={{marginTop:20}}><div><div className="info-label">Faculty</div><div className="info-value">{c.faculty}</div></div><div><div className="info-label">Credits</div><div className="info-value">{c.credits}</div></div><div><div className="info-label">Progress</div><div className="info-value">{c.progress}%</div></div></div><div className="bar"><span style={{width:c.progress+"%"}}/></div></div>
 <div className="card" style={{marginTop:18}}><h2>Course Assignments</h2>{related.length?related.map(a=><div className="list-row" key={a.id}><div><strong>{a.title}</strong><div className="muted">Due: {a.due}</div></div><Status value={a.status}/></div>):<p className="muted">No assignments added for this course yet.</p>}</div>
 </Portal>}
