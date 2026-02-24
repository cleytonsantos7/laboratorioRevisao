count

select count(*) from usuarios where idade >= 18

alias

select count(*) as quantidadeUsuarios from usuarios where idade >= 18

select *, nome as nomeCompleto from usuarios where idade >= 18

concat

select nome || ' - ' || email as nomeEmail from usuarios;

select concat(nome, ' - ', email, ' - ', idade) as nome_email_idade from usuarios;

avg e round

select avg(idade) from usuarios;

select round(avg(idade)) from usuarios;

select round(avg(idade), 2) from usuarios;

min e max

select min(idade) from usuarios;

select min(nome) from usuarios;

select min(cadastro) from usuarios;

select max(idade) from usuarios;

select max(nome) from usuarios;

select max(cadastro) from usuarios;

sum

select sum(idade) from usuarios;

cast

select idade::text from usuarios;

select cast(idade as text) from usuarios;

now

select now();

select * from agendamentos where cast(agendamento as date) > now();

select * from agendamentos where cast(agendamento as timestamp) > now();

select cast(agendamento as date) from agendamentos;

select cast(agendamento as time) from agendamentos;

select cast(agendamento as timestamp) from agendamentos;

age

select age('2022-03-16 12:00:00', '2021-02-15 11:32:34');

select age('2022-03-16 12:00:00', '2025-02-15 11:32:34');

select age('2022-03-16 12:00:00', now());

select age(cast('2022-03-16 12:00:00' as timestamp));

select age(cast('2022-03-16 12:00:00' as date));

select *, age(cast(agendamento as timestamp)) from agendamentos where cast(agendamento as timestamp) < now();

coalesce

select coalesce(NULL, NULL, 'batata')

select concat(nome, ' - ', coalesce(telefone, 'Não possui telefone')) from usuarios;

select concat(nome, ' - ', coalesce(telefone, email, 'Não possui')) from usuarios;

group by

select idade, count(id) from usuarios group by idade;

select idade, count(id), sum(idade) from usuarios group by idade;