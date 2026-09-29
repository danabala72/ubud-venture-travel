import tours from '../data/tours.json';
import places from '../data/places.json';

export const dynamic='force-static';
const BASE='https://ubudventuretravel.com';

export default function sitemap(){
  return [
    {url:`${BASE}/`,changeFrequency:'weekly',priority:1},
    {url:`${BASE}/destinations/`,changeFrequency:'weekly',priority:.85},
    {url:`${BASE}/build-your-trip/`,changeFrequency:'monthly',priority:.8},
    ...tours.map(t=>({url:`${BASE}/tours/${t.slug}/`,changeFrequency:'weekly',priority:.9})),
    ...places.map(p=>({url:`${BASE}/destinations/${p.id}/`,changeFrequency:'monthly',priority:p.anchor?.8:.65}))
  ];
}
