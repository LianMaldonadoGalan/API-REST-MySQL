
create table tasks(
    id int(11) NOT NULL AUTO_INCREMENT,
    task_title varchar(50) NOT NULL,
    task_desc varchar(200) NOT NULL,
    task_status varchar(12) NOT NULL,
    due_date date NOT NULL,
    commentaries varchar(50) DEFAULT NULL,
    responsible varchar(50) DEFAULT NULL,
    tags varchar(50) DEFAULT NULL,
    PRIMARY KEY (id)
);


INSERT INTO tasks (task_title, task_desc, task_status, due_date, commentaries, responsible, tags
) values ('Reports', 'Create new reports for the upcoming week', 'PENDING', '2017-06-15', 'No comments', 'Edgar Hernandez', 'Tags here')