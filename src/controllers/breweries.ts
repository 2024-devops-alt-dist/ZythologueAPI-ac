
import { Request, Response } from "express";
import pool from "../db";

export const breweriesController = {
    get: async (req: Request, res: Response) => {
        try {
            // res.status(200).json({ message: "Hello World" });
            const result = await pool.query("SELECT * FROM Breweries");
            res.status(200).json({ breweries: result.rows });
        } catch (error) {
            console.error("Erreur dans le get breweries", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    post : async (req: Request, res: Response) => {
        try {
            const { name, country } = req.body;
            console.log("namm",name, "country", country);
            const result = await pool.query("INSERT INTO Breweries (name, country) VALUES ($1, $2) RETURNING *", [name, country]);
            res.status(201).json({ brewery: result.rows[0] });
        } catch (error) {
            console.error("Erreur dans le post breweries", error);
            res.status(500).json({ message: "Erreur serveur coucou" });
        }
    }   

};

