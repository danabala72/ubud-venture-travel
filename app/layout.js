import './globals.css';
import Script from 'next/script';

const BASE='https://ubudventuretravel.com';
const OG_IMAGE='/images/hero-ubud.jpg';
const GA_ID='G-YGWMXWS898';

export const metadata={metadataBase:new URL(BASE),title:{default:'Private Bali Tours from Ubud | Ubud Venture Travel',template:'%s | Ubud Venture Travel'},description:'Private Bali tours from Ubud with local driver-guides. Explore Ubud, East Bali, North Bali and South Bali, or build a flexible private itinerary.',applicationName:'Ubud Venture Travel',alternates:{canonical:'/'},robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},openGraph:{type:'website',locale:'en_US',url:BASE,siteName:'Ubud Venture Travel',title:'Private Bali Tours from Ubud | Ubud Venture Travel',description:'Private Bali tours with local driver-guides, flexible itineraries and direct booking.',images:[{url:OG_IMAGE,width:1200,height:630,alt:'Private Bali tours with Ubud Venture Travel'}]},twitter:{card:'summary_large_image',title:'Private Bali Tours from Ubud | Ubud Venture Travel',description:'Private Bali tours with local driver-guides and flexible itineraries.',images:[OG_IMAGE]},icons:{icon:'/images/favicon.svg'}};
const schema={"@context":"https://schema.org","@type":"TravelAgency","@id":`${BASE}/#organization`,name:'Ubud Venture Travel',url:BASE,description:'Ubud-based private tour service creating flexible private journeys across Bali.',areaServed:{"@type":"AdministrativeArea",name:'Bali, Indonesia'},address:{"@type":"PostalAddress",addressLocality:'Ubud',addressRegion:'Bali',addressCountry:'ID'}};

export default function RootLayout({children}){
  return <html lang="en"><body>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `}</Script>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    {children}
  </body></html>
}
