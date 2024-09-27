
--1. Meal

-- Get all meals
SELECT * FROM Meal;

-- Add a new meal
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Jollof', 'Rice cooked in tomato sauce', 'Nørrebro', '2024-06-21 16:00:00', 5, 90.00, '2021-05-18 09:00:00');

--Get a meal with any id, fx 1
SELECT * FROM Meal WHERE id = 2;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal 
SET title = 'Arabian Night',  
description = 'A variety of Arabian food like Baba Falafel Platter',
price = 20.00
WHERE id = 4;

-- Delete a meal with any id, fx 1
DELETE FROM Meal WHERE id = 3

-----------------------------------

-- 2. Reservation

-- Get all reservations
SELECT * FROM Reservation;

--Add a new reservation
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (5, 2, '2021-05-18 08:00:00', '555547586', 'Ray', 'foodgame@meals.com');

--Get a reservation with any id, fx 1
SELECT * FROM Reservation WHERE id = 2;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation SET number_of_guests = 8,
contact_name = 'Dennis'
WHERE id = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM Reservation WHERE id = 3

------------------------------

-- 3. Review

-- Get all reviews
SELECT * FROM Review;

-- Add a new review
INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Nice Food', 'I love this food', 4, 4, '2024-06-23 12:00:00');

-- Get a review with any id, fx 1
SELECT * FROM Review WHERE id = 2;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review SET title = 'OK food',  
description = 'Cheap and ok',
stars = 3
WHERE id = 3;

-- Delete a review with any id, fx 1
DELETE FROM Review WHERE id = 1;


-----------------------------

-- 4. Additional queries

--Get meals that has a price smaller than a specific price fx 90
SELECT * FROM `Meal` WHERE `price` < 70;

--Get meals that still has available reservations-----
select Meal.id, Meal.max_reservations, Meal.title, COALESCE(
        SUM(Reservation.number_of_guests), 0
    ) AS sum_of_guests
FROM `Meal`
    LEFT JOIN `Reservation` ON Meal.id = `Reservation`.meal_id
GROUP BY
    Meal.id,
    Meal.max_reservations,
    Meal.title
HAVING
    sum_of_guests < Meal.max_reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM `Meal` WHERE `title` LIKE '%hai%';

-- Get meals that has been created between two dates
SELECT * FROM `Meal` WHERE `created_date` BETWEEN '2022-05-16' AND '2022-12-01';

--Get only specific number of meals fx return only 5 meals
SELECT * FROM `Meal` LIMIT 2;


--Get the meals that have good reviews
SELECT Meal.title, Meal.id, ROUND(AVG(Review.stars), 2) AS avg_stars
FROM Meal
LEFT JOIN Review ON Meal.id = Review.meal_id
GROUP BY Meal.id, Meal.title
HAVING AVG(Review.stars) >= 3;


--Get reservations for a specific meal sorted by created_date
select * from `Reservation` WHERE meal_id = 1 ORDER BY created_date;



--Sort all meals by average number of stars in the reviews
select Meal.id, Meal.description, Meal.location, ROUND(AVG(Review.stars), 2) AS avg_stars
FROM Meal
    LEFT JOIN Review ON Meal.id = Review.meal_id
GROUP BY
    Meal.id
ORDER BY avg_stars;

