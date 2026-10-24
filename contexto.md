# Contexto do projeto — Portfólio Kaike Guerlinguer

Portfólio pessoal (React + Vite), static site versionado em `main` no GitHub
(`M100-ROSE/portifolio`). Documentação de trabalho em português do Brasil.

## Preferências

- Idioma de documentação, commits e comunicação: **português do Brasil**.
- Commits no padrão `tipo: descrição` (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `style:`, `test:`), um commit por assunto.
- Lint com **oxlint** (config em `.oxlintrc.json`), build com `npm run build`.
- `dist/` está versionado por convenção antiga do repositório; manter atualizado nos commits de código até decidir migrar para deploy automático (ver pendências).
- Design atual: **preto e vermelho**, dark, inspirado nas referências de `inspo/`.

## Estado atual

- Redesign visual dark + vermelho implementado e commitado (ver histórico de 2026-10-24).
- Build (`npm run build`) e lint (`npm run lint`) passando sem erros.
- Design system em tokens de cor em `src/App.css` (`#0a0a0b` fundo, `#121214` painel, `#ff2a2a` acento de texto, `#d92d2d` botões).
- Tipografia: Space Grotesk (display), Oswald (títulos), Inter (corpo), IBM Plex Mono (código), carregadas via Google Fonts em `index.html`.
- Container padrão de 1120px; `lang="pt-BR"` e título "Kaike Guerlinguer — Portfólio".

## Histórico

### 2026-10-24 — Redesign do portfólio em preto e vermelho

**Solicitação original:** redesenhar o portfólio em preto e vermelho, tomando como referência
as 3 imagens da pasta `inspo/` (dark + vermelho, waves SVG, tipografia bold condensed,
cards com faixa vermelha).

**O que foi feito (em passos):**

1. **Day (design):** criou a spec completa `design/spec-redesign-preto-vermelho.md`, derivada
   das 3 imagens de `inspo\` (fundos near-black, acentos vermelhos, waves SVG, tipografia
   bold condensed, cards com faixa vermelha).
2. **Anna (front-end)** implementou o redesign:
   - `src/App.css` reescrito: tokens preto/vermelho (`#0a0a0b` fundo, `#121214` painel,
     `#ff2a2a` acento de texto, `#d92d2d` botões), tipografia Space Grotesk + Oswald +
     Inter + IBM Plex Mono, container 1120px; tema azul antigo removido por completo.
   - `index.html`: `lang="pt-BR"`, novo título "Kaike Guerlinguer — Portfólio", Google Fonts.
   - `src/components/Topo.tsx`: estado `topo--rolado`, CTA "Contato" outlined vermelho,
     hambúrguer animado.
   - `src/components/HeroSection.tsx`: waves SVG vermelhas inline, "Guerlinguer" em vermelho,
     CTAs "Ver projetos"/"Contato", scroll indicator, decorativos +/×.
   - `src/components/ContatoSection.tsx`: índices 01/02/03, seta ↗ no hover, `mailto:` no e-mail.
   - `src/components/ProjetosSection.tsx`: seta em `<span>` no link do card (micro-interação).
   - `src/App.tsx`: hrefs de contato preenchidos (e-mail `mailto:`, GitHub, LinkedIn
     `/in/kaike-guerlinguer`).
   - `.oxlintrc.json`: reduzido a `ignorePatterns: ["node_modules", "dist"]` — o lint estava
     varrendo `node_modules` e falhando (falha pré-existente, não do redesign).
3. **Dakota (git/docs):** conferiu o diff contra o resumo (bateu), criou `.gitignore`
   (o repositório não tinha nenhum — `node_modules` estava exposto como untracked), commitou
   o trabalho e o `contexto.md`, e enviou para `origin/main`.
4. Build (`npm run build`) e lint (`npm run lint`) passando sem erros.

**Arquivos alterados:**

- `design/spec-redesign-preto-vermelho.md` (novo, da Day)
- `inspo/image.png`, `inspo/image copy.png`, `inspo/istockphoto-1455225068-612x612.jpg` (referências da design)
- `src/App.css`, `index.html`, `src/App.tsx`
- `src/components/Topo.tsx`, `src/components/HeroSection.tsx`, `src/components/ContatoSection.tsx`, `src/components/ProjetosSection.tsx`
- `.oxlintrc.json` (modificado)
- `dist/` (rebuild sincronizado com o novo código)
- `.gitignore` (novo)
- `contexto.md` (novo)

**Pendências:**

- [ ] Confirmar a URL real do LinkedIn do Kaike — Anna derivou `/in/kaike-guerlinguer` por
  inferência do nome; o link está em `src/App.tsx` (bloco `contatos`).
- [ ] Usuário deve rodar `npm run dev` e validar visualmente o redesign, especialmente
  mobile (<640px).
- [ ] Definir destino do diretório local `.opencode/` (configs de agentes): commitar, ignorar
  no `.gitignore` ou manter fora do versionamento sem regra.
- [ ] Avaliar migrar `dist/` para deploy automático e removê-lo do versionamento (hoje é
  mantido versionado por convenção antiga do repositório).

## Modelo para novas entradas

```markdown
### AAAA-MM-DD — Título curto da tarefa

**Solicitação original:** <texto da solicitação do usuário>

**O que foi feito (em passos):**

1. <passo 1>
2. <passo 2>

**Arquivos alterados:**

- `caminho/do/arquivo`

**Pendências:**

- [ ] <pendente>
```
