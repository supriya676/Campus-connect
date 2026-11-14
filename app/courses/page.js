import Link from "next/link";
import { courses } from "@/data";
import { Portal,PageHead } from "@/components/Portal";
export default function Courses(){return <Portal><PageHead title="My Courses" subtitle="Browse courses, faculty and learning progress."/>
 <div className="grid cards-3">{courses.map((c,i)=><div className="card" key={c.id}><div className="course-icon">{["⌘","▤","⌁","◫"][i]}</div><span className="pill progress">{c.code}</span><h3 style={{marginTop:13}}>{c.name}</h3><p className="muted">Faculty: {c.faculty}</p><p className="muted">Credits: {c.credits}</p><div className="bar"><span style={{width:c.progress+"%"}}/></div><div className="muted" style={{margin:"8px 0 17px"}}>{c.progress}% course progress</div><Link className="button secondary" href={`/courses/${c.id}`}>View Course →</Link></div>)}</div>
 </Portal>}
