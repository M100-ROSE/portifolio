# Contexto do projeto — Portfólio Kaike Guerlinguer

Portfólio pessoal (React + Vite), static site versionado em `main` no GitHub
(`M100-ROSE/portifolio`). Documentação de trabalho em português do Brasil.

## Preferências

- Idioma de documentação, commits e comunicação: **português do Brasil**.
- Commits no padrão `tipo: descrição` (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `style:`, `test:`), um commit por assunto.
- Lint com **oxlint** (config em `.oxlintrc.json`), build com `npm run build`.
- `dist/` está versionado por convenção antiga do repositório; manter atualizado nos commits de código até decidir migrar para deploy automático (ver pendências).
- Design atual: **preto e vermelho**, dark, derivado das referências de `inspo/` — pasta
  **removida do repositório** em 2026-10-24 a pedido do usuário; as referências continuam
  descritas em `design/spec-redesign-preto-vermelho.md` (que ainda cita os paths de
  `inspo/` como contexto histórico).

## Estado atual

- Redesign visual dark + vermelho implementado e commitado (ver histórico de 2026-10-24).
- Build (`npm run build`) e lint (`npm run lint`) passando sem erros.
- Design system em tokens de cor em `src/App.css` (`#0a0a0b` fundo, `#121214` painel, `#ff2a2a` acento de texto, `#d92d2d` botões).
- Tipografia: Space Grotesk (display), Oswald (títulos), Inter (corpo), IBM Plex Mono (código), carregadas via Google Fonts em `index.html`.
- Container padrão de 1120px; `lang="pt-BR"` e título "Kaike Guerlinguer — Portfólio".

## Histórico

### 2026-10-24 — Limpeza de arquivos órfãos (inspo/ e icons.svg)

**Solicitação original:** fechar o ciclo de limpeza no repositório removendo, após
análise do Bebell e aprovação por escrito do usuário, a pasta `inspo/` inteira e o
arquivo `public/icons.svg`; mantendo `dist/` versionado, `.opencode/` untracked e a
spec de design intacta.

**O que foi feito (em passos):**

1. Conferiu o estado real: `inspo/` (3 imagens) e `public/icons.svg` existiam indexados
   no Git; grep confirmou que `icons.svg` não é referenciado em nenhum arquivo do
   projeto (só `favicon.svg` é citado em `index.html`).
2. `git rm -r inspo` — removeu `image.png`, `image copy.png` e
   `istockphoto-1455225068-612x612.jpg` do índice e do diretório.
3. `git rm public/icons.svg` — removeu o ícone órfão do índice e do diretório.
4. `npm run build` executado e aprovado sem erros; o rebuild regenerou `dist/` sem
   `dist/icons.svg` (cópia automática do Vite do arquivo órfão removido — mesmo
   conteúdo, 24 linhas deletadas). Os demais arquivos de `dist/` saíram byte-idênticos
   (mesmos hashes `index-pAJkxGdj.css` e `index-Bf8olgLE.js`). A exclusão foi incluída
   no commit para manter `dist/` fiel ao build.
5. **Dakota (git/docs):** atualizou este `contexto.md`, commitou e enviou para `origin/main`.

**Observação:** `design/spec-redesign-preto-vermelho.md` continua citando os paths de
`inspo/` como referência histórica do redesign. Mantido como está — as imagens não
existem mais no repositório.

**Arquivos alterados:**

- `inspo/` (removida: `image.png`, `image copy.png`, `istockphoto-1455225068-612x612.jpg`)
- `public/icons.svg` (removido — órfão, sem referências)
- `dist/icons.svg` (removido pelo rebuild — consequência da limpeza)
- `contexto.md` (esta entrada + nota na seção Preferências)

**Pendências:**

- [ ] Reescrever, na spec de design, os trechos que citam paths de `inspo/` (opcional,
  a pedido da Dakota para higiene documental; conteúdo é referência histórica e foi
  mantido).

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
