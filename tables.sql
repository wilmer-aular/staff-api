create database if not exists company;
use company;

create table staffs (
  id int primary key auto_increment,
  name varchar(100),
  lastname varchar(100),
  username varchar(100),
  phone varchar(100),
  email varchar(100),
  password varchar(100),
  type varchar(100),
  notes varchar(255),
  address varchar(255),
 salary double,
 created_date timestamp default current_timestamp()
);

create table staffing (
  id int primary key auto_increment,
  name varchar(100),
  notes varchar(255),
 created_date timestamp default current_timestamp()
);

