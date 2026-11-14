"use client";
import { useState } from "react";
import { Portal,PageHead } from "@/components/Portal";
export default function Settings(){const [email,setEmail]=useState(true),[deadlines,setDeadlines]=useState(true),[theme,setTheme]=useState("Light");
 return <Portal><PageHead title="Settings" subtitle="Manage your portal preferences."/>
 <div className="card"><h2>Notification Preferences</h2><label className="list-row"><span><strong>Email notifications</strong><div className="muted">Receive important academic updates by email.</div></span><input type="checkbox" checked={email} onChange={e=>setEmail(e.target.checked)}/></label><label className="list-row"><span><strong>Assignment deadline reminders</strong><div className="muted">Get reminders before assignment due dates.</div></span><input type="checkbox" checked={deadlines} onChange={e=>setDeadlines(e.target.checked)}/></label></div>
 <div className="card" style={{marginTop:18}}><h2>Appearance</h2><label className="form-group" style={{maxWidth:300}}>Theme<select className="field" value={theme} onChange={e=>setTheme(e.target.value)}><option>Light</option><option>System</option><option>Dark (demo)</option></select></label><p className="muted" style={{marginTop:15}}>Selected theme: {theme}. Theme preference is local to this page demo.</p></div>
 </Portal>}
