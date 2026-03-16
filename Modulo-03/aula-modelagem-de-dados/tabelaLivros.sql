create table livros (
  isbn integer primary key,
  editora_id integer references editoras(id),
  titulo text not null,
  data_publicacao date not null
);