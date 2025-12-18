-- Cria um banco de dados onde vamos trabalhar--
create database sistema_produtos;

use sistema_produtos;

-- Cria a tabela 'produtos' com algumas colunas básicas
create table produtos (
	id int auto_increment primary key, -- ID Único
    nome varchar(100) not null, -- Nome produto--
    email varchar(120) not null, -- Email--
    telefone varchar(20), -- Telefone--
    cpf varchar(14), -- Cpf --
    endereco varchar(150) -- Endereço--
    
);

-- Insere  dois registros
insert into produtos (nome, email, telefone, cpf, endereco) values
	('Eduardo Ramos', 'eduramos@gmail.com', '125555555', '419.568.774-8', 'Rua loucos'),
    ('Juliana', 'juliana@gmail.com', '86695566', '879.652.236-8', 'Rua Senai');
    
-- Seleciona o registro onde o id = 1
select * from produtos where id = 9;

-- Delete o registro onde o id = 1--
delete from produtos where id = 3;



insert into produtos (nome, email, telefone, cpf, endereco) values
('Stefany viveiros', 'viveirosstefany@gmail.com', '4588996636', '1149876665', 'Rua Senai');

select * from produtos;

-- Atualizar o nome por id
update produtos 
set nome = 'Stefany Barbosa Dev'
where id = 9