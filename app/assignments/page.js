"use client";
import { useState } from "react";
import { assignments as initial } from "@/data";
import { Portal,PageHead,Status } from "@/components/Portal";
export default function Assignments(){const [items,setItems]=useState(initial);function submit(id){setItems(old=>old.map(a=>a.id===id?{...a,status:"Submitted"}:a));}
 return <Portal><PageHead title="Assignments" subtitle="Track deadlines and manage your submissions."/>
 <div className="card"><div className="table-wrap"><table><thead><tr><th>Assignment title</th><th>Course</th><th>Due date</th><th>Status</th><th>Action</th></tr></thead><tbody>{items.map(a=><tr key={a.id}><td><strong>{a.title}</strong></td><td>{a.course}</td><td>{a.due}</td><td><Status value={a.status}/></td><td><button className={a.status==="Submitted"?"secondary":""} disabled={a.status==="Submitted"} onClick={()=>submit(a.id)}>{a.status==="Submitted"?"Submitted":"Submit"}</button></td></tr>)}</tbody></table></div></div>
 <p className="muted" style={{marginTop:12}}>Demo action: clicking Submit changes the assignment status locally. No file upload or backend is connected.</p>
 </Portal>}
