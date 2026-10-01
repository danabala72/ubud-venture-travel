'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {trackWhatsAppClick} from '../lib/analytics';
const WA_NUMBER='6282236706702';
const WA_MESSAGE=`Hi, I found Ubud Venture Travel through your website.

I'm interested in a private Bali tour and would like some help planning my trip.

Date:
Number of guests:
Pickup area:
Places / itinerary I'm interested in:

Could you please confirm availability and the estimated price? Thank you.`;
const menuIconStyle={width:32,height:32,display:'block',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round'};
const menuButtonStyle={width:48,height:48,padding:0,alignItems:'center',justifyContent:'center',border:'0',borderRadius:0,background:'transparent',boxShadow:'none',color:'#18231f',appearance:'none',WebkitAppearance:'none'};
export function Header(){const [open,setOpen]=useState(false);useEffect(()=>{const handler=e=>{const link=e.target.closest?.('a[href*="wa.me"]');if(!link)return;const path=window.location.pathname;const source=link.classList.contains('wa-float')?'floating_button':path.startsWith('/build-your-trip')?'itinerary_builder':path.startsWith('/tours/')?'tour_booking':'whatsapp_link';trackWhatsAppClick(source,{link_url:link.href,link_text:(link.innerText||link.getAttribute('aria-label')||'WhatsApp').trim()})};document.addEventListener('click',handler);return()=>document.removeEventListener('click',handler)},[]);return <header className="site-header"><div className="container nav-wrap"><Link className="brand" href="/"><img src="/images/ubud-venture-logo.png" alt="Ubud Venture Travel" width="158" height="56"/></Link><button className={`menu${open?' open':''}`} style={menuButtonStyle} onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?'Close menu':'Open menu'}>{open?<svg viewBox="0 0 24 24" style={menuIconStyle} aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>:<svg viewBox="0 0 24 24" style={menuIconStyle} aria-hidden="true"><path d="M3 6.5h18M3 12h18M3 17.5h18"/></svg>}</button><nav className={open?'open':''}><Link href="/#tours" onClick={()=>setOpen(false)}>Tours</Link><Link href="/build-your-trip/" onClick={()=>setOpen(false)}>Build your trip</Link><Link href="/#why" onClick={()=>setOpen(false)}>Why us</Link><Link href="/#about" onClick={()=>setOpen(false)}>About</Link><Link className="nav-button" href="/build-your-trip/" onClick={()=>setOpen(false)}>Plan a tour</Link></nav></div></header>}
export function Footer(){return <footer><div className="container footer-grid"><div><strong className="footer-name">Ubud Venture Travel</strong><p>Private Bali tours & authentic local experiences.</p></div><nav><Link href="/#tours">Tours</Link><Link href="/build-your-trip/">Build your trip</Link><Link href="/#why">Why us</Link><Link href="/#about">About</Link></nav></div><div className="container copyright">© 2026 Ubud Venture Travel · Bali, Indonesia</div></footer>}
export function WhatsApp(){const wa=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;return <a className="wa-float" href={wa} rel="nofollow" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.45 14.88L2.05 22l5.25-1.5A9.96 9.96 0 1 0 12.04 2Zm0 17.98a8.02 8.02 0 0 1-4.09-1.12l-.29-.17-3.12.89.91-3.04-.19-.31a7.97 7.97 0 1 1 6.78 3.75Zm4.38-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.2-1.42-1.34-1.66-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/></svg></a>}
