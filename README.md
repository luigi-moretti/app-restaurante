# app-restaurante

## Configuração do projeto
```
npm install
```

### Compilar e hot-reloads para desenvolvimento
```
npm run serve
```

### Compilar e minificar para produção
```
npm run build
```

### Lints e ajustes dos arquivos
```
npm run lint
```

## Breve explicação do projeto
### Objetivo do projeto
O principal objetivo do projeto é abstrair em uma aplicação a função de um garçom, no qual o principal desafio é identificar quais foram os pedidos de cada pessoa numa mesa de restaurante (por exemplo).

### Tecnologias utilizadas
Foram utilizadas as seguintes tecnologias no desenvolvimento desta aplicação:
- VueJS;
- Vuetify (como framework de estilos e componentes);
- Vue Router (para realizar a navegação entre rotas da SPA);
- Vuex (para gerenciar o estado da aplicação);

### Estrutura de pastas
O projeto está organizado com base em feature Pattern no qual existem duas pastas principais, sendo uma para configuração geral da aplicação e outra para as funcionalidades.
#### System
A pasta system é responsável pela configuração da aplicação, nela encontram-se os componentes genéricos sejam eles de nível atômico (inputs, buttons, etc) até de layouts e templates do sistema.

Para a componentização optou-se por envolver os componentes da biblioteca Vuetify em novos (presentes em <code>componentes/base</code>) de forma a facilitar a substituição por componentes de outras bilbioteca e/ou desenvolvimento de componentes próprios.

Ainda na pasta system temos as configurações de rota da aplicação, estado e clientes para requests.

#### Modules
A pasta modules ficou com a responsabilidade de isolar cada funcionalidade do sistema com a finalidade de evitar causar interdepência entre componentes de responsabilidades diferentes, facilitando assim a manutenção da aplicação.

Cada módulo contém uma pasta <code>view</code> que é responsável pelas páginas da aplicação, bem como também pela pasta <code>components</code> no qual contém os elementos em tela.

Tentou-se priorizar a técnica de split-code realizando a importação assíncrona de componentes quando possível fazendo assim que os chunks fiquem menores.