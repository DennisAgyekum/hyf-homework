--1. Add a Task
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Play video games', 'After work at home', '2024-09-04 14:00', NOW(), '2024-09-06', 1, 7);

--2. Change the Title of a Task
UPDATE task SET title = 'go see a movie' WHERE id = 21;

-- 3. Change a Task Due Date
UPDATE task SET due_date = '2024-11-25' WHERE id = 14;

-- 4. Change a Task Status
UPDATE task SET status_id = (SELECT id FROM status WHERE name LIKE '%done%') 
WHERE id = 4;

-- 5. Mark a Task as Complete
UPDATE task
SET status_id = (SELECT id FROM status WHERE name LIKE '%done%')
WHERE id = 9;

-- 6. Delete a Task
DELETE FROM task WHERE id = 15;