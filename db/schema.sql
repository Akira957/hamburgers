DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
burgerID INT(10) NOT NULL AUTO_INCREMENT,
burder_name VARCHAR(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (burgerID)
);