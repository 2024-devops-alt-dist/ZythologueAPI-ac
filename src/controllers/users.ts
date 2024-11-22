

import { Request, Response } from "express";
import pool from "../db";

export const usersController = {
    get: async (req: Request, res: Response) => {
        try {
            const result = await pool.query("SELECT * FROM Users");
            res.status(200).json({ users: result.rows });
        } catch (error) {
            console.error("Erreur dans le get users", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    },
    getDetails: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try { 
        const result = await pool.query("SELECT * FROM Users WHERE user_id = $1", [id]);
        res.status(200).json({ user: result.rows[0] });
    } catch (error) {
        console.error("Erreur dans le get user details", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
    },
    post: async (req: Request, res: Response) => {
        try {
            console.log("Données reçues :", req.body);

            const { first_name, last_name, email, password } = req.body;
            const result = await pool.query(
                "INSERT INTO Users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
                [first_name, last_name, email, password]
            );

            console.log("Utilisateur inséré :", result.rows[0]);
            res.status(201).json({ user: result.rows[0] });
        } catch (error: any) {
            console.error("Erreur dans le post users", error);  res.status(500).json({ message: "Erreur serveur", details: error.message });
        
        }
    },
    delete: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            await pool.query("DELETE FROM Users WHERE user_id = $1", [id]);
            res.status(200).json({ message: "Utilisateur supprimé avec succès" });
        } catch (error) {
            console.error("Erreur dans le delete users", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
    put: async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const { first_name, last_name, email, password } = req.body;
        try {
            await pool.query(
                "UPDATE Users SET first_name = $1, last_name = $2, email = $3, password = $4 WHERE user_id = $5",
                [first_name, last_name, email, password, id]
            );
            res.status(200).json({ message: "Utilisateur à jour avec succès" });
        } catch (error) {
            console.error("Erreur dans le MAJ users", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
};


