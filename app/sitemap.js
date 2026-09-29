import tours from '../data/tours.json';
import places from '../data/places.json';

const BASE='https://ubudventuretravel.com';

export default function sitemap(){
  const now=new Date();
  return [
    {url:`${BASE}/`,lastModified:now,changeFrequency:'weekly',priority:1},
    {url:`${BASE}/build-your-trip/`,lastModified:now,changeFrequency:'monthly',priority:.8},
    ...tours.map(t=>({url:`${BASE}/tours/${t.slug}/`,lastModified:now,changeFrequency:'weekly',priority:.9})),
    ...places.map(p=>({url:`${BASE}/destinations/${p.id}/`,lastModified:now,changeFrequency:'monthly',priority:p.anchor?.8:.65}))
  ];
}
