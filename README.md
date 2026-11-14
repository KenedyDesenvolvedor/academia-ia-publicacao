# Academia IA — versão de publicação

Plataforma educacional com oito cursos completos em um único `index.html`, com navegação por módulos, atividades, questionários, glossário e progresso local. Inclui PWA instalável e cache offline.

## Cursos incluídos
1. Fundamentos de Inteligência Artificial
2. Sistemas de Aprendizado de Máquina
3. Plataformas de Middleware e Protocolos de Comunicação para IoT
4. Redes Neurais Artificiais
5. Deep Learning
6. Visão Computacional e Reconhecimento de Imagem
7. Processamento de Linguagem Natural e Reconhecimento de Voz
8. IA Generativa para Devs

## Executar localmente
Requer Node.js 20+.

```bash
npm run dev
```
Acesse http://localhost:3000.

## Publicar na Vercel
Importe o repositório GitHub. Configure Framework Preset `Other`, Build Command vazio e Output Directory `public`. O arquivo `vercel.json` já inclui cabeçalhos para PWA e Service Worker.

## Instalar como aplicativo
Depois de publicar em HTTPS, use a opção Instalar aplicativo do navegador (Chrome/Edge/Android) ou Compartilhar → Adicionar à Tela de Início no Safari. O cache usa rede primeiro, então novas versões aparecem logo após o deploy.

## Observações
- O conteúdo pedagógico dos oito cursos está embutido em `public/index.html`.
- O progresso é salvo no navegador e não sincroniza entre dispositivos.
- `server.mjs` é apenas para desenvolvimento local; a Vercel serve os arquivos estáticos de `public`.
