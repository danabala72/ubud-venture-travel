'use client';
import {useEffect,useState} from 'react';
const slides=[
  {name:'UBUD',image:'/images/hero-ubud.jpg',line:'Green valleys & timeless Ubud.'},
  {name:'SIDEMEN',image:'/images/hero-sidemen.jpg',line:'Rice country & village life.'},
  {name:'AMED',image:'/images/hero-amed.jpg',line:'East Bali, mountains to sea.'}
];
export default function HeroSlider(){const [active,setActive]=useState(0);useEffect(()=>{const timer=setInterval(()=>setActive(i=>(i+1)%slides.length),4500);return()=>clearInterval(timer)},[]);return <div className="hero-media landscape hero-slider">{slides.map((s,i)=><img key={s.name} className={`hero-slide ${i===active?'active':''}`} src={s.image} alt={`${s.name}, Bali`} />)}<div className="hero-shade"/><div className="media-label">UBUD · SIDEMEN · AMED</div><div className="media-card"><small>LOCAL JOURNEYS · {slides[active].name}</small><strong>{slides[active].line}</strong><div className="hero-dots">{slides.map((s,i)=><button key={s.name} className={i===active?'active':''} onClick={()=>setActive(i)} aria-label={`Show ${s.name}`}/>)}</div></div></div>}
