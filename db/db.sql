create table users(
	idUser BIGSERIAL primary key,
	username varchar(255) not null unique,
	name varchar(255) not null,
	lastname varchar(255) not null,
	password varchar(255) not null,
	is_available boolean null,
	session_token varchar(255) null
);


insert into users(
	username,
	name,
	lastname,
	password
)
values(
	'jona@gmail.com',
	'Jona',
	'Goyes',
	'123456'
);



create table sesion(
	idSession BIGSERIAL primary key,
	idUser bigint not null,
	fecha date null,
	starthora time null,
	closinghora time null,
	FOREIGN KEY (idUser) REFERENCES users (idUser)
);


insert into sesion(
	idUser,
	fecha,
	starthora
)
values(
	1,
	NOW(),
	NOW()
);


update sesion set closinghora = now()
where idSession = 1



select * from users
select * from sesion
