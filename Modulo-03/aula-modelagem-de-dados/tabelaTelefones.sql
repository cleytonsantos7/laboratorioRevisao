create table telefones (
  id serial primary key,
  editora_id integer references editoras(id),
  numero text
);

