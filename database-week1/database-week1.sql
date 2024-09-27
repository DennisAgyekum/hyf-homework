-- Active: 1724726987336@@127.0.0.1@3306@hyf_lesson1
-- 1 task. Selects all tasks from task table
SELECT COUNT(*) FROM task -- 35 tasks

-- 2 task. Selects all tasks from task table where due_date is null
SELECT COUNT(*) FROM task WHERE due_date IS NULL -- 8 tasks

-- 3 task. Selects all tasks from task table where status_id is 3(Done)
SELECT task.*
FROM task
JOIN status ON task.status_id = status.id
WHERE status.name = 'Done'; -- 12 tasks

-- 4 task. Selects all tasks from task table where status_id is not 3(Done)
SELECT task.* 
FROM task 
JOIN status ON task.status_id = status.id 
WHERE status.name != 'Done'; -- 23 tasks

-- 5 task. Selects all tasks from task table where created is the most recent
SELECT t.*
FROM task t
JOIN (
    SELECT DISTINCT created
    FROM task
    ORDER BY created DESC
    LIMIT 5
) AS recent_dates ON t.created = recent_dates.created
ORDER BY t.created DESC; -- 35 tasks

-- 6 task. Selects the single most recently created task
SELECT * 
FROM task 
WHERE created = (
    SELECT MAX(created) 
    FROM task
) ; -- 1 task

-- 7 task. Selects all tasks from task table where title or description contains database
SELECT * FROM task WHERE title LIKE '%database%' OR description LIKE '%database%'; -- 5 tasks

-- 8 task. Gets the title and status (as text) of all tasks
SELECT title, status.name FROM task JOIN status ON task.status_id = status.id; -- 35 tasks

-- 9 task. Gets the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(*) FROM task JOIN status ON task.status_id = status.id GROUP BY status.name; -- 3 statuses

-- 10 task. Gets the names of all statuses, sorted by the status with most tasks first
SELECT s.name AS status_name, COUNT(t.id) AS task_count
FROM status s
JOIN task t ON s.id = t.status_id
GROUP BY  s.name
ORDER BY COUNT(t.id) DESC; -- 3 statuses

