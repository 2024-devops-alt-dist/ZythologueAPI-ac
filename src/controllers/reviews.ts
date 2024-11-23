
import { Request, Response } from "express";
import pool from "../db";

export const reviewsController = {
    get: async (req: Request, res: Response) => {
        try {
            // res.status(200).json({ message: "Hello World" });
            const result = await pool.query("SELECT * FROM Reviews");
            res.status(200).json({ review: result.rows });
        } catch (error) {
            console.error("Erreur dans le get reviews", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    getDetails: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        try {
            const result = await pool.query("SELECT * FROM Reviews WHERE review_id = $1", [id]);
            res.status(200).json({ review: result.rows[0] });
            console.log("id", id);  
        } catch (error) {
            console.error("Erreur dans le get reviewsdetails", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    post : async (req: Request, res: Response) => {
        try {
            const { user_id, beer_id, rating, comment } = req.body;
            const result = await pool.query("INSERT INTO Reviews (user_id, beer_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *", [user_id, beer_id, rating, comment ]);
            res.status(201).json({ reviews: result.rows[0] });
        } catch (error) {
            console.error("Erreur dans le post reviews", error);
            res.status(500).json({ message: "Erreur serveur coucou" });
        }
    },
    delete: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        try {
            await pool.query("DELETE FROM Reviews WHERE review_id = $1", [id]);
            console.log("id", id);  
            res.status(200).json({ message: "review supprimé avec succès" });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur"});
        }
    },
    put: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const { user_id, beer_id, rating, comment } = req.body;
        try {
            await pool.query(
                "UPDATE Reviews SET user_id = $1, beer_id = $2, rating=$3, comment=$4, WHERE review_id = $5",
                [user_id, beer_id, rating, comment ]);
            res.status(200).json({ message: "review à jour avec succès" });
        } catch (error) {
            console.error("Erreur dans le MAJ review", error);
            res.status(500).json({ message: "Erreur serveur"});
        }
    }
};

