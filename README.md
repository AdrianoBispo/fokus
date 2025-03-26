# Fokus

O **Fokus** é uma aplicação de **gerenciamento de tempo** baseada na **técnica Pomodoro**, combinada com uma **To-Do List**, desenvolvida com o objetivo de ajudar a melhorar a produtividade e organização de tarefas. A técnica Pomodoro é uma abordagem simples, mas eficaz, onde se alternam períodos de trabalho focado (geralmente 25 minutos) com intervalos curtos (geralmente 5 minutos).

Este repositório contém diferentes versões da aplicação, cada uma com funcionalidades e características distintas, desenvolvidas em fases sucessivas. Cada versão do projeto está localizada em um diretório separado dentro deste repositório.

## Diretórios

### 1. **fokus-v1** - Primeira versão: **Temporizador Pomodoro Básico**
A primeira versão do **Fokus** foi focada apenas no **temporizador Pomodoro**. Esta versão implementa a técnica Pomodoro básica, com a contagem regressiva para os períodos de trabalho e intervalos. Não há funcionalidades de To-Do List nessa versão.

- **Funcionalidades**:
  - Temporizador Pomodoro (25 minutos de trabalho e 5 minutos de intervalo).
  - Contagem regressiva visual.
  - Alertas sonoros ao término dos períodos de trabalho e intervalo.

### 2. **fokus-v2** - Segunda versão: **Temporizador Pomodoro + To-Do List**
Na segunda versão, a funcionalidade de **To-Do List** foi adicionada ao **Fokus**. Agora, o usuário pode adicionar tarefas, marcá-las como concluídas e deletá-las enquanto utiliza o temporizador Pomodoro para organizar e gerenciar melhor suas tarefas.

- **Funcionalidades**:
  - Temporizador Pomodoro (25 minutos de trabalho e 5 minutos de intervalo).
  - Adição, edição e exclusão de tarefas na To-Do List.
  - Marcação de tarefas como concluídas.
  - **Armazenamento local** de tarefas (utilizando localStorage) para persistir os dados.
  - Alertas sonoros ao término de cada sessão.

### 3. **fokus-v3** - Terceira versão: **Temporizador Pomodoro + To-Do List com TypeScript**
A terceira versão do **Fokus** foi reescrita utilizando **TypeScript**, melhorando a estrutura do código, tornando-o mais robusto e escalável. Além disso, essa versão trouxe algumas melhorias no gerenciamento das tarefas da **To-Do List** e aprimoramentos no design e na interação com o usuário.

- **Funcionalidades**:
  - Temporizador Pomodoro (Ele ainda não é configurável com tempos de trabalho e intervalos ajustáveis).
  - Lista de Tarefas: Adicionar, Editar, Excluir e Marcar tarefas como concluídas.
  - Armazenamento local de tarefas utilizando o localStorage.
  - Melhor estrutura de código com TypeScript, implementando paradigmas funcionais.
  - UI otimizada e mais interativa.
  - Alertas sonoros ao término das sessões, com melhor gerenciamento de tempo.

## Como Rodar Cada Versão

Cada versão do projeto está localizada em um diretório específico. Para testar ou rodar qualquer versão, siga os seguintes passos:

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/fokus.git
   ```

2. Acesse o diretório da versão que deseja testar. Por exemplo:
   ```bash
   cd fokus-v1
   ```

3. Abra o arquivo `index.html` no seu navegador.

## Estrutura do Repositório

```plaintext
fokus/
├── fokus-v1/       # Primeira versão: Apenas Temporizador Pomodoro
│   ├── index.html  # Arquivo principal - Página Web
│   ├── style.css   # Arquivo Responsável pela Estilização da Página
│   ├── script.js   # Lógica do Contador Pomodoro
│   ├── imagens     # Pasta com todas as imagens utilizadas no projeto
|   └── sons        # Pasta com todos os sons utilizadas no projeto

├── fokus-v2/            # Segunda versão: Temporizador Pomodoro + To-Do List
│   ├── index.html       # Arquivo principal - Página Web
│   ├── style.css        # Arquivo Responsável pela Estilização da Página
│   ├── script.js        # Lógica do Contador Pomodoro
│   ├── script-crud.js   # Lógica da Manipulação de Tarefas
│   ├── imagens          # Pasta com todas as imagens utilizadas no projeto
|   └── sons             # Pasta com todos os sons utilizadas no projeto

├── fokus-v3/              # Terceira versão: Temporizador Pomodoro + To-Do List com TypeScript
│   ├── index.html         # Arquivo principal - Página Web
│   ├── style.css          # Arquivo Responsável pela Estilização da Página
│   ├── script.js          # Lógica do Contador Pomodoro
│   ├── script-crud.js     # Lógica da Manipulação de Tarefas - Código transpilado do Typescript
│   ├── script-crud.ts     # Lógica da Manipulação de Tarefas - Arquivo Typescript
│   ├── package.json       # Dependência do Typescript
│   ├── package-lock.json  # Configurações de pacote local NodeJs
│   ├── tsconfig.json      # Configuração do TypeScript
│   ├── imagens            # Pasta com todas as imagens utilizadas no projeto
|   └── sons               # Pasta com todos os sons utilizadas no projeto
├── LICENSE       # Arquivo da Licença
└── README.md     # Arquivo README principal
```

## Contribuições

Este projeto está aberto para **contribuições**! Se você tiver sugestões ou melhorias para alguma das versões, sinta-se à vontade para abrir **issues** ou enviar **pull requests**.

## Licença

Este repositório está licenciado sob a **MIT License**. Para mais informações, consulte o arquivo [LICENSE](LICENSE).
