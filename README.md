# Academia IA — versão de publicação

Plataforma educacional com cinco cursos completos em um único `index.html`, com navegação por módulos, atividades, questionários, glossário e progresso local. Inclui PWA instalável e cache offline.

## Cursos incluídos
1. Fundamentos de Inteligência Artificial
2. Sistemas de Aprendizado de Máquina
3. Plataformas de Middleware e Protocolos de Comunicação para IoT
4. Redes Neurais Artificiais
5. Deep Learning

## Executar localmente
Requer Node.js 20+.

```bash
npm run dev
```
Acesse http://localhost:3000.

## Publicar na Vercel
Importe o repositório GitHub. Configure Framework Preset `Other`, Build Command vazio e Output Directory `public`. O arquivo `vercel.json` já inclui cabeçalhos para PWA e Service Worker.

## Instalar como aplicativo
Depois de publicar em HTTPS, use a opção Instalar aplicativo do navegador (Chrome/Edge/Android) ou Compartilhar → Adicionar à Tela de Início no Safari. O cache offline inclui a interface e os PDFs 07393 e 07394.

## Observações
- O conteúdo pedagógico dos cinco cursos está embutido em `public/index.html`.
- O progresso é salvo no navegador e não sincroniza entre dispositivos.
- `server.mjs` é apenas para desenvolvimento local; a Vercel serve os arquivos estáticos de `public`.
