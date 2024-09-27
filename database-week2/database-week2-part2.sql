
-- 1. Create class table
CREATE TABLE `Class` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE,
    ends DATE
);
-- 2. Create students table
CREATE TABLE Student (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES `Class`(id)
);

-- 3. Create an index on the name column of the student table.
CREATE INDEX idex_student ON Student (name);

-- 5. Add status column to class table 
ALTER TABLE `Class`
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';
