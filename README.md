# OxLabs

![Logo](https://raw.githubusercontent.com/hardcore3m/oxlabs/main/src/public/img/logo.png)

Aplicação para listagem de ferramentas, documentações, artigos e exemplos de códigos para aprimoramento e desempenho no desenvolvimento e busca de artigos, notícias e informações sobre tecnologia da informação

## Funcionalidades

### Disponíveis sem autenticação

- Listar e ler comandos e funções de aplicações
- Listar e ler notícias e artigos sobre TI
- Listar sites, ferramentas e utilidades
- Utilizar listas e ferramentas

### Disponíveis a usuários

- CRUD  de comandos, notícias, funções(microserviços), tutoriais, ferramentas, pacotes, etc.

### Disponíveis a moderadores

- CRUD  de Categorias, Tipos e modos de classificação
- Revogação ou alteração de status de usuário

### Disponíveis a Administradores

- Conceder e revogar privilégios a moderadores e administradores
- Alterar diretamente o objeto Usuário

## Desenvolvimento

### Ambiente

NodeJs

### Database

MongoDb

### Dependências

bcryptjs, cookie-session, cors, express, jsonwebtoken, mongoose, uuid

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/hardcore3m/api-node-mongodb.git
```

Entre no diretório do projeto

```bash
  cd api-node-mongodb
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

## Documentação da API

#### Autenticação de usuário

```http
  POST /api/auth/signin
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**  |
| `password` | `string` | **Obrigatório**  |

#### Inscrição de usuário

```http
  POST /api/auth/signup
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**  |
| `email` | `string` | **Obrigatório**  |
| `password` | `string` | **Obrigatório**  |
| `roles` | `array` | Retorna como padrão a role "user"  |

```http
  POST /api/auth/signout
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**  |

| header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `x-access-token` | **Cookie Obrigatório**  |

#### Retorna um item

```http
  GET /api/test/user
```

| header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `x-access-token` | **Cookie Obrigatório**  |

```http
  GET /api/test/mod
```

| header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `x-access-token` | **Cookie Obrigatório** acesso somente a moderadores  |

```http
  GET /api/test/admin
```

| header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `x-access-token` | **Cookie Obrigatório** Acesso somente a administradores  |
