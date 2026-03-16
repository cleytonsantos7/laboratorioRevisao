create table enderecos (
  id serial primary key,
  editora_id integer references editoras(id),
  cep text not null,
  rua text,
  bairro text,
  estado char(2),
  pais text
);