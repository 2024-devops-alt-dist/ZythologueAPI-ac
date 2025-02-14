import { Request, Response } from "express";
import pool from "../db";

export const beersController = {
    get: async (req: Request, res: Response) => {
        try {
            // res.status(200).json({ message: "Hello World" });
            const result = await pool.query(`
                SELECT b.beer_id, b.name AS beer_name, b.description, b.abv, 
 br.name AS brewery_name, c.name AS category_name, b.logo_url AS logo_url
FROM Beers b
JOIN Breweries br ON b.brewery_id = br.brewery_id
JOIN Categories c ON b.category_id = c.category_id

            `);
            res.status(200).json({ beers: result.rows });
        } catch (error) {
            console.error("Erreur dans le get beers", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    getDetails: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        try {
            const result = await pool.query("SELECT * FROM Beers WHERE beer_id = $1", [id]);
            res.status(200).json({ beer: result.rows[0] });
            console.log("id", id);  
        } catch (error) {
            console.error("Erreur dans le get beersdetails", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    post : async (req: Request, res: Response) => {
        try {
            const { name, description, abv, brewery_id, category_id } = req.body;
            console.log("namm",name, "description", description, "abv", abv);
            const result = await pool.query("INSERT INTO Beers (name, description, abv, brewery_id, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *", [name, description, abv, brewery_id, category_id]);
            res.status(201).json({ beer: result.rows[0] });
        } catch (error) {
            console.error("Erreur dans le post beers", error);
            res.status(500).json({ message: "Erreur serveur coucou le post" });
        }
    },
    delete: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        try {
            await pool.query("DELETE FROM Beers WHERE beer_id = $1", [id]);
            console.log("id", id);  
            res.status(200).json({ message: "bière supprimée avec succès" });
        } catch (error) {
            console.error("Erreur dans le delete beers", error);
            res.status(500).json({ message: "Erreur serveur"});
        }
    },
    put: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const { name, description, abv, brewery_id, category_id} = req.body;
        try {
            await pool.query(
                "UPDATE Beers SET name = $1, description = $2, abv=$3, brewery_id=$4, category_id=$5 WHERE beer_id = $6",
                [name, description, abv, brewery_id, category_id, id]);
            res.status(200).json({ message: "bière à jour avec succès" });
        } catch (error) {
            console.error("Erreur dans le MAJ bieres", error);
            res.status(500).json({ message: "Erreur serveur"});
        }
    }
};