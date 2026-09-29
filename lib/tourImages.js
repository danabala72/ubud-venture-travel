import fs from 'fs';
import path from 'path';

const imageExt=/\.(jpe?g|png|webp|avif)$/i;
const basePath=process.env.NEXT_PUBLIC_BASE_PATH||process.env.__NEXT_ROUTER_BASEPATH||'';

export function getTourImages(slug){
  const dir=path.join(process.cwd(),'public','images','tours',slug);
  if(!fs.existsSync(dir))return {thumbnail:null,gallery:[]};
  const files=fs.readdirSync(dir).filter(name=>imageExt.test(name)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true,sensitivity:'base'}));
  const thumbnail=files.find(name=>/^thumbnail\.(jpe?g|png|webp|avif)$/i.test(name));
  const gallery=files.filter(name=>!/^thumbnail\.(jpe?g|png|webp|avif)$/i.test(name)).map(name=>({src:`${basePath}/images/tours/${slug}/${name}`,alt:fileAlt(name,slug)}));
  return {thumbnail:thumbnail?`${basePath}/images/tours/${slug}/${thumbnail}`:null,gallery};
}

function fileAlt(filename,slug){
  const clean=filename.replace(/\.[^.]+$/,'').replace(/^\d+[\s_-]*/,'').replace(/[-_]+/g,' ').trim();
  const fallback=slug.replace(/-/g,' ');
  const text=clean||fallback;
  return text.replace(/\b\w/g,c=>c.toUpperCase());
}
