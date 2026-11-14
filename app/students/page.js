"use client";
import { useState } from "react";
import Link from "next/link";
import { students } from "@/data";
import { Portal,PageHead } from "@/components/Portal";
export default function Students(){
 const [q,setQ]=useState(""),[dept,setDept]=useState("All");
 const filtered=students.filter(s=>(s.name.toLowerCase().includes(q.toLowerCase())||s.roll.toLowerCase().includes(q.toLowerCase()))&&(dept==="All"||s.department===dept));
 return <Portal><PageHead title="Students" subtitle="Explore student directory and academic information."/>
 <div className="toolbar"><input className="field" placeholder="Search by name or roll number..." value={q} onChange={e=>setQ(e.target.value)}/><select className="field" value={dept} onChange={e=>setDept(e.target.value)}><option>All</option><option>Computer Science</option><option>Information Technology</option><option>Electronics</option></select></div>
 <div className="grid cards-3">{filtered.map(s=><div className="card" key={s.id}><div className="profile-head"><div className="big-avatar">{s.name.split(" ").map(x=>x[0]).join("")}</div><div><h3>{s.name}</h3><div className="muted">{s.roll}</div></div></div><hr style={{border:0,borderTop:"1px solid #edf0f5",margin:"18px 0"}}/><p className="muted">{s.department} · {s.year}</p><p style={{fontSize:13}}>{s.email}</p><div className="muted">Attendance <strong>{s.attendance}%</strong></div><div className="bar"><span style={{width:s.attendance+"%"}}/></div><Link className="button secondary" style={{marginTop:18}} href={`/students/${s.id}`}>View Details →</Link></div>)}</div>
 {filtered.length===0&&<div className="card">No students found.</div>}</Portal>;
}
