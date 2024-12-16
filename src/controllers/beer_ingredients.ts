
import { Request, Response } from "express";
import pool from "../db";

export const beer_ingredientsController = {
    get: async (req: Request, res: Response) => {
        try {
            // res.status(200).json({ message: "Hello World" });
            const result = await pool.query("SELECT * FROM Beer_Ingredients");
            res.status(200).json({ beer_ingredients: result.rows });
        } catch (error) {
            console.error("Erreur dans le get Beer_Ingredients", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    post: async (req: Request, res: Response) => {
        try {
            const { name, beer_id, ingredient_id } = req.body;
            const result = await pool.query("INSERT INTO Beer_Ingredients (name, beer_id, ingredient_id) VALUES ($1, $2, $3) RETURNING *", [name, beer_id, ingredient_id]);
            res.status(201).json({ beer_ingredient: result.rows[0] });
        } catch (error: any) {
            console.error("Erreur dans le post Beer_Ingredients", error);
            res.status(500).json({ error: error.message });
        }
    },
    


};

