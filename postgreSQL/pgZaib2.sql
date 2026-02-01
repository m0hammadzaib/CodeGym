-- ALTER TABLE customer
-- ALTER COLUMN sex TYPE sex_type USING sex::sex_type;

CREATE TABLE customer(
 id SERIAL PRIMARY KEY,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 email VARCHAR(60) NOT NULL,
 company VARCHAR(60) NOT NULL,
 street VARCHAR(50) NOT NULL,
 city VARCHAR(50) NOT NULL,
 state VARCHAR(3) NOT NULL DEFAULT 'NA',
 zip INT  NOT NULL,
 phone VARCHAR(20) NOT NULL,
 birthdate DATE NOT NULL,
 sex sex_type NOT NULL,
 date_hired TIMESTAMP NOT NULL
);
