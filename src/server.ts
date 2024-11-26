import app from "./app";

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  //listen api docs
  console.log(`Listening on port ${PORT}/api-docs`);
});



// import express, {Application} from "express";
// const app: Application = express();
// const PORT = 5002;

// import {router as beerRouter} from "./routes/beers";



// app.use("/", beerRouter);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// const app = express();
// const port = 5001;

// // Route pour les bières
// const routeBeers = require("./routes/beers.js");
// app.use("/beers", routeBeers);

// // Route pour les brasseries
// const routeBreweries = require("./routes/breweries.js");
// app.use("/breweries", routeBreweries);

// // Route pour les utilisateurs
// const routeUsers = require("./routes/users.js");
// app.use("/users", routeUsers);

// // Route d'accueil
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // Route About
// app.get("/about", (req, res) => {
//   res.send("About Us");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
