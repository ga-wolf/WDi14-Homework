INSERT INTO posts (title,content) VALUES ("Something racist", "Wow, this is offensive");

DELETE FROM posts WHERE id == 5;

DELETE FROM posts WHERE title == "Something racist";

DELETE FROM posts WHERE content == "Wow, this is offensive";

DELETE FROM posts WHERE content == "Wow, this is offensive" OR title == "Something racist";

DELETE FROM posts WHERE content == "Wow, this is offensive" AND title == "Something racist";
