-- Active: 1724726987336@@127.0.0.1@3306@hyf_lesson1
-- 1 task. Selects all tasks from task table
SELECT COUNT(*) FROM task -- 35 tasks

-- 2 task. Selects all tasks from task table where due_date is null
SELECT COUNT(*) FROM task WHERE due_date IS NULL -- 8 tasks

-- 3 task. Selects all tasks from task table where status_id is 3(Done)
SELECT * FROM task WHERE status_id = 3 -- 12 tasks

-- 4 task. Selects all tasks from task table where status_id is not 3(Done)
SELECT * FROM task WHERE status_id != 3 -- 23 tasks

-- 5 task. Selects all tasks from task table where created is the most recent
SELECT * FROM task ORDER BY created ASC -- 35 tasks

-- 6 task. Selects the single most recently created task
SELECT * FROM task ORDER BY created ASC LIMIT 1; -- 1 task

-- 7 task. Selects all tasks from task table where title or description contains database
SELECT * FROM task WHERE title LIKE '%database%' OR description LIKE '%database%'; -- 5 tasks

-- 8 task. Gets the title and status (as text) of all tasks
SELECT title, status.name FROM task JOIN status ON task.status_id = status.id; -- 35 tasks

-- 9 task. Gets the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(*) FROM task JOIN status ON task.status_id = status.id GROUP BY status.name; -- 3 statuses

-- 10 task. Gets the names of all statuses, sorted by the status with most tasks first
SELECT status.name FROM task JOIN status ON task.status_id = status.id GROUP BY status.name ORDER BY COUNT(*) DESC; -- 3 statuses

