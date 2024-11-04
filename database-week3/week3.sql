CREATE DATABASE meal;

USE meal;

CREATE TABLE Meal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    location VARCHAR(100),
    `when` DATE NOT  NULL,
    max_reservations INT,
    price DECIMAL(10, 2) NOT NULL,
    created_date DATE
);

CREATE TABLE Reservation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    number_of_guests INT,
    meal_id INT ,
    created_date DATE,
    contact_phonenumber VARCHAR(25),
    contact_name VARCHAR(100),
    contact_email VARCHAR(50) UNIQUE,
    FOREIGN KEY (meal_id) REFERENCES Meal (id)
);

CREATE TABLE Review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    description VARCHAR(255),
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES Meal (id)
);
--Meals

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Thai me up', 'variety of Thai street foods like tom yum', 'Valby', '2024-09-11 16:00:00', 10, 70.00, '2021-05-18 08:00:00');

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Wok Works', 'variety of popular chinese street foods like Dim Sum', 'Gothersgade', '2024-10-15 16:00:00', 8, 80.00, '2022-05-18 15:00:00');

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('French cuisine ', 'variety of popular  french foods like  Cassoulet', 'Amager Torv', '2024-11-15 16:00:00', 4, 40.00, '2022-07-12 09:00:00');

--Reservations

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (10, 1, '2024-09-09 16:00:00', '85955586', 'Kate', 'food@meals.com');

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (8 , 2, '2024-10-11 16:00:00', '859747586', 'Papa Jay', 'Eatfood@meals.com');

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 3, '2024-11-10 16:00:00', '853747586', 'Vike', 'Feedmed@meals.com');

--Reviews
INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Great food', 'I love this food', 1, 5, '2024-09-20 09:00:00');

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Delicious food', 'Great food', 2, 4, '2024-10-16 12:00:00');

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Superb', 'Going to eat there again',3, 5, '2024-11-12 10:00:00');



