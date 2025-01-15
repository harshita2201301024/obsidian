```sql
CREATE TABLE student (
  id INT,
  first_name varchar(255),
  last_name varchar(255)
);
INSERT INTO student (id, first_name, last_name) VALUES (1, 'Greg', 'Bender');
INSERT INTO student (id, first_name, last_name) VALUES (2, 'Frank', 'Bender');
INSERT INTO student (id, first_name, last_name) VALUES (3, 'Tom', 'Frank');
INSERT INTO student (id, first_name, last_name) VALUES (4, 'Amy', 'Bender');
INSERT INTO student (id, first_name, last_name) VALUES (5, NULL, 'Bender');



CREATE TABLE course (
  id INT,
  name varchar(255)
);
INSERT INTO course (id, name) VALUES (1, 'Math');
INSERT INTO course (id, name) VALUES (2, 'ELA');
INSERT INTO course (id, name) VALUES (3, 'Music');



CREATE TABLE registry (
  student_id INT,
  course_id INT,
  semester INT
);


# add first semester
INSERT INTO registry (student_id, course_id, semester) VALUES (1, 3, 1);
INSERT INTO registry (student_id, course_id, semester) VALUES (1, 1, 1);
INSERT INTO registry (student_id, course_id, semester) VALUES (2, 1, 1);
INSERT INTO registry (student_id, course_id, semester) VALUES (3, 1, 1);
INSERT INTO registry (student_id, course_id, semester) VALUES (4, 1, 1);

# add second semester
INSERT INTO registry (student_id, course_id, semester) VALUES (1, 3, 2);


```