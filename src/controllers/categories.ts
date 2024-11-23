
import { Request, Response } from "express";
import pool from "../db";

export const categoriesController = {
    get: async (req: Request, res: Response) => {
        try {
            // res.status(200).json({ message: "Hello World" });
            const result = await pool.query("SELECT * FROM Categories");
            res.status(200).json({ category: result.rows });
        } catch (error) {
            console.error("Erreur dans le get Categories", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    getDetails: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        try {
            const result = await pool.query("SELECT * FROM Categories WHERE category_id = $1", [id]);
            res.status(200).json({ category: result.rows[0] });  
        } catch (error) {
            console.error("Erreur dans le get categories details", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    post : async (req: Request, res: Response) => {
        try {
            const { name } = req.body;
            const result = await pool.query("INSERT INTO Categories (name) VALUES ($1) RETURNING *", [name]);
            res.status(201).json({ category: result.rows[0] });
        } catch (error) {
            console.error("Erreur dans le post categories", error);
            res.status(500).json({ message: "Erreur serveur coucou" });
        }
    },
    delete: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        try {
            await pool.query("DELETE FROM Categories WHERE category_id = $1", [id]);
            console.log("id", id);  
            res.status(200).json({ message: "categorie supprimée avec succès" });
        } catch (error) {
            console.error("Erreur dans le delete categories", error);
            res.status(500).json({ message: "Erreur serveur"});
        }
    },
    put: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const {name} = req.body;
        try {
            await pool.query(
                "UPDATE Categories SET name = $1 WHERE category_id = $2",
                [name, id]);
            res.status(200).json({ message: "categorie mise à jour avec succès" });
        } catch (error) {
            console.error("Erreur dans le MAJ categories", error);
            res.status(500).json({ message: "Erreur serveur"});
        }
    }
};

