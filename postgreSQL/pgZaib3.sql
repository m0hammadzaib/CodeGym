-- CREATE TABLE product_type(
--  id SERIAL PRIMARY KEY,
--  name VARCHAR(30) NOT NULL
--  );
 
-- CREATE TABLE product(
--  id SERIAL PRIMARY KEY,
-- type_id INTEGER REFERENCES product_type(id),
--  name VARCHAR(30) NOT NULL,
--  supplier VARCHAR(30) NOT NULL,
--  description TEXT NOT NULL
--  );

-- CREATE TABLE item(
--  id SERIAL PRIMARY KEY,
-- product_id INTEGER REFERENCES product(id),
--  size INTEGER NOT NULL,
--  color VARCHAR(50) NOT NULL,
--  picture VARCHAR(250) NULL,
--  price NUMERIC(6,2) NOT NULL
--  );

-- CREATE TABLE sales_person(
-- id SERIAL PRIMARY KEY,
-- name VARCHAR(30) NOT NULL
-- )

-- CREATE TABLE sales_order(
-- id SERIAL PRIMARY KEY,
--  cust_id INTEGER REFERENCES customer(id),
--  sales_person_id INTEGER REFERENCES sales_person(id),
--  time_order_taken TIMESTAMP NOT NULL,
--  purchase_order_number INTEGER NOT NULL,
--  credit_card_number VARCHAR(16) NOT NULL,
--  credit_card_exp_month SMALLINT NOT NULL,
--  credit_card_exp_day SMALLINT NOT NULL,
--  credit_card_secret_code SMALLINT NOT NULL,
--  name_on_card VARCHAR(100) NOT NULL
--  );

 -- CREATE TABLE sales_item(
 --  item_id INTEGER REFERENCES item(id),
 --  sales_order_id INTEGER REFERENCES sales_order(id),
 --  quantity INTEGER NOT NULL,
 --  discount NUMERIC(3,2) NOT NULL DEFAULT 0,
 --  taxable BOOLEAN NOT NULL DEFAULT FALSE,
 --  sales_tax_rate NUMERIC (5,2) DEFAULT 0,
 --  id SERIAL PRIMARY KEY
 -- );

 -- to add a new column in any table 
-- ALTER TABLE sales_person ADD score VARCHAR(30);  

-- to add something new in column inside the table
-- ALTER TABLE sales_person ALTER COLUMN SET NOT NULL;  

-- to rename column
-- ALTER TABLE sales_person RENAME COLUMN score TO sales_score;

-- to delete the column
-- ALTER TABLE sales_person DROP COLUMN sales_score;

 

