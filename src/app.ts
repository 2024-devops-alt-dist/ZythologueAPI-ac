//creation du serveur express :
// integrer la librairie express dans le fichier app.ts

import express, {Application} from "express";
const app: Application = express();

const version = "v1";
const path = `/api/${version}`;

import {router as beerRouter} from "./routes/beers";

app.use(`${path}/beers`, beerRouter); // TEST

export default app;
