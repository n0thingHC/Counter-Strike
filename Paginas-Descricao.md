# Estrutura do Site sobre *Counter-Strike* (Em formato de lista)

## 1. Página Inicial
- **Recursos HTML**:
  - Utilização de elementos básicos como `header`, `nav`, `section` e `footer` para estruturação.
  - Um banner com imagens rotativas utilizando um `carousel` simples, composto por `div`, `img` e botões de navegação (`button` ou `a`).
  - Links para as páginas principais, organizados com listas não ordenadas (`ul`, `li`).
  - Seção de notícias em destaque com miniaturas de imagens (`img`) e links (`a`) para os artigos completos.
  - Um formulário de assinatura de newsletter usando elementos `form`, `input` e `button`.
  
- **Recursos Visuais**:
  - Banner rotativo com imagens em alta qualidade.
  - Botões de navegação em estilo simples com hover usando CSS.
  - Seções destacadas em `div` com bordas suaves e sombras (`box-shadow`).

---

## 2. História do *Counter-Strike*
- **Recursos HTML**:
  - Utilização de `article` para cada seção histórica.
  - Subtítulos organizados com `h2` e `h3` para diferentes fases da história do jogo.
  - Parágrafos (`p`) explicativos com imagens (`img`) relevantes de cada época.
  - Uma linha do tempo interativa simples com `ul` e `li`, onde cada item é clicável e mostra mais detalhes sobre eventos específicos.
  
- **Recursos Visuais**:
  - Linha do tempo estilizada com ícones de eventos importantes.
  - Imagens históricas dos primeiros torneios e versões do jogo.
  - Layout responsivo, adaptando a linha do tempo e texto para dispositivos móveis.

---

## 3. Como o Jogo Funciona
- **Recursos HTML**:
  - Uso de listas ordenadas (`ol`) para descrever passo a passo o funcionamento do jogo e os principais modos.
  - Tabelas (`table`) para apresentar comparações entre armas, modos de jogo e mapas.
  - Vídeos integrados (elemento `video` ou `iframe` do YouTube) explicando as mecânicas básicas.
  - Imagens (`img`) dos mapas e suas estratégias principais, organizadas com `figure` e `figcaption`.

- **Recursos Visuais**:
  - Tabelas estilizadas com bordas simples e cores alternadas em cada linha (`tr:nth-child(even)`).
  - Vídeos com tamanho responsivo usando `max-width` e `height: auto`.
  - Imagens descritivas para cada arma e equipamento, com descrições abaixo.

---

## 4. Campeonatos Mundiais de *Counter-Strike*
- **Recursos HTML**:
  - Seção com histórico dos maiores campeonatos usando `section` e subtítulos `h2` e `h3`.
  - Listas (`ul` e `li`) para destacar os torneios mais importantes, como *Majors* e DreamHack.
  - Galeria de fotos dos eventos utilizando `div` com imagens (`img`) organizadas em grade.
  - Links (`a`) para sites de campeonatos antigos e para páginas detalhadas sobre os eventos.

- **Recursos Visuais**:
  - Galeria de imagens responsiva em grid, adaptável ao tamanho da tela.
  - Layout simples com imagens de alta qualidade dos campeonatos mais icônicos.
  - Textos em negrito e itálico para destacar eventos ou jogadores.

---

## 5. Campeonatos Atuais de *Counter-Strike 2*
- **Recursos HTML**:
  - Calendário de eventos futuros utilizando uma tabela (`table`) com datas, locais e links para transmissão.
  - Lista de campeonatos em andamento com links (`a`) para as transmissões ao vivo.
  - Integração de transmissões ao vivo por meio de `iframe` de plataformas como Twitch ou YouTube.
  
- **Recursos Visuais**:
  - Tabelas estilizadas com ícones de transmissão e gráficos representando o andamento dos torneios.
  - Seções coloridas para facilitar a visualização dos torneios por data ou organização.
  - Destaque para eventos ao vivo com banners e ícones animados usando CSS.

---

## 6. Ranking Mundial - HLTV e Valve
- **Recursos HTML**:
  - Uso de tabelas (`table`) para exibir os rankings da HLTV e Valve, organizando times, pontos e posições.
  - Imagens dos logotipos dos times (`img`) dentro das tabelas para identificação visual rápida.
  - Links (`a`) para páginas detalhadas dos times ou artigos sobre suas performances recentes.

- **Recursos Visuais**:
  - Tabelas com cabeçalhos fixos e estilo diferenciador entre as colunas de HLTV e Valve.
  - Logotipos dos times inseridos dentro das tabelas para melhor visualização.
  - Destaques coloridos para os times que subiram ou caíram no ranking recentemente.

---

## 7. Notícias e Atualizações
- **Recursos HTML**:
  - Listagem de notícias recentes usando `ul` e `li`, com títulos (`h2`) e parágrafos (`p`) curtos descrevendo as atualizações.
  - Integração de feeds RSS simples para capturar atualizações de sites como HLTV e Valve.
  - Formulário de pesquisa (`form`, `input`, `button`) para os usuários encontrarem notícias específicas.

- **Recursos Visuais**:
  - Lista de notícias com miniaturas de imagens ao lado de cada título.
  - Fundo branco simples com destaques em caixas para separar notícias e evitar confusão.
  - Hover nos títulos com mudança de cor para destacar notícias ao passar o mouse.

---

## 8. Comunidade e Fórum
- **Recursos HTML**:
  - Seção de fórum com comentários simples utilizando `form`, `input`, `textarea`, e `button` para os usuários deixarem suas mensagens.
  - Listas não ordenadas (`ul`, `li`) para organizar tópicos recentes e discussões ativas.
  - Formulário de cadastro e login simples utilizando `form`, `input` e `button`.

- **Recursos Visuais**:
  - Tópicos destacados com cores diferentes para mensagens não lidas.
  - Seções claramente divididas para discussões sobre mecânicas de jogo, torneios e suporte técnico.
  - Avatares simples para os perfis dos usuários ao lado de seus comentários.

---

## 9. Galeria
- **Recursos HTML**:
  - Galeria de imagens organizada em grid com `div` e `img` para exibir capturas de tela e fotos de eventos.
  - Legendas (`figcaption`) para cada imagem, descrevendo o evento ou momento do jogo.
  - Botões (`button`) ou links (`a`) para abrir imagens em tamanho maior ou baixar arquivos.

- **Recursos Visuais**:
  - Galeria com imagens de tamanho responsivo, ajustando-se automaticamente ao tamanho da tela.
  - Imagens com bordas suaves e efeitos de sombra ao passar o mouse (`hover`).
  - Legendas em estilo claro e com fontes diferenciadas para dar contexto a cada imagem.

---

Com essas descrições, as páginas do site utilizam recursos simples de HTML, como tabelas, listas, formulários e elementos multimídia, para criar uma experiência funcional e visualmente agradável. Cada página é otimizada para ser responsiva e fácil de navegar, garantindo uma boa experiência para o usuário em diferentes dispositivos.

