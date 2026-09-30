'use client';
import {useEffect,useState} from 'react';
import styles from './HeroSlider.module.css';
const assetBase=process.env.NEXT_PUBLIC_BASE_PATH||'';
const slides=[
  {name:'UBUD',image:`${assetBase}/images/hero-ubud.jpg`,line:'Green valleys & timeless Ubud.'},
  {name:'SIDEMEN',image:`${assetBase}/images/hero-sidemen.jpg`,line:'Rice country & village life.'},
  {name:'LEMPUYANG',image:`${assetBase}/images/hero-lempuyang.jpg`,line:'Sacred heights of East Bali.'}
];
export default function HeroSlider(){const [active,setActive]=useState(0);useEffect(()=>{const timer=setInterval(()=>setActive(i=>(i+1)%slides.length),4500);return()=>clearInterval(timer)},[]);return <div className={`hero-media landscape ${styles.slider}`}>{slides.map((s,i)=><img key={s.name} className={`${styles.slide} ${i===active?styles.active:''}`} src={s.image} alt={`${s.name}, Bali`} loading={i===0?'eager':'lazy'} fetchPriority={i===0?'high':'auto'} decoding="async" />)}<div className={styles.shade}/><div className={`media-label ${styles.label}`}>UBUD · SIDEMEN · LEMPUYANG</div><div className={`media-card ${styles.card}`}><small>LOCAL JOURNEYS · {slides[active].name}</small><strong>{slides[active].line}</strong><div className={styles.dots}>{slides.map((s,i)=><button key={s.name} className={i===active?styles.activeDot:''} onClick={()=>setActive(i)} aria-label={`Show ${s.name}`}/>)}</div></div></div>}
