-- CREATE INDEX idx_email ON customer(email);

-- INSERT INTO product_type(name) VALUES('Business');
-- INSERT INTO product_type(name) VALUES ('Casual');
-- INSERT INTO product_type(name) VALUES ('Athletic');

-- SELECT * FROM product_type;


-- INSERT INTO customer
-- (first_name, last_name, email, company, street, city, state, zip, phone, birthdate, sex, date_created)
-- VALUES
-- ('Zaib', 'Khan', 'zaib.khan@gmail.com', 'TechSoft', '12 MG Road', 'Mumbai', 'MH', 400001, '9876543210', '2002-05-14', 'M', '2023-01-10 09:30:00'),
-- ('Ali', 'Sheikh', 'ali.sheikh@gmail.com', 'InnoWorks', '45 Park Street', 'Delhi', 'DL', 110001, '9898989898', '1999-11-22', 'M', '2022-06-15 10:00:00'),
-- ('Sara', 'Ahmed', 'sara.ahmed@gmail.com', 'DesignHub', '78 Lake View', 'Bengaluru', 'KA', 560001, '9123456789', '2000-08-19', 'F', '2023-03-01 11:15:00'),
-- ('Neha', 'Sharma', 'neha.sharma@gmail.com', 'CloudNet', '22 Residency Rd', 'Bengaluru', 'KA', 560025, '9988776655', '1998-02-10', 'F', '2021-12-20 09:00:00'),
-- ('Rahul', 'Verma', 'rahul.verma@gmail.com', 'FinCorp', '91 Civil Lines', 'Jaipur', 'RJ', 302001, '9001122334', '1997-07-07', 'M', '2020-08-05 10:45:00'),

-- ('Amit', 'Patel', 'amit.patel@gmail.com', 'DataSys', '10 Ring Road', 'Ahmedabad', 'GJ', 380001, '9012345678', '1996-01-25', 'M', '2019-04-18 09:20:00'),
-- ('Pooja', 'Mehta', 'pooja.mehta@gmail.com', 'SoftEdge', '55 Ashram Rd', 'Ahmedabad', 'GJ', 380009, '9321122334', '1999-09-14', 'F', '2022-09-12 10:10:00'),
-- ('Arjun', 'Singh', 'arjun.singh@gmail.com', 'BuildTech', '19 Sector 18', 'Noida', 'UP', 201301, '9111222333', '1995-12-30', 'M', '2018-02-01 09:00:00'),
-- ('Riya', 'Kapoor', 'riya.kapoor@gmail.com', 'MediaWorks', '88 Linking Rd', 'Mumbai', 'MH', 400050, '9870011223', '2001-04-05', 'F', '2023-07-01 11:30:00'),
-- ('Karan', 'Malhotra', 'karan.m@gmail.com', 'AutoDrive', '61 Model Town', 'Ludhiana', 'PB', 141002, '9877700011', '1994-06-18', 'M', '2017-11-10 08:45:00'),

-- ('Ananya', 'Iyer', 'ananya.iyer@gmail.com', 'HealthPlus', '7 Anna Salai', 'Chennai', 'TN', 600002, '9445566778', '2000-10-11', 'F', '2022-01-05 09:50:00'),
-- ('Rohit', 'Gupta', 'rohit.gupta@gmail.com', 'TradeLink', '102 GT Road', 'Kanpur', 'UP', 208001, '9300011222', '1993-03-21', 'M', '2016-05-25 10:00:00'),
-- ('Isha', 'Nair', 'isha.nair@gmail.com', 'BioLabs', '14 Marine Drive', 'Kochi', 'KL', 682001, '9495566110', '1998-12-02', 'F', '2021-10-18 11:00:00'),
-- ('Siddharth', 'Joshi', 'sid.joshi@gmail.com', 'LogicTree', '5 FC Road', 'Pune', 'MH', 411004, '9822334455', '1996-09-09', 'M', '2019-07-07 09:30:00'),
-- ('Kavya', 'Rao', 'kavya.rao@gmail.com', 'EduSmart', '33 Jayanagar', 'Bengaluru', 'KA', 560070, '9900112233', '2002-01-16', 'F', '2024-02-01 10:15:00'),

-- ('Manish', 'Chopra', 'manish.chopra@gmail.com', 'RetailPro', '21 Mall Road', 'Chandigarh', 'CH', 160017, '9876540099', '1991-08-08', 'M', '2015-03-12 08:30:00'),
-- ('Nikita', 'Das', 'nikita.das@gmail.com', 'AI Labs', '9 Salt Lake', 'Kolkata', 'WB', 700091, '9830011223', '1999-05-27', 'F', '2022-04-09 10:40:00'),
-- ('Deepak', 'Yadav', 'deepak.y@gmail.com', 'LogiChain', '66 Palam', 'Gurgaon', 'HR', 122015, '9015667788', '1994-11-11', 'M', '2018-06-14 09:10:00'),
-- ('Sneha', 'Kulkarni', 'sneha.k@gmail.com', 'FinAnalytics', '17 Karve Nagar', 'Pune', 'MH', 411052, '9887766554', '2001-03-03', 'F', '2023-08-20 11:00:00'),
-- ('Vikas', 'Bansal', 'vikas.b@gmail.com', 'SteelWorks', '3 Industrial Area', 'Faridabad', 'HR', 121001, '9810012345', '1990-07-19', 'M', '2014-01-15 08:00:00');


INSERT INTO item
(product_id, size, color, picture, price)
VALUES
(1, 38, 'Black', 'img/shirt_black_38.jpg', 999.00),
(1, 40, 'Black', 'img/shirt_black_40.jpg', 999.00),

(2, 7, 'White', 'img/shoes_white_7.jpg', 2999.00),
(2, 8, 'White', 'img/shoes_white_8.jpg', 2999.00),

(3, 30, 'Blue', 'img/jeans_blue_30.jpg', 2199.00),
(3, 36, 'Grey', 'img/jeans_grey_36.jpg', 2399.00),

(4, 6, 'Red', 'img/kids_shoes_red_6.jpg', 1799.00),
(4, 8, 'Blue', 'img/kids_shoes_blue_8.jpg', 1899.00),

(5, 38, 'Green', 'img/jacket_green_38.jpg', 4499.00),
(5, 44, 'Black', 'img/jacket_black_44.jpg', 4799.00),

(6, 39, 'Brown', 'img/formal_brown_39.jpg', 2599.00),
(6, 42, 'Black', 'img/formal_black_42.jpg', 2799.00);

-- INSERT INTO product (type_id, name, supplier, description)
-- VALUES
-- (1, 'T-Shirt', 'Zara', 'Cotton round neck t-shirt'),
-- (1, 'Jeans', 'Levis', 'Slim fit blue denim jeans'),
-- (2, 'Running Shoes', 'Nike', 'Lightweight running shoes'),
-- (2, 'Formal Shoes', 'Bata', 'Black leather formal shoes'),
-- (3, 'Smartphone', 'Samsung', 'Android smartphone with AMOLED display'),
-- (3, 'Laptop', 'Dell', '15-inch business laptop');

S


