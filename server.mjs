import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=join(fileURLToPath(new URL('.',import.meta.url)),'public');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.webmanifest':'application/manifest+json','.svg':'image/svg+xml','.pdf':'application/pdf'};
const server=createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const safe=normalize(pathname).replace(/^([.][.]([/\\]|$))+/, '').replace(/^[/\\]+/,'');let file=join(root,safe||'index.html');try{if((await stat(file)).isDirectory())file=join(file,'index.html')}catch{}const data=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(data)}catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Página não encontrada')}});
const port=Number(process.env.PORT||3000);server.listen(port,'0.0.0.0',()=>console.log(`Academia IA em http://localhost:${port}`));
