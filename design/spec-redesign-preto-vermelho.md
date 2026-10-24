# SPEC DE DESIGN — Redesign "Preto & Vermelho" (Kaike Guerlinguer)

> **Para:** Anna (front-end) · **De:** Day (design) · **Data:** out/2026
> **Regras invioláveis:** não alterar os dados/textos existentes (nome, techs, 3 projetos, contatos), não adicionar libs/frameworks, sem imagens externas pesadas, sem animação em loop constante. CSS puro em `src/App.css`.

---

## 1. Leitura das referências (o que foi medido/identificado)

**Ref 1 — Membership Jiu-Jitsu (`image copy.png`)**
- Fundo preto puro (#000–#0b0b0b), painéis pretos quase da mesma cor que o fundo, separados só por **borda 1px cinza-escuro** (~#262626).
- Vermelho saturado (#e01414–#ff2020 aprox.) como ÚNICO acento: barras/faixas vermelhas sólidas no topo dos cards, badges, botões retangulares vermelhos com texto branco/small-caps.
- Tipografia: display **bold condensed em MAIÚSCULAS com tracking largo**, rótulos mínimo 10–11px uppercase.
- Layout: grids de cards centralizados, seções separadas por títulos uppercase gigantes.

**Ref 2 — Waves (`image.png`)**
- Fundo #1c1b1a aprox. (quente, não puro-preto).
- **Waves: ~12 linhas vermelhas finas (1px) que se cruzam** formando um "nó" à direita do hero; opacidade variando (as linhas de dentro mais brilhantes, ~0.5, as de fora ~0.2).
- Título branco EXTRA-bold (~90px), subtítulo bold menor, parágrafo muted pequeno.
- Botão vermelho sólido retangular (raio ~6px), padding ~16×40px.
- Nav: logo com marcador redondo vermelho + 4 links + botão **outlined vermelho** ("Sign Up", raio pequeno ~6px).
- **Scroll indicator**: círculo vermelho sólido (~36px) com chevron branco, centrado na base do hero.

**Ref 3 — Fluid (`istockphoto-…jpg`)**
- Blobs vermelhos em blur sobre preto, nav com separadores verticais, título com 1 palavra em vermelho + palavra em serif itálico, botão outlined branco.
- Decorativos: símbolos `+` e `×` pequenos espalhados em baixa opacidade.

**Síntese da direção:** estrutura/hero do Ref 2 + cards/badges/botões do Ref 1 + micro-decorativos do Ref 3. Hero usa **waves SVG inline** (decisão justificada abaixo, seção 3).

---

## 2. Tokens CSS — bloco `:root` pronto para colar (substituir o atual)

```css
:root {
  /* ---- Cores ---- */
  --cor-fundo:        #0a0a0b;   /* fundo da página (near-black) */
  --cor-painel:       #121214;   /* superfície de cards/nav mobile */
  --cor-painel-2:     #17171a;   /* hover de card / superfície elevada */
  --cor-vermelho:     #ff2a2a;   /* acento/texto vermelho (AA sobre preto: 5.3:1) */
  --cor-vermelho-forte: #d92d2d; /* sólido de botão/badge (branco sobre ele: 4.8:1 AA) */
  --cor-vermelho-claro: #ff5a4d; /* hover de texto vermelho */
  --cor-vermelho-escuro: #7a1416; /* bordas/glow suaves */
  --cor-vermelho-borda: rgba(255, 42, 42, 0.4);
  --cor-vermelho-glow:  rgba(255, 42, 42, 0.12);
  --cor-texto:        #f2f0ee;   /* branco levemente quente */
  --cor-texto-suave:  #b8b3b0;   /* texto secundário */
  --cor-texto-muted:  #8a8583;   /* lede/rótulos apagados */
  --cor-borda:        #262424;   /* borda sutil padrão (Ref 1) */
  --cor-borda-forte:  #3a3735;

  /* ---- Tipografia (famílias já usadas no projeto; Oswald é nova) ---- */
  --fonte-display: "Space Grotesk", "Segoe UI", sans-serif; /* título gigante do hero */
  --fonte-titulo:  "Oswald", "Arial Narrow", sans-serif;    /* MAIÚSCULAS condensed (Ref 1) */
  --fonte-corpo:   "Inter", "Segoe UI", sans-serif;
  --fonte-dados:   "IBM Plex Mono", "Courier New", monospace; /* tags, status, assinatura */

  /* ---- Raios (industrial, Ref 1/2 — nada de raio grande) ---- */
  --raio-botao: 6px;
  --raio-card: 10px;
  --raio-full: 999px;

  /* ---- Espaço ---- */
  --esp-1: 8px;
  --esp-2: 16px;
  --esp-3: 24px;
  --esp-4: 32px;
  --esp-5: 48px;
  --esp-6: 64px;
  --esp-secao: clamp(72px, 12vh, 120px); /* padding-block de cada seção */

  /* ---- Layout ---- */
  --largura-container: 1120px;
  --padding-x: clamp(20px, 5vw, 40px);

  /* ---- Movimento ---- */
  --velocidade: 200ms;
  --curva: cubic-bezier(0.2, 0.6, 0.2, 1);
}
```

**Fontes — adicionar em `index.html`** (hoje o projeto declara as famílias no CSS mas não as carrega):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@500;700&family=Oswald:wght@500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
```
Aproveitar e mudar `lang="en"` → `lang="pt-BR"` e `<title>` para "Kaike Guerlinguer — Portfólio".

---

## 3. Especificação por seção

### 3.0 Global
- `body`: `background: var(--cor-fundo); color: var(--cor-texto); font: 400 1rem/1.6 var(--fonte-corpo);` + antialiasing.
- `html { scroll-behavior: smooth; }`.
- `div.grade-fundo` (já existe em `App.tsx`): repurpose como **glow estático** — um único `radial-gradient` vermelho muito sutil fixo no topo-direito da página, `opacity` máx. Não animar.
- `.secao`: `max-width: var(--largura-container); margin-inline: auto; padding: var(--esp-secao) var(--padding-x);`
- `.secao__titulo`: família `--fonte-titulo`, 600, `text-transform: uppercase`, `letter-spacing: 0.06em`, `clamp(1.75rem, 4vw, 2.5rem)`, line-height 1.1. O `<span class="secao__no">` existente vira um **marcador vermelho 10×10px** (quadrado cheio `--cor-vermelho-forte`, raio 2px) antes do texto, com `margin-right: 12px`.
- `.secao__lede`: `--cor-texto-muted`, max-width 52ch, `margin-top: var(--esp-2)`.
- `.rotulo` (mono): 12px, uppercase, letter-spacing 0.14em, cor `--cor-vermelho`.
- Foco global acessível: `:focus-visible { outline: 2px solid var(--cor-vermelho); outline-offset: 3px; border-radius: 2px; }`
- Seleção: `::selection { background: var(--cor-vermelho-forte); color: #fff; }`
- Scrollbar (webkit): 10px, track `--cor-fundo`, thumb `#262424`, hover vermelho-escuro.

### 3.1 Topo / Nav (Refs 2 e 3)
- Mantém sticky. `background: rgba(10, 10, 11, 0.82); backdrop-filter: blur(8px);` com `border-bottom: 1px solid var(--cor-borda)`.
- **Estado rolado**: quando `scrollY > 8`, adicionar classe `topo--rolado` que aumenta a opacidade do fundo para 0.95 e aplica `box-shadow: 0 1px 0 var(--cor-borda)`. Implementar com um listener de scroll passivo de 2 linhas em `Topo.tsx` (ou o `App.tsx`); sem libs.
- Altura da barra: 64px desktop / 56px mobile. Container igual às seções.
- **Logo** `topo__marca`: manter o texto "KRMG". Estilo: `--fonte-display` 700, 1.25rem, letter-spacing 0.02em, branco; o `.` (topo__marca-ponto) em `--cor-vermelho`. Hover: nada (âncora para o topo).
- **Links** ("Sobre", "Projetos"): `--fonte-corpo` 500, 0.9rem, `--cor-texto-suave`. Hover: cor → `--cor-texto` (branco) e **underline animado**: `::after` de 2px em `--cor-vermelho`, `transform: scaleX(0) → scaleX(1)`, `transform-origin: left`, 200ms `--curva`. Gap entre links: 32px desktop.
- **Novo:** transformar o link "Contato" (o último) no **botão outlined vermelho do Ref 2**: `<a href="#contato" class="topo__cta">Contato</a>` — borda 1px `--cor-vermelho`, cor do texto `--cor-vermelho`, padding 8px 20px, raio `--raio-botao`, background transparente. Hover: `background: var(--cor-vermelho-forte)`, texto branco, 200ms. Isso é a única adição de texto do redesign (rótulo de navegação, não dado) — **decisão tomada, não mudar o restante dos textos**.
- **Menu mobile** (hambúrguer já existe): painel `--cor-painel`, largura 100%, borda inferior vermelha 2px, links empilhados com padding 16px e separador 1px `--cor-borda`; o `topo__cta` entra como último item, esticado (`margin-top: 8px`). As 3 linhas do botão: 18px de largura, 2px de altura, branco; a linha central alterna para vermelho quando aberto (ou as linhas viram ×).
- Se quiser cobrir os separadores verticais do Ref 3: `border-left: 1px solid var(--cor-borda)` nos links + `margin-inline: 16px` — **opcional, faça só se ficar limpo em 1120px**; no mobile, desligar.

### 3.2 Hero (Ref 2 como principal, decorativos do Ref 3)
- Seção `min-height: calc(100svh - 64px)`, mesma largura de container, conteúdo ancorado à esquerda, `padding-top: clamp(48px, 10vh, 96px)`.
- **Abordagem gráfica: WAVES SVG inline (Ref 2). Justificativa:** único `<svg>` estático com 1 `<path>` definido em `<defs>` + 12 `<use>` com `translate` vertical alternado e opacity 0.18–0.55, `stroke: var(--cor-vermelho)`, `stroke-width: 1`, `vector-effect="non-scaling-stroke"`. Zero custo de runtime, nítido em qualquer tela, sem repaint. **Blobs CSS do Ref 3 ficam descartados como recurso principal** porque exigem `filter: blur()` em áreas grandes (jank comprovado em mobile) ou dezenas de gradientes. Pode-se complementar com 1 radial-gradient estático sutil no `grade-fundo` (isento, já especificado). Sem animação nas waves.
  - Posicionamento: `position: absolute; right: -12%; top: 0; width: min(90vw, 880px); height: 100%; pointer-events: none;` atrás do texto (`z-index: 0`; conteúdo do hero em `z-index: 1`). `<svg class="hero__waves" aria-hidden="true">` no lugar do atual `hero__esquema` (que deve ser removido).
  - Em `<640px`: reduzir para `width: 140vw` à direita e `opacity: 0.6` (mantém presença sem poluir).
- **Hero decorativo (Ref 3)**: 2–3 caracteres `+` e `×` via `span`s absolutos ou `::before/::after` no `.hero`, em `--fonte-dados`, 14–20px, cor `--cor-vermelho` com opacity 0.35, posições fixas (ex.: um `+` perto do canto superior-direito e um `×` abaixo das tags). An `aria-hidden`. **No máximo 3**, nunca animados.
- `.rotulo` existente ("REV. 2026 · PONTA GROSSA, PR"): mono, manter estilo global de `.rotulo`, `margin-bottom: var(--esp-3)`.
- `.hero__titulo`: `--fonte-display` 700, `clamp(2.6rem, 8vw, 5.5rem)`, line-height 1.02, letter-spacing -0.02em, branco. **A palavra "Guerlinguer" (última linha) em `--cor-vermelho`** — envolver num `<span class="hero__destaque">`; é só cor, nenhum texto muda (Ref 3).
- `.hero__cargo`: `--fonte-corpo` 500, `clamp(1rem, 2vw, 1.15rem)`, `--cor-texto`, max-width 44ch, `margin-top: var(--esp-3)`.
- `.hero__texto`: `--cor-texto-suave`, max-width 50ch, `margin-top: var(--esp-2)`, background `rgba(10,10,11,0.55)` opcional para legibilidade sobre as waves nas bordas.
- **Tags de tech**: manter a `<ul class="tags">` e os grupos. Estilo novo (Ref 1 + Ref 3): pill outline — `--fonte-dados` 400, 12px, uppercase, letter-spacing 0.06em, texto `--cor-texto-suave`, borda 1px `--cor-borda-forte`, padding 6px 12px, raio `--raio-full`, background transparente, gap 8px, `margin-top: var(--esp-4)`. Hover: borda `--cor-vermelho-borda`, texto `--cor-vermelho`. São 11 chips; sem destaque por grupo (`tag--web` etc. ganham a mesma aparência — o agrupamento continua no DOM para semântica).
- **CTAs (novos, estilo Ref 2)**: linha de 2 elementos `margin-top: var(--esp-5)`:
  1. `<a href="#projetos" class="botao botao--solido">Ver projetos</a>` — `background: var(--cor-vermelho-forte)`, texto branco, `--fonte-titulo` 600 uppercase 0.95rem letter-spacing 0.08em, padding 14px 36px, raio `--raio-botao`. Hover: `background: #e63838` (um passo mais claro), `transform: translateY(-1px)`. Active: `translateY(0)`.
  2. `<a href="#contato" class="botao botao--ghost">Contato</a>` — borda 1px `--cor-borda-forte`, texto `--cor-texto-suave`, mesmo padding/typo. Hover: borda `--cor-vermelho`, texto `--cor-vermelho`.
- **Scroll indicator (Ref 2)**: no fim do hero, centrado na base (`position: relative` + `margin-inline: auto`), círculo 36px `background: var(--cor-vermelho-forte)`, chevron branco (SVG inline 12px ou caractere "↓" em `--fonte-dados`), `<a href="#sobre" aria-label="Rolar para Sobre">`. Hover: scale 1.08 (200ms). Sincronizar com `@keyframes` de bounce? **Não** — estático com transition de hover apenas.
- **Entrada**: manter a classe `hero--entrar` já usada em `App.tsx` → animar só `opacity 0→1` + `translateY(16px)→0` no bloco de texto, 600ms ease-out, sem delay em cascata. Sob `prefers-reduced-motion`, desligar.

### 3.3 Sobre (Ref 1: hierarquia de faixas; Ref 3: tipografia editorial)
- Grid `--esp-4` de gap: **coluna única**, largura máx 760px, alinhada à esquerda dentro do container (evita "grade de 4 caixas" genérica).
- O **1º parágrafo** vira lede: `--fonte-corpo` 400, `clamp(1.15rem, 2vw, 1.3rem)`, line-height 1.55, `--cor-texto`, com `border-left: 3px solid var(--cor-vermelho)` + `padding-left: 16px` (faixa vertical vermelha, leitura direta do Ref 1).
- Demais parágrafos: 1rem, `--cor-texto-suave`, line-height 1.65, espaçados por `--esp-3`. Palavras-chave (`ESP32`, `OpenCV`, `MediaPipe`, `React`…) — **se puder destacar sem tocar no HTML**: `strong` não existe no markup; alternativa: estilizar em CSS apenas o primeiro parágrafo e **não mexer nos textos**. OK deixar simples.
- Decorativo: um `×` mono vermelho (opacity 0.3) no canto direito da seção, `aria-hidden` (Ref 3).

### 3.4 Projetos (Ref 1 — coração do redesign)
- `.projetos__grade`: grid `repeat(auto-fit, minmax(300px, 1fr))`, gap `--esp-3`; máx 3 colunas.
- `.card-projeto` (Ref 1):
  - `background: var(--cor-painel); border: 1px solid var(--cor-borda); border-radius: var(--raio-card); padding: var(--esp-4); display: flex; flex-direction: column; gap: var(--esp-2);`
  - **Faixa vermelha no topo** (Ref 1): `::before` — `height: 3px; background: var(--cor-vermelho-forte); width: 48px;` (traço curto, não full-bleed — mais elegante) posicionado no topo interno do card. Em "disponível" a faixa é sólida; em "em-breve" a faixa vira cinza (`--cor-borda-forte`).
  - **Hover**: `border-color: var(--cor-vermelho-borda); background: var(--cor-painel-2); transform: translateY(-4px); box-shadow: 0 8px 32px var(--cor-vermelho-glow);` 200ms `--curva`. Desligado em `prefers-reduced-motion` (a transição de border/cor fica).
  - `h3`: `--fonte-display` 700, 1.25rem, branco, line-height 1.2.
  - `.status`: `--fonte-dados` 500, 11px, uppercase, letter-spacing 0.12em, padding 4px 10px, raio 3px (quase retangular, Ref 1):
    - `status--disponivel`: `background: var(--cor-vermelho-forte); color: #fff;` (4.8:1, AA ok).
    - `status--em-breve`: transparente, `border: 1px solid var(--cor-vermelho-borda); color: var(--cor-vermelho);`
  - `p` (descrição): 0.95rem, `--cor-texto-suave`, line-height 1.6.
  - `.card-projeto__tags`: `--fonte-dados` 400, 12px, cor `--cor-texto-muted`, separadas por `/` literal no CSS (`li + li::before { content: "/"; margin: 0 8px; }`) em vez de pills — contraste visual com as pills do hero.
  - `.card-projeto__link`: `--fonte-dados` 500, 0.9rem, `--cor-vermelho`, `margin-top: auto` (empurra para a base, alinha os cards). Hover: `color: var(--cor-vermelho-claro)` + a seta `→` desliza 4px à direita (transform no span da seta ou em `::after`). Sublinhado não — a seta já é feedback.
  - `.card-projeto__link--desabilitado`: mesma tipografia, cor `--cor-texto-muted`, sem hover, `cursor: default`, com "↗" removido (já é só texto).
  - O card inteiro NÃO vira link (só o link "Ver projeto") — evita estado ambíguo com `em-breve`.

### 3.5 Contato (Ref 3: linhas; Ref 1: hover forte)
- `.lista-contato`: lista de linhas full-width (largura do container), cada `li` com `border-top: 1px solid var(--cor-borda)`; último `li` também com `border-bottom`.
- Cada linha: `display: flex; align-items: baseline; justify-content: space-between; padding: 20px 8px;`
  - `.lista-contato__label`: `--fonte-titulo` 500, uppercase, letter-spacing 0.1em, 1rem, `--cor-texto-muted`.
  - `.lista-contato__valor`: `--fonte-corpo` 400, 1.05rem, `--cor-texto`.
  - **NOVO markup**: adicionar `<span class="lista-contato__seta" aria-hidden="true">↗</span>` no fim de cada `<a>`, escondido com `opacity: 0; transform: translateX(-6px);`.
- **Hover no `<a>`**: `background: var(--cor-painel); padding-left: 20px;` (micro-deslocamento com transition 200ms), `__valor` → `--cor-vermelho` e `__seta` → `opacity: 1; transform: translateX(0); color: var(--cor-vermelho);`
- O span `lista-contato__no` pode ser removido do markup ou virar um pequeno índice mono vermelho ("01", "02", "03") à esquerda — **decisão: virar índice** (`--fonte-dados` 12px, `--cor-vermelho`, width fixa 32px). Anna adiciona o número.
- O item "E-mail" não tem `href` hoje — torná-lo `href="mailto:kaikeguerlinguer@gmail.com"` (dado já existe, apenas wire-up; sem texto novo).

### 3.6 Rodapé
- `border-top: 1px solid var(--cor-borda)`, `padding: var(--esp-4) var(--padding-x) calc(var(--esp-4) + 8px)`, mesma largura de container.
- 1º parágrafo: 0.9rem, `--cor-texto-muted`, max-width 60ch.
- `.rodape__assinatura`: `--fonte-dados` 400, 12px, uppercase, letter-spacing 0.14em, `--cor-texto-suave`, com o "·" e o "Ponta Grossa, PR" já presentes; adicionar "§" não; opcional: prefixar o `KRMG.` vermelho do logo como `::before { content: "KRMG. "; color: var(--cor-vermelho); }` — **fazer**, dá assinatura tipográfica sem texto novo (reaproveita a marca).

---

## 4. Micro-interações & acessibilidade (checklist da Anna)

1. **Underline animado** nos links da nav (seção 3.1) — 200ms, `transform-origin: left`.
2. **Hover de card** (seção 3.4) — lift -4px + borda/glow vermelho. Sem animação se `prefers-reduced-motion: reduce`.
3. **Focus visible vermelho** global + `outline-offset: 3px` (nunca remover outline).
4. **Contraste**: `#ff2a2a` sobre `#0a0a0b` = 5.3:1 (AA texto normal ✓); branco sobre `#d92d2d` = 4.8:1 (AA ✓). Não usar vermelho para texto menor que 12px em `--cor-vermelho-escuro` (falha AA).
5. **`@media (prefers-reduced-motion: reduce)`**: desligar `hero--entrar`, hover-lift dos cards, push-down do hover de contato e `scroll-behavior: smooth`; manter apenas transições de cor.
6. **Nada em loop**: zero marquee, zero bounce no scroll indicator, zero animação nas waves. Marquee foi avaliado e **descartado** (Regra: sem animação em loop constante).
7. Todos os decorativos (`+`, `×`, waves, glow, marcadores) com `aria-hidden="true"`.

---

## 5. Observações de markup para a Anna (resumo do que muda)

| Componente | Mudança de markup |
|---|---|
| `index.html` | Google Fonts (link), `lang="pt-BR"`, `<title>` "Kaike Guerlinguer — Portfólio" |
| `App.tsx` | Nada (dados e estrutura intocados). Opcional: listener de scroll para `topo--rolado` pode ficar no próprio `Topo` |
| `Topo.tsx` | Link "Contato" vira `<a class="topo__cta">` depois dos links; manter hambúrguer e props existentes |
| `HeroSection.tsx` | Remover `<svg class="hero__esquema">` → adicionar `<svg class="hero__waves">` (1 path + 12 `<use>`); envolver "Guerlinguer" em `<span class="hero__destaque">`; adicionar bloco de 2 CTAs; adicionar scroll indicator `<a href="#sobre">`; 2–3 decorativos `+`/`×` |
| `SobreSection.tsx` | Nenhuma mudança estrutural (só CSS) |
| `ProjetosSection.tsx` | Nenhuma mudança obrigatória; opcional: nada |
| `ContatoSection.tsx` | `<span class="lista-contato__no">` recebe texto "01/02/03"; adicionar `<span class="lista-contato__seta">↗</span>` no fim do `<a>`; adicionar `mailto:` no E-mail |
| `Rodape.tsx` | Nada (assinatura via `::before` no CSS) |

**Nomes de arquivo afetados:** apenas `src/App.css` (grande parte), `index.html`, e pequenas mudanças markup em `Topo.tsx`, `HeroSection.tsx`, `ContatoSection.tsx`.

---

## 6. Diferenças assumidas em relação às referências

1. **Sem imagens de overlay vermelho/preto do Ref 1** (fotos de tatame/casais de Jiu-Jitsu): portfólio não tem assets do tipo; o peso visual das fotos foi transposto para as **faixas vermelhas nos cards + hover glow**. Registrado como desvio consciente.
2. **Serif itálico do Ref 3** ("Blurred"): não cabe na identidade de dev; trocada por **Oswald condensed no uppercase + Space Grotesk branco** para o mesmo efeito de dupla-textura do Ref 3 (vermelho + branco em pesos opostos). 
3. **Botão outlined do Ref 3 é branco; do Ref 2 é vermelho** → adotado o vermelho (Ref 2) por coerência com a paleta.
4. **CTAs "Ver projetos" e "Contato"** não existiam → adicionados como navegação (não são dados); único acréscimo de texto autorizado pela spec.
5. **Blobs fluidos** substituídos por waves estáticas (motivo técnico: performance, seção 3.2). Ref 3 entra só nos decorativos `+`/`×`.



*Fim da spec. Implementar direto; qualquer conflito entre esta spec e os dados existentes → os dados vencem.*
