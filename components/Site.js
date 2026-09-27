'use client';
import {useState} from 'react';
import Link from 'next/link';
const BASE='/ubud-venture-travel';
export function Header(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="container nav-wrap"><Link className="brand" href="/"><img src={`${BASE}/images/ubud-venture-logo.png`} alt="Ubud Venture Travel" width="158" height="56"/></Link><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open}>Menu</button><nav className={open?'open':''}><Link href="/#tours">Tours</Link><Link href="/#why">Why us</Link><Link href="/#about">About</Link><a className="nav-button" href="https://wa.me/6282236706702?text=Hi%20Ubud%20Venture%20Travel%2C%20I%27d%20like%20to%20plan%20a%20private%20Bali%20tour." rel="nofollow">Plan a tour</a></nav></div></header>}
export function Footer(){return <footer><div className="container footer-grid"><div><img src={`${BASE}/images/ubud-venture-logo.png`} alt="Ubud Venture Travel" width="150" height="54"/><p>Private Bali tours & authentic local experiences.</p></div><nav><Link href="/#tours">Tours</Link><Link href="/#why">Why us</Link><Link href="/#about">About</Link></nav></div><div className="container copyright">© 2026 Ubud Venture Travel · Bali, Indonesia</div></footer>}
export function WhatsApp(){return <a className="wa-float" href="https://wa.me/6282236706702" rel="nofollow">WhatsApp</a>}
