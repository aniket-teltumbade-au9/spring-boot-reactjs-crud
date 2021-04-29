# Spring boot + reactjs CRUD App
## Configuration
1. Start and configure mysql server (Run following Commands)
- > create database employee;

- > use employee;

- > create table employees(cid int not null auto_increment,name varchar(45),email varchar(45) unique, department varchar(45),role varchar(45),salary float, primary key(cid));
2. Start Spring boot server (EmployeeApp folder)
- > windows (cmd)
````
mvnw spring-boot:run
````
- > Mac/linux (bash)
````
./mvnw spring-boot:run
````
3. Start react app (employee-frontend folder)
- > npm start