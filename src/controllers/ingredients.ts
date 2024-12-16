import { Request, Response } from "express";
import pool from "../db";

export const ingredientsController = {
    get: async (req: Request, res: Response) => {
        try {
            const result = await pool.query("SELECT * FROM Ingredients");
            res.status(200).json({ ingredients: result.rows });
        } catch (error) {
            console.error("Erreur dans le get Ingredients", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    getDetails: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        console.log("leeee id", id);
        try {
            const result = await pool.query("SELECT * FROM Ingredients WHERE ingredient_id = $1", [id]);
            res.status(200).json({ ingredients: result.rows[0] });
        } catch (error) {
            console.error("Erreur dans le get Ingredients", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    post: async (req: Request, res: Response) => {
        try {
            const { name } = req.body;
            const result = await pool.query("INSERT INTO Ingredients (name) VALUES ($1) RETURNING *", [name]);
            res.status(201).json({ ingredient: result.rows[0] });
        } catch (error: any) {
            console.error("Erreur dans le post Ingredients", error);
            res.status(500).json({ error: error.message });
        }
    },
    put: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const { name } = req.body;
        try {
            await pool.query("UPDATE Ingredients SET name = $1 WHERE ingredient_id = $2", [name, id]);
            res.status(200).json({ message: "Ingredient modifié avec succès" });
        } catch (error) {
            console.error("Erreur dans le put Ingredients", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    delete: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        console.log("leeee id", id);

        try {
            await pool.query("DELETE FROM Ingredients WHERE ingredient_id = $1", [id]);
            console.log("id: " + id);
            res.status(200).json({ message: "Ingredient supprimé avec succès" });
        } catch (error: any) {
            console.error("Erreur dans le delete Ingredients", error);
            res.status(500).json({ error: error.message });
        }
    }
    }
