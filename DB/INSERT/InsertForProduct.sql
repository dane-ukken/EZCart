INSERT INTO Category (CategoryName) VALUES
('Electronics'),
('Home & Garden'),
('Fashion'),
('Sports & Outdoors');

INSERT INTO Subcategory (CategoryId, SubcategoryName) VALUES
(1, 'Cell Phones'),
(1, 'Computers'),
(1, 'TVs & Home Theater'),
(1, 'Camera & Photo'),
(1, 'Headphones'),
(2, 'Furniture'),
(2, 'Kitchen & Dining'),
(2, 'Bedding & Bath'),
(2, 'Home Decor'),
(2, 'Appliances'),
(3, 'Men Clothing'),
(3, 'Women Clothing'),
(3, 'Shoes'),
(3, 'Jewelry'),
(3, 'Watches'),
(4, 'Camping & Hiking'),
(4, 'Fishing'),
(4, 'Cycling'),
(4, 'Exercise & Fitness'),
(4, 'Team Sports');

INSERT INTO Product (ProductName, ProductDescription, ImageUrl, SubcategoryId) VALUES
('Samsung Galaxy S21', '6.2" 128GB 5G Unlocked Android Smartphone', 'https://example.com/samsung-galaxy-s21.jpg', 1),
('Apple iPhone 12 Pro', '6.1-inch 128GB 5G Unlocked Smartphone', 'https://example.com/apple-iphone-12-pro.jpg', 1),
('Google Pixel 5', '5G Android Smartphone with 128GB Storage', 'https://example.com/google-pixel-5.jpg', 1),
('HP Pavilion 15.6"', 'Intel Core i5-1135G7 8GB RAM 512GB SSD', 'https://example.com/hp-pavilion.jpg', 2),
('Lenovo ThinkPad X1 Carbon', '14-inch FHD Laptop with Intel Core i7-10510U', 'https://example.com/lenovo-thinkpad.jpg', 2),
('Dell XPS 13', '13.4-inch FHD Laptop with Intel Core i7-1165G7', 'https://example.com/dell-xps-13.jpg', 2),
('LG OLED TV', '55-inch 4K UHD Smart OLED TV with HDR', 'https://example.com/lg-oled-tv.jpg', 3),
('Sony 65" Class X80J', '4K Ultra HD LED Smart Google TV', 'https://example.com/sony-x80j.jpg', 3),
('Samsung 75" QLED Q80A', '4K UHD Smart TV with Alexa Built-in', 'https://example.com/samsung-qled-q80a.jpg', 3),
('Nikon D780', '24.5 MP Full Frame DSLR Camera with AF-S NIKKOR 24-120mm VR Lens', 'https://example.com/nikon-d780.jpg', 4),
('Sony Alpha A7 III', '24.2 MP Full Frame Mirrorless Camera with 28-70mm Lens', 'https://example.com/sony-alpha-a7.jpg', 4),
('Canon EOS R6', '20.1 MP Full Frame Mirrorless Camera with RF 24-105mm f/4L IS USM Lens', 'https://example.com/canon-eos-r6.jpg', 4),
('Bose QuietComfort 35 II', 'Wireless Noise Cancelling Headphones with Alexa Voice Control', 'https://example.com/bose-quietcomfort.jpg', 5),
('Apple AirPods Pro', 'Active Noise Cancellation for Immersive Sound', 'https://example.com/apple-airpods-pro.jpg', 5),
('Sony WH-1000XM4', 'Noise Cancelling Wireless Headphones with Mic', 'https://example.com/sony-wh-1000xm4.jpg', 5),
('Serta iComfort CF1000', 'Queen Size Mattress with Cooling Gel Memory Foam', 'https://example.com/serta-icomfort-cf1000.jpg', 6),
('Keurig K-Elite', 'Single Serve Coffee Maker with Iced Coffee Capability', 'https://example.com/keurig-k-elite.jpg', 6),
('Ninja Foodi', '9-in-1 Deluxe XL Pressure Cooker & Air Fryer', 'https://example.com/ninja-foodi.jpg', 7),
('AmazonBasics Microfiber Sheet Set', '4-Piece Queen Set - Dark Grey', 'https://example.com/amazonbasics-sheet-set.jpg', 8)

;

INSERT INTO Product (ProductName, ProductDescription, ImageUrl, SubcategoryId) VALUES
('Refrigerator', 'A spacious and energy-efficient refrigerator that will keep your food fresh', 'https://example.com/refrigerator.jpg', 10),
('Washing Machine', 'A high-performance washing machine that will make laundry day a breeze', 'https://example.com/washing-machine.jpg', 10),
('Microwave Oven', 'A compact and powerful microwave oven that will help you prepare quick and delicious meals', 'https://example.com/microwave-oven.jpg', 10);

INSERT INTO Product (ProductName, ProductDescription, ImageUrl, SubcategoryId) VALUES
('Men Dress Shirt', 'A stylish and comfortable dress shirt that will make you look sharp for any occasion', 'https://example.com/mens-dress-shirt.jpg', 12),
('Men Casual T-Shirt', 'A casual and comfortable t-shirt that will keep you cool and relaxed on hot days', 'https://example.com/mens-t-shirt.jpg', 12),
('Men Leather Shoes', 'A pair of high-quality leather shoes that will complete your formal attire', 'https://example.com/mens-leather-shoes.jpg', 12);

INSERT INTO Product (ProductName, ProductDescription, ImageUrl, SubcategoryId) VALUES
('Women Cocktail Dress', 'A beautiful and elegant cocktail dress that will make you stand out at any party', 'https://example.com/womens-cocktail-dress.jpg', 13),
('Women Jeans', 'A comfortable and stylish pair of jeans that will become your go-to for any casual occasion', 'https://example.com/womens-jeans.jpg', 13),
('Women Ankle Boots', 'A pair of versatile and fashionable ankle boots that will complement any outfit', 'https://example.com/womens-ankle-boots.jpg', 13);

INSERT INTO Product (ProductName, ProductDescription, ImageUrl, SubcategoryId) VALUES
('Running Shoes', 'A comfortable and supportive pair of running shoes that will help you achieve your fitness goals', 'https://example.com/running-shoes.jpg', 14),
('Fitness Tracker Watch', 'A sleek and feature-packed fitness tracker watch that will help you monitor your health and activity', 'https://example.com/fitness-tracker-watch.jpg', 14),
('Men Cycling Jersey', 'A lightweight and breathable cycling jersey that will keep you comfortable and cool on long rides', 'https://example.com/mens-cycling-jersey.jpg', 14);
