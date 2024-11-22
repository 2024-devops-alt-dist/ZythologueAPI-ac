
import { Request, Response } from "express";
import pool from "../db";

export const beersController = {
    get: async (req: Request, res: Response) => {
        // res.status(200).json({ message: "Hello World" });
        const result = await pool.query("SELECT * FROM Beers");
            res.status(200).json({ beers: result.rows });
    },
    post: (req: Request, res: Response) => {
        res.status(200).json({ message: "Ajouter une bière" });
    },
    // Ajoute d'autres méthodes si nécessaire
};

