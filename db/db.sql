create table users(
	id BIGSERIAL primary key,
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

select * from users