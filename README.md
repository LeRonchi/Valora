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
git clone https://github.com/SEU-USUARIO/valora-site.git

# 2. Entrar na pasta
cd valora-site

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
| `pnpm build`   | Gera a versão final na pasta `dist`        |
| `pnpm preview` | Mostra a versão gerada pelo `build`        |

## Estrutura do projeto

```
src/
├── components/
│   ├── common/      # Peças reutilizáveis (botão, título, cartão, logo)
│   └── layout/      # Cabeçalho, rodapé e moldura da página
├── lib/
│   ├── site-config.ts   # Todo o conteúdo editável do site
│   └── utils.ts         # Funções auxiliares
├── App.tsx          # Monta a página
├── index.css        # Estilos globais e cores da marca
└── main.tsx         # Ponto de entrada
```

## Como editar o conteúdo

Textos, contatos, serviços e menu ficam em **`src/lib/site-config.ts`**.
Ao alterar um valor nesse arquivo, o site inteiro se atualiza.

## Identidade visual

| Cor            | Uso                  |
| -------------- | -------------------- |
| Dourado `#C9A646` | Destaques e botões |
| Preto `#0B0B0B`   | Fundos escuros     |
| Off-white `#F5F2EA` | Fundo claro      |

Fontes: **Manrope** (títulos) e **Inter** (textos).

## Pendências

- [ ] Número real de WhatsApp e e-mail
- [ ] Cabeçalho, rodapé e páginas internas
- [ ] Formulário de orçamento
- [ ] Publicação do site