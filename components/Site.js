'use client';
import {useState} from 'react';
import Link from 'next/link';
const BASE='/ubud-venture-travel';
export function Header(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="container nav-wrap"><Link className="brand" href="/"><img src={`${BASE}/images/ubud-venture-logo.png`} alt="Ubud Venture Travel" width="158" height="56"/></Link><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open}>Menu</button><nav className={open?'open':''}><Link href="/#tours">Tours</Link><Link href="/build-your-trip/">Build your trip</Link><Link href="/#why">Why us</Link><Link href="/#about">About</Link><Link className="nav-button" href="/build-your-trip/">Plan a tour</Link></nav></div></header>}
export function Footer(){return <footer><div className="container footer-grid"><div><strong className="footer-name">Ubud Venture Travel</strong><p>Private Bali tours & authentic local experiences.</p></div><nav><Link href="/#tours">Tours</Link><Link href="/build-your-trip/">Build your trip</Link><Link href="/#why">Why us</Link><Link href="/#about">About</Link></nav></div><div className="container copyright">© 2026 Ubud Venture Travel · Bali, Indonesia</div></footer>}
export function WhatsApp(){return <a className="wa-float" href="https://wa.me/6282236706702" rel="nofollow">WhatsApp</a>}
