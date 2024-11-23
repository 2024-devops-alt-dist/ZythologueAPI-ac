
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
};

