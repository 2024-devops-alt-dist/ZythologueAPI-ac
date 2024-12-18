
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
    getDetails: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await pool.query("SELECT * FROM Beer_Ingredients WHERE beer_id = $1", [id]);
            res.status(200).json({ beer_ingredient: result.rows });
        } catch (error:any) {
            console.error("Erreur dans le get Beer_Ingredients", error);
            res.status(500).json({ error: error.message });
        }
    },
    post: async (req: Request, res: Response) => {
        try {
            const { beer_id, ingredient_id, percentage } = req.body;
            const result = await pool.query("INSERT INTO Beer_Ingredients (beer_id, ingredient_id, percentage) VALUES ($1, $2, $3) RETURNING *", [beer_id, ingredient_id, percentage]);
            res.status(201).json({ beer_ingredient: result.rows[0] });
        } catch (error: any) {
            console.error("Erreur dans le post Beer_Ingredients", error);
            res.status(500).json({ error: error.message });
        }
    },
    put: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const { beer_id, ingredient_id, percentage } = req.body;
        console.log('hello laaaa');
        try {
            await pool.query("UPDATE Beer_Ingredients SET beer_id = $1, ingredient_id = $2, percentage = $3 WHERE beer_id = $4", [beer_id, ingredient_id, percentage, id]);
            res.status(200).json({ message: "Beer_Ingredients modifié avec succès" });
        } catch (error: any) {
            console.error("Erreur dans le put Beer_Ingredients", error);
            res.status(500).json({ error: error.message });
        }
    },
    // delete: async (req: Request, res: Response) => {
    //     const id = parseInt(req.params.id);
    //     try {
    //         await pool.query("DELETE FROM Beer_Ingredients WHERE beer_id = $1", [id]);
    //         console.log("id: " + id);
    //         res.status(200).json({ message: "Beer_Ingredients supprimé avec succès" });
    //     } catch (error: any) {
    //         console.error("Erreur dans le delete Beer_Ingredients", error);
    //         res.status(500).json({ error: error.message });
    //     }
    // }
};

