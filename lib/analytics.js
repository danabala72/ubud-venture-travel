export function trackWhatsAppClick(source='unknown', details={}){
  if(typeof window==='undefined') return;
  const params={
    link_text:'WhatsApp',
    source,
    page_location:window.location.href,
    page_path:window.location.pathname,
    ...details,
  };
  if(typeof window.gtag==='function') window.gtag('event','whatsapp_click',params);
  else if(Array.isArray(window.dataLayer)) window.dataLayer.push({event:'whatsapp_click',...params});
}
