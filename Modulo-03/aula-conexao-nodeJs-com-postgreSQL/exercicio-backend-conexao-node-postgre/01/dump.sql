create database biblioteca

create table "autores" (
  id SERIAL PRIMARY KEY,
  nome varchar(255) NOT NULL,
  idade integer NULL
);

create table "livros" (
  id SERIAL PRIMARY KEY,
  nome varchar(255) NOT NULL,
  genero varchar (255) default null,
  editora varchar (255) default null,
  data_publicacao date,
  autor_id integer references autores(id)
);