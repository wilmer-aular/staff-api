create database if not exists personal;
use personal;

create table staffs (
  id int primary key auto_increment,
  name varchar(100),
 salary double,
 created_date timestamp default current_timestamp()
);

create table staffings (
  id int primary key auto_increment,
  name varchar(100),
  notes varchar(255),
 created_date timestamp default current_timestamp()
);

create table users (
  id int primary key auto_increment,
  user_name varchar(255) unique not null,
  email varchar(255) unique not null,
  password varchar(255) unique not null,
 created_date timestamp default current_timestamp()
);
