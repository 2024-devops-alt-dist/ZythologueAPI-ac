//creation du serveur express :
// integrer la librairie express dans le fichier app.ts

import express, {Application} from "express";
const app: Application = express();
app.use(express.json());// accepter le format json sur les requetes

const version = "v1";
const path = `/api/${version}`;

import {router as beerRouter} from "./routes/beers";
import {router as breweryRouter} from "./routes/breweries";
import {router as userRouter} from "./routes/users";
import {router as beer_ingredientsRouter} from "./routes/beer_ingredients";
import {router as categoriesRouter} from "./routes/categories";
import {router as reviewsRouter} from "./routes/reviews";



app.use(`${path}/beers`, beerRouter); 
app.use(`${path}/breweries`, breweryRouter); 
app.use(`${path}/users`, userRouter);
app.use(`${path}/beer_ingredients`, beer_ingredientsRouter);
app.use(`${path}/categories`, categoriesRouter);
app.use(`${path}/reviews`, reviewsRouter);


export default app;

