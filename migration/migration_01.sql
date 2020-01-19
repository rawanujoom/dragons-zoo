CREATE TABLE zoo_location (
	id SERIAL PRIMARY KEY,
	location TEXT
);
CREATE TABLE dragon (
	id SERIAL PRIMARY KEY,
	name TEXT,
	color TEXT,
	fav_food TEXT,
	location_id INTEGER,
	FOREIGN KEY (location_id) REFERENCES zoo_location (id)
);
INSERT INTO zoo_location VALUES (1, 'By River');
INSERT INTO zoo_location VALUES (2, 'By Trees');
INSERT INTO zoo_location VALUES (3, 'In Cage');
INSERT INTO dragon VALUES (1, 'dragon1', 'blue', 'chocolate', 1);
INSERT INTO dragon VALUES (2, 'dragon2', 'green', 'icecream', 2);
INSERT INTO dragon VALUES (3, 'dragon3', 'yellow', 'grass', 3);