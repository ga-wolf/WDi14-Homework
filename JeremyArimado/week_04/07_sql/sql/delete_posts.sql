INSERT INTO posts (title, content) VALUES ('racist', 'lol');

DELETE FROM posts WHERE title == 'racist';

DELETE FROM posts WHERE title == 'racist' OR content == 'blah' ;
