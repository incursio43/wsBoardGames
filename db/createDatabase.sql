create database if not exists boardgames;
use boardgames;
create table if not exists BOARDGAMES(
	ID int auto_increment primary key,
    Name varchar(80) not null,
    Publisher varchar(60) not null,
    Category char(2) not null,
    Description varchar(200) null,
    Year varchar(4) null
);

create table if not exists FAVORITES(
	ID int auto_increment primary key,
    IdBoardgame int not null,
    foreign key(IdBoardgame) references boardgames(ID)
);

insert into boardgames (Name, Publisher, Category, Description, Year) values('Monopoly','Hasbro','FA','Juego de ventas de casas','1935');
insert into boardgames (Name, Publisher, Category, Description, Year) values('Turista','Hasbro','FA','Juego de viajes por el mundo','1935');
insert into boardgames (Name, Publisher, Category, Description, Year) values('Solitario','Hasbro','FA','Juego de viajes por el mundo','1935');

select * from boardgames;