# Valora Contabilidade Digital

Site institucional da **Valora Contabilidade Digital**, escritório de contabilidade
com atendimento próximo e linguagem clara para MEI, Simples Nacional e Lucro Presumido.

> Projeto em desenvolvimento, construído passo a passo como estudo de React.

## Tecnologias

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com) (v3)
- [Lucide](https://lucide.dev) (ícones)

## Como rodar no seu computador

Pré-requisitos: [Node.js](https://nodejs.org) (versão LTS) e [pnpm](https://pnpm.io).

```bash
# 1. Clonar o repositório
git clone https://github.com/LeRonchi/Valora.git

# 2. Entrar na pasta
cd Valora

# 3. Instalar as dependências
pnpm install

# 4. Iniciar o servidor de desenvolvimento
pnpm dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Scripts

| Comando        | O que faz                                  |
| -------------- | ------------------------------------------ |
| `pnpm dev`     | Inicia o servidor de desenvolvimento       |
| `pnpm build`   | Verifica os tipos e gera a pasta `dist`    |
| `pnpm preview` | Mostra a versão gerada pelo `build`        |
| `pnpm lint`    | Procura erros de código com o oxlint       |

## Estrutura do projeto

```
src/
├── components/
│   ├── common/              # Peças reutilizáveis
│   │   ├── brand-logo.tsx
│   │   ├── button.tsx
│   │   ├── section-heading.tsx
│   │   └── service-card.tsx
│   └── layout/              # Estrutura fixa da página
│       ├── site-header.tsx  # Cabeçalho com menu do celular
│       ├── site-footer.tsx  # Rodapé em 3 colunas
│       └── site-layout.tsx  # Moldura: cabeçalho + conteúdo + rodapé
├── lib/
│   ├── site-config.ts       # Todo o conteúdo editável do site
│   └── utils.ts             # Função cn (junta classes do Tailwind)
├── App.tsx                  # Monta a página
├── index.css                # Cores da marca e classe .section-shell
└── main.tsx                 # Ponto de entrada
```

## Como editar o conteúdo

Textos, contatos, menu e serviços ficam em **`src/lib/site-config.ts`**.
Ao alterar um valor nesse arquivo, o site inteiro se atualiza. Por exemplo,
um novo item em `navigation` aparece no cabeçalho e no rodapé.

## Identidade visual

| Cor                 | Uso                  |
| ------------------- | -------------------- |
| Dourado `#C9A646`   | Destaques e botões   |
| Preto `#0B0B0B`     | Fundos escuros       |
| Off-white `#F5F2EA` | Fundo claro          |

As cores são variáveis em `src/index.css` e ficam registradas em `tailwind.config.ts`.
Fontes: **Manrope** (títulos) e **Inter** (textos).

## Andamento

- [x] Ambiente, Tailwind e cores da marca
- [x] Conteúdo centralizado em `site-config.ts`
- [x] Peças reutilizáveis (botão, título de seção, cartão, logo)
- [x] Cabeçalho, rodapé e moldura `SiteLayout`
- [ ] Páginas e rotas (Início, Serviços, Sobre, Contato, Privacidade)
- [ ] Seções da página inicial (benefícios, fundadoras, perguntas frequentes)
- [ ] Botão de WhatsApp
- [ ] Formulário de orçamento
- [ ] SEO e medição de cliques
- [ ] Número de WhatsApp, e-mail e dados reais da Valora
- [ ] Publicação do site