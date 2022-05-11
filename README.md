# Seja bem-vindo(a) ao repositório do projeto TrybeSmith!


Este projeto foi elaborado no decorrer do curso de Desenvolvimento Web da Trybe, especificamente no módulo de Back-end.

---

## Objetivo 

---

O objetivo principal deste projeto foi colocar em prática as seguintes habilidades:

  - Declarar variáveis e funções com tipagens _Typescript_;

  - Construir uma _API Node Express_ utilizando o _Typescript_.

---

## Desenvolvimento e tecnologias aplicadas

---



Neste projeto, desenvolvi um **CRUD** (_Create, Read, Update_ e _Delete_) de itens medievais, no formato de uma _API_, utilizando _Typescript_.

Criei também alguns _endpoints_ ( )que irão ler e escrever em um banco de dados, utilizando o **MySQL**.

No projeto esta incluso um arquivo sql, com um banco com três tabelas: pessoas usuárias, produtos e pedidos.

```sql
DROP SCHEMA IF EXISTS Trybesmith;
CREATE SCHEMA Trybesmith;

CREATE TABLE Trybesmith.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  classe TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Trybesmith.Orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  FOREIGN KEY (userId) REFERENCES Trybesmith.Users (id)
);

CREATE TABLE Trybesmith.Products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  orderId INTEGER,
  FOREIGN KEY (orderId) REFERENCES Trybesmith.Orders (id)
);
```
---

