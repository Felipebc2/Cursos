# Angular Jornada Milhas

Este projeto é o resultado da implementação de uma aplicação Angular desenvolvida como parte do curso **"Angular: Componentização e Design com Angular Material"** da [Alura](https://www.alura.com.br/). O objetivo foi construir a **front page** de uma aplicação baseada no design disponibilizado em [Figma](https://www.figma.com/design/PnbYDKjKLouCOAwY4GRxYv/Jornada-Milhas?node-id=4-6408&t=LKy2ZXCvkzArBHs5-0).

## 🖥️ Funcionalidades desenvolvidas

A aplicação contém os seguintes elementos principais:

- **Componentização:** O layout foi estruturado utilizando componentes Angular, promovendo modularidade e reaproveitamento de código.
- **Estilização com SCSS:** Cada componente possui estilos personalizados seguindo as diretrizes do design do Figma.
- **Design responsivo:** A página foi adaptada para funcionar em diferentes tamanhos de tela.
- **Integração com Angular Material:** Utilização de componentes visuais do Angular Material para garantir um design moderno e consistente.

## 📂 Estrutura do projeto

**Observação:** Dentro de cada componente temos:
- **Estrutura [HTML]**: Contém o layout.
- **Estilização [SCSS]**: Define os estilos específicos.
- **Lógica [TS]**: Gerencia o comportamento do componente.
- **Testes [TS]**: Arquivos de teste unitário.

```
src
├── app
│   │ 
│   ├── pages
│   │   └── home
│   │       └── home.components...          # Página principal da aplicação
│   │
│   ├── shared
│   │   └── banner
│   │       └── banner.components...        # Componente de banner principal
│   │   └── botao-controle
│   │       └── botao-controle.components...# Botão reutilizável para ações
│   │   └── card
│   │       └── card.components...          # Estrutura de cartão genérico
│   │   └── card-busca
│   │       └── card-busca.components...    # Componente de busca com filtro
│   │   └── card-depoimentos
│   │       └── card-depoimentos.components... # Exibição de depoimentos
│   │   └── container
│   │       └── container.components...     # Estrutura para containers de layout
│   │   └── footer
│   │       └── footer.components...        # Rodapé da aplicação
│   │   └── form-busca
│   │       └── form-busca.components...    # Formulário para busca de dados
│   │   └── header
│   │       └── header.components...        # Cabeçalho com navegação
│   │   └── modal
│   │       └── modal.components...         # Janela modal para interações
│   │
│   └── app-routing.module.ts               # Configuração das rotas da aplicação
│   └── app.component.*                     # Componente raiz da aplicação
│   └── app.module.ts                       # Módulo principal da aplicação
│
├── assets
│   ├── images                              # Imagens estáticas usadas no projeto
│   └── icons                               # Ícones utilizados na aplicação
├── environments
│   ├── environment.prod.ts                 # Configuração do ambiente de produção
│   └── environment.ts                      # Configuração do ambiente de desenvolvimento
├── styles.scss                             # Estilos globais da aplicação
├── angular.json                            # Configurações principais do Angular CLI
├── package.json                            # Dependências e scripts do projeto
├── tsconfig.json                           # Configurações do TypeScript
└── README.md                               # Documentação do projeto
```

## 🔧 Ferramentas e tecnologias utilizadas

- **Angular**: Framework para construção de aplicações web.
- **Angular CLI**: Ferramenta para gerenciamento e scaffolding do projeto.
- **Angular Material**: Biblioteca de componentes visuais.
- **Figma**: Fonte do design utilizado.
- **SCSS**: Para estilização customizada.

## 🚀 Como executar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/Felipebc2/Angular_JornadaMilhas.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
4. Acesse a aplicação no navegador:
   ```
   http://localhost:4200
   ```

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, os seguintes conceitos foram abordados:
- Criação e estruturação de componentes Angular.
- Aplicação de estilizações consistentes com base em um design previamente definido.
- Uso do Angular Material para criar interfaces modernas e acessíveis.
- Boas práticas de componentização e organização de projetos Angular.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.
