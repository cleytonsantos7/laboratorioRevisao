create table editoras (
  id serial primary key,
  nome text not null,
  cnpj text unique,
  data_cadastro timestamp default now()
);
