"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Login() {
 const [email,setEmail]=useState("supriya.singh@campus.edu"), [password,setPassword]=useState("student123");
 const router=useRouter();
 function submit(e){e.preventDefault();router.push("/dashboard");}
 return <main className="login-wrap"><form className="login-card" onSubmit={submit}>
  <div className="brand"><span className="brand-mark">C</span> CampusConnect</div><h1>Welcome back!</h1><p className="muted">Sign in to access your student portal.</p>
  <label className="form-group">Email address<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label>
  <label className="form-group">Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></label>
  <button style={{width:"100%",marginTop:8}}>Sign in</button><p className="muted" style={{marginTop:18}}>Demo credentials are prefilled. This is a frontend-only demo.</p><Link className="muted" href="/">← Back to home</Link>
 </form></main>;
}
