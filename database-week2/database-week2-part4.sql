CREATE DATABASE Regent Hotel;

USE Hotel

SET NAMES utf8mb4;

CREATE TABLE Hotel (
    hotelID INT PRIMARY KEY AUTO_INCREMENT,
    hotelName VARCHAR(100),
    hotelAddress VARCHAR(100)
    Phone VARCHAR(15),
    checkinTime TIME,
    checkoutTime TIME
    );
    

CREATE TABLE Customers (
    customerId INT PRIMARY KEY,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    dateOfBirth DATE,
    email VARCHAR(50),
    phoneNumber VARCHAR(20),
);


CREATE TABLE Bookings (
    bookingId INT PRIMARY KEY,
    customerId INT,
    roomNumber INT,
    checkinDate DATE,
    checkoutDate DATE,
    totalPrice DECIMAL(10, 2),
    FOREIGN KEY (customerId) REFERENCES Customers(customerId),
    FOREIGN KEY (roomNumber) REFERENCES Room(roomNumber)   
);

CREATE TABLE RoomType (
    typeId INT PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(255),
    pricePerNight DECIMAL(10, 2),
    capacity INT
);

CREATE TABLE Room (
    roomNumber INT PRIMARY KEY,
    hotelId INT,
    typeId INT,
    Status VARCHAR(20),
    FOREIGN KEY (hotelId) REFERENCES Hotel(hotelId),
    FOREIGN KEY (typeId) REFERENCES RoomType(typeId)
);

CREATE TABLE Payment (
    paymentId INT PRIMARY KEY,
    bookingId INT,
    amount DECIMAL(10, 2),
    paymentDate DATE,
    paymentMethod VARCHAR(50),
    FOREIGN KEY (bookingId) REFERENCES Booking(bookingId)
);

