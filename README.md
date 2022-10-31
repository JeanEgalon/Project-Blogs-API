# Boas-vindas ao repositório do projeto API de Blogs!

# Entregáveis

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido?</strong></summary>

  Neste projeto desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog! 

  Nele construi uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Desenvolvi endpoints que estão conectados ao banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessário usuário e login, onde foi trabalhada a **relação entre** `user` e `post`; 

  3. Foi utilizada também as categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.

<br />
</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary>

1. Clone o repositório
  * `git@github.com:JeanEgalon/Project-Blogs-API.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-022-a-project-blogs-api`

2. Instale as dependências
  * `npm install`

<br />
</details>

<details>
  <summary  id="diagrama"><strong>🎲 Diagrama ER e Entidades</strong></summary>

  #### Diagrama de Entidade-Relacionamento

  Para orientar a construção das tabelas através do ORM, utilize o *DER* a seguir:

  ![DER](./der.png)

  ---

  #### Formato das entidades

  O seu projeto deverá usar o `ORM Sequelize` para criar e atualizar o seu banco de dados. 

  Os primeiros requisitos do projeto devem orientar a produção de suas migrations para gerar:

  - Uma tabela chamada **users**, contendo dados com a seguinte estrutura:

    | id  | display_name    | email           | password | image                                                                                   |
    | --- | --------------- | --------------- | -------- | --------------------------------------------------------------------------------------- |
    | 1   | Brett Wiltshire | brett@email.com // tem quer ser único | 123456   | http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png |

  - Uma tabela chamada **categories**, contendo dados com a seguinte estrutura:

    | id  | name |
    | --- | ---- |
    | 18  | News |

  - Uma tabela chamada **blog_posts**, contendo dados com a seguinte estrutura:

    | id  | title                      | content                                                | user_id | published                | updated                  |
    | --- | -------------------------- | ------------------------------------------------------ | ------- | ------------------------ | ------------------------ |
    | 21  | Latest updates, August 1st | The whole text for the blog post goes here in this key | 14  // Chave estrangeira, referenciando o id de `users`    | 2011-08-01T19:58:00.000Z | 2011-08-01T19:58:51.947Z |


  - Uma tabela chamada **PostCategories**, contendo uma **chave primária composta** utilizando os dois atributos da estrutura:

    | post_id | category_id |
    | ------- | ----------- |
    | 50 // Chave primária e estrangeira, referenciando o id de `BlogPosts`     | 20  // Chave primária e estrangeira, referenciando o id de `Categories`     |


    *Os dados acima são fictícios, e estão aqui apenas como exemplo*

    #### Dicas de scripts prontos

    - Deleta o banco de dados:
    ```json
    "drop": "npx sequelize-cli db:drop"
    ```

    - Cria o banco e gera as tabelas:
    ```json
    "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate"
    ```

    - Insere dados/Popula a tabela:
    ```json
    "seed": "npx sequelize-cli db:seed:all"
    ```
<br />
</details>

<br />

# Requisitos Obrigatórios

## 1 - Crie migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`

- Esse teste fará uma conexão no banco utilizando a configuração de teste do arquivo `src/config/config.js`;
- Suas `migrations` devem estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Suas `migrations` devem respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama).
- Todas as tabelas e colunas devem estar em `snake_case` 

---

## 2 - Crie o modelo `User` em `src/models/User.js` com as propriedades corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama);
- As propriedades podem estar em `camelCase` se `underscored` for `true`. Ou seja, quando os dados forem inseridos ou selecionados via `model` devem estar em `camelCase`, mas quando as _queries_ forem pra o banco os campos das colunas devem estar em `snake_case`.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

---

## 3 - Sua aplicação deve ter o endpoint POST `/login`

- O endpoint deve ser acessível através do URL `/login`;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

---

## 4 - Sua aplicação deve ter o endpoint POST `/user`

- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de adicionar um novo `user` a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    // a imagem não é obrigatória
  }
  ```
---

## :warning: Validando token nas requisições

- Após termos feito o requisito de criação de `users` e o requisito de `login`, alguns requisitos abaixo vão precisar desta autenticação prévia, para que seja possível consumir o endpoint;
- Todo requisito que precisar validar o `token` terá o símbolo ☝;

---

## 5 - Sua aplicação deve ter o endpoint GET `/user`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de trazer todos `users` do banco de dados;

---

## 6 - Sua aplicação deve ter o endpoint GET `/user/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/user/:id`;
- O endpoint deve ser capaz de trazer o `user` baseado no `id` do banco de dados se ele existir;

---

## 7 - Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama).
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

---

## 8 - Sua aplicação deve ter o endpoint POST `/categories`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de adicionar uma nova categoria a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "name": "Typescript"
  }
  ```
---

## 9 - Sua aplicação deve ter o endpoint GET `/categories`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de trazer todas categorias do banco de dados;

---

## 10 - Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama);
- Sua `model` deve respeitar a associação correta *(N:1)* com o modelo `User`;
- As propriedades podem estar em `camelCase` se `underscored` for `true`. Ou seja, quando os dados forem inseridos ou selecionados via `model` devem estar em `camelCase`, mas quando as _queries_ forem pra o banco os campos das colunas devem estar em `snake_case`.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

---

## 11 - Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama);
- Sua `model` deve respeitar a associação correta *(N:N)* entre o modelo `BlogPost` e o modelo `Category`;
- As propriedades podem estar em `camelCase` se `underscored` for `true`. Ou seja, quando os dados forem inseridos ou selecionados via `model` devem estar em `camelCase`, mas quando as _queries_ forem pra o banco os campos das colunas devem estar em `snake_case`.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

---

## 12 - Sua aplicação deve ter o endpoint POST `/post`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post`;
- O endpoint deve ser capaz de adicionar um novo blog post e vinculá-lo às categorias em suas tabelas no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```

---

## 13 - Sua aplicação deve ter o endpoint GET `/post`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post`;
- O endpoint deve ser capaz de trazer todos os blogs post, user dono dele e as categorias do banco de dados;

---

## 14 - Sua aplicação deve ter o endpoint GET `/post/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/:id`;
- O endpoint deve ser capaz de trazer o blog post baseado no `id` do banco de dados se ele existir;

---

## 15 - Sua aplicação deve ter o endpoint PUT `/post/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/:id`;
- O endpoint deve ser capaz de alterar um post do banco de dados, se ele existir;
- Sua aplicação só deve permitir a alteração de um blog post caso a pessoa seja dona dele;
- Sua aplicação não deve permitir a alteração das categorias do post, somente os atributos `title` e `content` podem ser alterados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```

---

# Requisitos Bônus

## 16 - Sua aplicação deve ter o endpoint DELETE `/post/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/:id`;
- O endpoint deve ser capaz de deletar um blog post baseado no `id` do banco de dados se ele existir;
- Sua aplicação só deve permitir a deleção de um blog post caso a pessoa seja dona dele;

---

## 17 - Sua aplicação deve ter o endpoint DELETE `/user/me`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/user/me`;
- O endpoint deve ser capaz de deletar você do banco de dados, baseado no `id` que esta dentro do seu `token`;
- Sua aplicação deve ser capaz de utilizar o token de autenticação nos headers, para saber o user logado correspondente á ser apagado;

---

## 18 - Sua aplicação deve ter o endpoint GET `/post/search?q=:searchTerm`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/search`;
- O endpoint deve ser capaz de trazer os blogs post baseados no `q` do banco de dados, se ele existir;
- Sua aplicação deve ser capaz de retornar um array de blogs post que contenham em seu título ou conteúdo o termo passado na URL;
- Sua aplicação deve ser capaz de retornar um array vázio caso nenhum blog post satisfaça a busca;
- O query params da requisição deverá seguir o formato abaixo:
  ```js
    http://localhost:PORT/post/search?q=vamos
  ```
