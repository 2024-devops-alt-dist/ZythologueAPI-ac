INSERT INTO Breweries (name, country, created_at) 
VALUES 
('La Chouffe', 'Belgium', '1985-08-12'),
('Guinness', 'Ireland', '1759-09-24'),
('Heineken', 'Netherlands', '1864-02-15'),
('Budweiser', 'USA', '1876-03-28'),
('Carlsberg', 'Denmark', '1847-11-10'),
('Pilsner Urquell', 'Czech Republic', '1842-10-05'),
('Stella Artois', 'Belgium', '1926-07-13'),
('Chimay', 'Belgium', '1862-12-25'),
('Duvel', 'Belgium', '1871-12-31'),
('Leffe', 'Belgium', '1152-01-01');

INSERT INTO Categories (name)
VALUES 
('Lager'),
('Ale'),
('Stout'),
('Porter'),
('Pilsner'),
('IPA'),
('Sour'),
('Wheat'),
('Belgian'),
('Trappist'),
('Barleywine'),
('Bock'),
('Doppelbock'),
('Tripel'),
('Quadrupel'),
('Gueuze'),
('Lambic'),
('Fruit Beer');

INSERT INTO Ingredients (name) 
VALUES
('eau'),
('malt'),
('houblon'),
('levure'),
('sucre'),
('épices'),
('extraits de plantes');

INSERT INTO Users (first_name, last_name, email, password, created_at)
VALUES 
('John', 'Doe', 'john.doe@gmail.com', 'password', '2021-01-01'),
('Jane', 'Smith', 'jane.smith@hotmail.com', 'mypassword12', '2022-03-15'),
('Alice', 'Johnson', 'alice.johnson@yahoo.com', 'secure123456', '2020-11-20'),
('Bob', 'Williams', 'bob.williams@gmail.com', 'bob321000987', '2023-07-10'),
('Charlie', 'Brown', 'charlie.brown@outlook.com', 'charlie12abc', '2022-06-25');

INSERT INTO Beers (name, description, abv, category_id, brewery_id)
VALUES 
('La Chouffe Blonde', 'A strong, spicy and fruity blonde beer.', 8.0, 9, 1),
('Guinness Draught', 'A rich and creamy stout with roasted malt flavors.', 4.2, 3, 2),
('Heineken Lager', 'A crisp, clean, and refreshing lager.', 5.0, 1, 3),
('Budweiser', 'A classic American lager with a smooth finish.', 5.0, 1, 4),
('Carlsberg Pilsner', 'A well-balanced Danish pilsner.', 5.0, 5, 5);

INSERT INTO Beer_Ingredients (beer_id, ingredient_id, percentage)
VALUES 
(1, 1, 60.00), 
(1, 3, 30.00), 
(1, 4, 10.00); 

INSERT INTO Favorites (user_id, beer_id)
VALUES 
(1, 1),
(2, 2);

INSERT INTO Reviews (user_id, beer_id, rating, comment)
VALUES 
(1, 1, 4, 'A smooth and flavorful blonde beer with a hint of spice.');