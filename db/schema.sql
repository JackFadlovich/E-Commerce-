DROP DATABASE IF EXISTS ecommerse_db;
CREATE DATABASE ecommerse_db;

\c ecommerse_db;

CREATE TABLE user_information (
    user_ID SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    phone_number INTEGER,
    buyer_rating INTEGER,
    seller_rating INTEGER
);

CREATE TABLE seller (
    seller_ID SERIAL PRIMARY KEY,
    FOREIGN KEY (user_ID)
    REFERENCES user_information (user_ID)
);

CREATE TABLE buyer (
    buyer_ID SERIAL PRIMARY KEY,
    FOREIGN KEY (user_ID)
    REFERENCES user_information (user_ID)
);

CREATE TABLE product_information (
    product_ID SERIAL PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    category VARCHAR(30) NOT NULL,
    product_description VARCHAR(255) NOT NULL,
    price INTEGER,
    manufacturer VARCHAR(50) NOT NULL,
    product_rating INTEGER
);



CREATE TABLE orders (
    order SERIAL PRIMARY KEY,
    shipping_information VARCHAR(50) NOT NULL, 
    FOREIGN KEY (buyer_ID)
    REFERENCES buyer (buyer_ID)   
);

