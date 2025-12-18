-- Criar tabela 'Usuarios'

create table usuarios (
	id int auto_increment primary key,
    nome varchar(120) not null,
    email varchar(140) not null,
    idade varchar(10),
    endereco varchar(200)
);

insert into usuarios (nome, email, idade, endereco) values
	('Luana', 'luana@gmail.com', '25', 'Rua São Domingos'),
    ('Frederick', 'fred@gmail.com', '52', 'Rua das Flores'),
    ('Jhon', 'Jhon@gmail.com', '85', 'Rua São tomé'),
    ('Sabrina Santos', 	'sabrinasantos@gmail.com', '15', 'Rua São Paulo'),
    ('Stefany Viveiros', 'stefany@gmail.com', '27', 'Rua Avenida'),
    ('Lucas Moreira', 'lucas@gmail.com', '13', 'Rua Campos'),
    ('Fernanda Santos', 'fernandasantos@gmail.com', '35', 'Rua Fernandes'),
    ('Luana Tamires', 'luanatami@gmail.com', '58', 'Rua João 10'),
    ('Adriano Camargo', 'adrianocamargo@gmail.com', '48', 'São Domingos');
    
select * from  usuarios