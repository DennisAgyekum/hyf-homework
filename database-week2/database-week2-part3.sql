-- 1. Get All Tasks Assigned to Users Whose Email Ends in @spotify.com
SELECT t.*
FROM task t
JOIN user_task ut ON t.id = ut.task_id
JOIN user u ON ut.user_id = u.id
WHERE u.email LIKE '%@spotify.com';

-- 2. Get All Tasks for 'Donald Duck' with Status 'Not started'
SELECT t.*
FROM task t
JOIN user_task ut ON t.id = ut.task_id
JOIN user u ON ut.user_id = u.id
JOIN status s ON t.status_id = s.id
WHERE u.name = 'Donald Duck'
  AND s.name = 'Not started';

-- 3. Get All Tasks for 'Maryrose Meadows' That Were Created in September
SELECT t.*
FROM task t
JOIN user_task ut ON t.id = ut.task_id
JOIN user u ON ut.user_id = u.id
WHERE u.name = 'Maryrose Meadows'
  AND MONTH(t.created) = 09;

-- 4. Find How Many Tasks Were Created in Each Month
select MONTH(created) AS Month_Number, COUNT(*) AS task_per
FROM task
GROUP BY
MONTH(created)
ORDER BY MONTH(created);
