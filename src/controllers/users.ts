

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
    }
};
