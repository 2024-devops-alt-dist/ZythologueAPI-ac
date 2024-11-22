CREATE TABLE Breweries (
    brewery_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    country VARCHAR(50) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE
);

CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Ingredients (
    ingredient_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Beers (
    beer_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    abv FLOAT(2) NOT NULL,
    brewery_id INT NOT NULL,
    category_id INT NOT NULL,
    CONSTRAINT fk_brewery_id FOREIGN KEY (brewery_id) REFERENCES Breweries(brewery_id),
    CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

CREATE TABLE Beer_Ingredients (
    beer_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    percentage NUMERIC(5,2) NOT NULL CHECK (percentage >= 0 AND percentage <= 100),
    PRIMARY KEY (beer_id, ingredient_id),
    CONSTRAINT fk_beer_id FOREIGN KEY (beer_id) REFERENCES Beers(beer_id),
    CONSTRAINT fk_ingredient_id FOREIGN KEY (ingredient_id) REFERENCES Ingredients(ingredient_id)
);

CREATE TABLE Favorites (
    user_id INT NOT NULL,
    beer_id INT NOT NULL,
    PRIMARY KEY (user_id, beer_id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES Users(user_id),
    CONSTRAINT fk_beer_id FOREIGN KEY (beer_id) REFERENCES Beers(beer_id)
);

CREATE TABLE Reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    beer_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating >= 0 AND rating <= 5),
    comment TEXT,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES Users(user_id),
    CONSTRAINT fk_beer_id FOREIGN KEY (beer_id) REFERENCES Beers(beer_id)
);

CREATE TABLE Pictures (
    picture_id SERIAL PRIMARY KEY,
    beer_id INT NOT NULL,
    user_id INT NOT NULL,
    url VARCHAR(255) NOT NULL,
    CONSTRAINT fk_beer_id FOREIGN KEY (beer_id) REFERENCES Beers(beer_id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
