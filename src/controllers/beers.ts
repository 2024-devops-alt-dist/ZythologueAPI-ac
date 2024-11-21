// import {Request, Response} from 'express';

// // export const getBeersController = (req: Request, res: Response) => {  
// //   res.status(200).json("Hello World beers! voici la liste des bières du controller");
// // };

// export const beersController ={
//     get: (req: Request, res: Response) => {
//         res.status(200).json("Hello World beers! voici la liste des bières du controller");
//     },
//     post: (req: Request, res: Response) => {
//         res.status(200).json("Ajouter une bière");
//     },
// }
import { Request, Response } from "express";

export const beersController = {
    get: (req: Request, res: Response) => {
        res.status(200).json({ message: "Hello World beers! voici la liste des bières du controller smdfljq" });
    },
    post: (req: Request, res: Response) => {
        res.status(200).json({ message: "Ajouter une bière" });
    },
    // Ajoute d'autres méthodes si nécessaire
};

