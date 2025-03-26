# Fokus

O **Fokus** é uma aplicação de **gerenciamento de tempo** baseada na **técnica Pomodoro**, combinada com uma **To-Do List**, desenvolvida com o objetivo de ajudar a melhorar a produtividade e organização de tarefas. A técnica Pomodoro é uma abordagem simples, mas eficaz, onde se alternam períodos de trabalho focado (geralmente 25 minutos) com intervalos curtos (geralmente 5 minutos).

Este repositório contém diferentes versões da aplicação, cada uma com funcionalidades e características distintas, desenvolvidas em fases sucessivas. Cada versão do projeto está localizada em um diretório separado dentro deste repositório.

## Estrutura do Repositório

```plaintext
fokus/
├── fokus-v1/       # Primeira versão: Apenas Temporizador Pomodoro
│   ├── index.html  # Arquivo principal - Página Web
│   ├── style.css   # Arquivo Responsável pela Estilização da Página
│   ├── script.js   # Lógica do Contador Pomodoro
│   ├── imagens/     # Pasta com todas as imagens utilizadas no projeto
|   └── sons/        # Pasta com todos os sons utilizadas no projeto
|
├── fokus-v2/            # Segunda versão: Temporizador Pomodoro + To-Do List
│   ├── index.html       # Arquivo principal - Página Web
│   ├── style.css        # Arquivo Responsável pela Estilização da Página
│   ├── script.js        # Lógica do Contador Pomodoro
│   ├── script-crud.js   # Lógica da Manipulação de Tarefas
│   ├── imagens/          # Pasta com todas as imagens utilizadas no projeto
|   └── sons/             # Pasta com todos os sons utilizadas no projeto
|
├── fokus-v3/              # Terceira versão: Temporizador Pomodoro + To-Do List com TypeScript
│   ├── index.html         # Arquivo principal - Página Web
│   ├── style.css          # Arquivo Responsável pela Estilização da Página
│   ├── script.js          # Lógica do Contador Pomodoro
│   ├── script-crud.js     # Lógica da Manipulação de Tarefas - Código transpilado do Typescript
│   ├── script-crud.ts     # Lógica da Manipulação de Tarefas - Arquivo Typescript
│   ├── package.json       # Dependência do Typescript
│   ├── package-lock.json  # Configurações de pacote local NodeJs
│   ├── tsconfig.json      # Configuração do TypeScript
│   ├── imagens/            # Pasta com todas as imagens utilizadas no projeto
|   └── sons/               # Pasta com todos os sons utilizadas no projeto
|
├── LICENSE       # Arquivo da Licença
└── README.md     # Arquivo README principal
```

## Fokus v1 - Temporizador Pomodoro
A primeira versão do **Fokus** foi focada apenas no **temporizador Pomodoro**. Esta versão implementa a técnica Pomodoro básica, com a contagem regressiva para os períodos de trabalho e intervalos. Não há funcionalidades de To-Do List nessa versão.

- **Funcionalidades**:
  - Temporizador Pomodoro (25 minutos de foco, 15 minutos de descanso longo e 5 minutos de descanso curto);
  - Contagem regressiva Visual;
  - Com a possibilidade de ativar uma música de fundo para ajudar na concentração durante os estudos;
  - Alertas sonoros ao término dos períodos de trabalho e intervalo.

## Fokus v2 - Temporizador Pomodoro + To-Do List
Na segunda versão, a funcionalidade de **To-Do List** foi adicionada ao **Fokus**. Agora, o usuário pode adicionar tarefas, marcá-las como concluídas e deletá-las enquanto utiliza o temporizador Pomodoro para organizar e gerenciar melhor suas tarefas.

- **Funcionalidades**:
  - Temporizador Pomodoro (25 minutos de trabalho, 15 de descanso longo e 5 minutos de descanso curto);
  - Adição, edição e exclusão de tarefas na To-Do List;
  - Marcação de tarefas como concluídas;
  - **Armazenamento local** de tarefas (utilizando localStorage) para persistir os dados;
  - Com a possibilidade de ativar uma música de fundo para ajudar na concentração durante os estudos;
  - Alertas sonoros ao término de cada sessão.

## Fokus v3 - Temporizador Pomodoro + To-Do List com TypeScript
A terceira versão do **Fokus** foi reescrita utilizando **TypeScript**, melhorando a estrutura do código, tornando-o mais robusto e escalável.

- **Funcionalidades**:
  - Temporizador Pomodoro (Ele ainda não é configurável com tempos de trabalho e intervalos ajustáveis);
  - Lista de Tarefas: Adicionar, Editar, Excluir e Marcar tarefas como concluídas;
  - Armazenamento local de tarefas utilizando o localStorage;
  - Melhor estrutura de código com TypeScript, implementando paradigmas funcionais;
  - Com a possibilidade de ativar uma música de fundo para ajudar na concentração durante os estudos;
  - Alertas sonoros ao término das sessões, com melhor gerenciamento de tempo.

## Contribuições

Este projeto está aberto para **contribuições**! Se você tiver sugestões ou melhorias para alguma das versões, sinta-se à vontade para abrir **issues** ou enviar **pull requests**.

## Licença

Este repositório está licenciado sob a **MIT License**. Para mais informações, consulte o arquivo [LICENSE](LICENSE).
