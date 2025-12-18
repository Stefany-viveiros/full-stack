-- Criar um banco de dados, com 3 tabelas (cadastro, dados pessoais, usuarios)--

create database cadastro_usuarios;
use cadastro_usuarios;

create table pessoas (
	id int auto_increment primary key,
    nome varchar(120) not null,
    email varchar(140) not null,
    idade varchar(10),
    endereco varchar(200)
);

insert into dados pessoais (nome, email, idade, telefone, nascimento) values;