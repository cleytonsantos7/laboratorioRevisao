create table livro_categoria (
  livro_isbn integer references livros(isbn),
  categoria_id integer references categorias(id)
);
