CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  username TEXT,
  description TEXT
);

INSERT INTO users (first_name, last_name, username, description) VALUES ("Bill", "Withers", "leaning", "What a person");

INSERT INTO users (first_name, last_name, username, description) VALUES ("Django", "Reinhardt", "minor swing", "Stephen Grappelli");

INSERT INTO users (first_name, last_name, username, description) VALUES ("Roger", "Spring", "no idea", "no cleas");
