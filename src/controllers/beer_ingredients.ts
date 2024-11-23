
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
        const id = parseInt(req.params.id)
        try {
            const result = await pool.query("SELECT * FROM Beer_Ingredients WHERE beer_ingredient_id = $1", [id]);
            res.status(200).json({ beer_Ingredients: result.rows[0] });
            console.log("id", id);  
        } catch (error) {
            console.error("Erreur dans le get Beer_Ingredients", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    post : async (req: Request, res: Response) => {
        try {
            const { beer_id, ingredient_id, percentage} = req.body;

            const result = await pool.query("INSERT INTO Beer_Ingredients (beer_id, ingredient_id, percentage) VALUES ($1, $2, $3) RETURNING *", [beer_id, ingredient_id, percentage]);
            res.status(201).json({ beer_ingredient: result.rows[0] });
        } catch (error) {
            console.error("Erreur dans le post beer_ingredients", error);
            res.status(500).json({ message: "Erreur serveur coucou" });
        }
    },
    // delete: async (req: Request, res: Response) => {
    //     const id = parseInt(req.params.id)
    //     try {
    //         await pool.query("DELETE FROM Beer_Ingredients WHERE beer_Ingredient_id = $1", [id]);
    //         console.log("id", id);  
    //         res.status(200).json({ message: "bière supprimée avec succès" });
    //     } catch (error) {
    //         console.error("Erreur dans le delete beers", error);
    //         res.status(500).json({ message: "Erreur serveur"});
    //     }
    // },
    // put: async (req: Request, res: Response) => {
    //     const id = parseInt(req.params.id)
    //     const { name, description, abv, brewery_id, category_id} = req.body;
    //     try {
    //         await pool.query(
    //             "UPDATE Beers SET name = $1, description = $2, abv=$3, brewery_id=$4, category_id=$5 WHERE beer_id = $6",
    //             [name, description, abv, brewery_id, category_id, id]);
    //         res.status(200).json({ message: "bière à jour avec succès" });
    //     } catch (error) {
    //         console.error("Erreur dans le MAJ bieres", error);
    //         res.status(500).json({ message: "Erreur serveur"});
    //     }
    // }
};

