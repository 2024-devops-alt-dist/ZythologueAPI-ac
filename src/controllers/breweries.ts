
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
    getDetails: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        try {
            const result = await pool.query("SELECT * FROM Breweries WHERE brewery_id = $1", [id]);
            res.status(200).json({ brewery: result.rows[0] });

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
    },
    delete: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        try {
            await pool.query("DELETE FROM Breweries WHERE brewery_id = $1", [id]);
            res.status(200).json({ message: "Brasserie supprimée avec succès" });
        } catch (error) {
            console.error("Erreur dans le delete breweries", error);
            res.status(500).json({ message: "Erreur serveur"});
        }
    },
    put: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const { name, country } = req.body;
        try {
            await pool.query(
                "UPDATE Breweries SET name = $1, country = $2 WHERE brewery_id = $3",
                [name, country, id]);
            res.status(200).json({ message: "Brasserie à jour avec succès" });
        } catch (error) {
            console.error("Erreur dans le MAJ breweries", error);
            res.status(500).json({ message: "Erreur serveur"});
        }
    }
};

