# desafio-W3lcome-fullstack

Esse projeto foi desenvolvido para um teste técnico!
O desafio foi desenvolver uma aplicação fullstack de um To Do List utilizando Typescript, React e Nodejs.

Aqui você vai encontrar os detalhes de como foi o desenvolvimento do projeto e quais foram os requisitos técnicos necessários para a entrega do desafio.

# Descrição:
Aplicação Fullstack onde é possivel realizar um CRUD de um To Do List com backend e frontend integrados.

# Habilidades desenvolvidas

Neste projeto, fui capaz de:

- Utilizar o banco de dados relacional MySQL;
- Utilizar o ORM Sequelize para trabalhar com o banco de dados MySQL;
- Construir uma API CRUD com Node.js e Express;
- Criar rotas para uma API com Express;
- Desenvolver Testes de Integração no backend;
- Estilizar uma página web com CSS;
- Desenvolver aplicação Frontend com React e Typescript;
   
---

# Funcionamento da aplicação

Para iniciar o projeto, é necessário possuir o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

⚠ **Atenção:** ⚠
- Deve-se mudar as variáveis de ambientes localizadas no docker-compose na raiz do projeto e no .env no diretório do ./server.

**Instalação de dependências na raiz do projeto:** 

```
git clone git@github.com:kaioruan/desafio-w3lcome.git
```

**Utilizando o docker**

```
docker-compose up
```


Após isso, você pode acessar a aplicação através do endereço http://localhost:3000/.

# Sobre os testes
## Executando todos os testes

Para poder executar os testes, na raiz, utilize o comando o comando `npm run test` e **todos** os seus testes serão executado.

---

<p align="center">
<img src="./image.png" width="600px" />
</p>

## 📚 Documentação (endpoints BACKEND)
### 🗒️ ADmin
| Método | Funcionalidade                              | URL                              |
| ------ | ------------------------------------------- | -------------------------------- |
| `GET`  | Retorna uma lista de todas as tarefas cadastradas.| http://localhost:3001/tasks |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
[
  {
    "id": 1,
    "titulo": "Aprender React",
    "concluida": 1
  },
  {
    "id": 2,
    "titulo": "Estudar NodeJS",
    "concluida": 0
  },
  {
    "id": 3,
    "titulo": "Praticar TypeScript",
    "concluida": 0
  }
]
```

</details>
<br>
<br>

| Método | Funcionalidade                                | URL                              |
| ------ | --------------------------------------------- | -------------------------------- |
| `POST` | Adiciona uma nova tarefa. | http://localhost:3001/tasks |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
  {
    "titulo": "Aprender Java",
    "concluida": 1
  }
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>

```json
{
  "id": 4,
  "titulo": "Aprender Java",
  "concluida": true
}
```

</details>
<br>

| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `PATCH`  | Atualiza uma task. | http://localhost:3001/tasks/:id |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
  {
    "titulo": "Aprender Java",
    "concluida": 0
  }
```

</details>

<details>
  <summary>A requisição retorna o status 200 de concluido.</summary>
<br>
| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `DELETE`  | Deleta uma task do banco de dados. | http://localhost:3001/tasks/:id |

<details>
  <summary>A resposta da requisição é o status 200.</summary>


</details>
<br>
<br>