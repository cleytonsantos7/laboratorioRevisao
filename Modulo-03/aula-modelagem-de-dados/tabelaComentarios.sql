create table comentarios (
  id serial primary key,
  descricao text not null,
  comentario_id integer references comentarios (id),
  livro_isbn integer references livros(isbn)
);
