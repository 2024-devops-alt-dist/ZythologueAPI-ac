
import { Request, Response } from "express";
import pool from "../db";

export const beersController = {
    get: async (req: Request, res: Response) => {
        try {
            // res.status(200).json({ message: "Hello World" });
            const result = await pool.query("SELECT * FROM Beers");
            res.status(200).json({ beers: result.rows });
        } catch (error) {
            console.error("Erreur dans le get beers", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    // ,
    // post: async (req: Request, res: Response) => {
    //     try {
    //         const { name, abv, brewery_id } = req.body;
    //         const result = await pool.query("INSERT INTO Beers (name, price, brewery_id) VALUES ($1, $2, $3) RETURNING *", [name, price, brewery_id]);
    //         res.status(201).json({ beer: result.rows[0] });
    //     } catch (error) {
    //         console.error("Erreur dans le post beers", error);
    //         res.status(500).json({ message: "Erreur serveur" });
    //     }
    // }
};

