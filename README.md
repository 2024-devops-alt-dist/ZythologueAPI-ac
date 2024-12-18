# API REST pour la Gestion des Bières 🍺

Cette API permet de gérer les brasseries, les bières, les ingrédients, ainsi que les actions utilisateur comme les avis et les favoris. L'API est construite avec **Node.js**, **Express** et **PostgreSQL**, et utilise Docker pour faciliter son déploiement.

---

## 🚀 Fonctionnalités

- Gestion des brasseries, bières et leurs catégories.
- Association des bières avec des ingrédients et leurs pourcentages respectifs.
- Possibilité pour les utilisateurs de laisser des avis et de marquer des bières comme favorites.
- Gestion des photos liées aux bières, téléchargées par les utilisateurs.

---

## 🛠️ Technologies utilisées

- **Node.js** : Runtime pour le backend.
- **Express.js** : Framework web.
- **PostgreSQL** : Base de données pour le stockage persistant.
- **Docker** : Déploiement conteneurisé.

---

## 📂 Structure du projet

- **`/src`** : Contient le code source de l'API.
  - **`/controllers`** : Contrôleurs pour les routes de l'API.
  - **`/routes`** : Définition des routes de l'API.
  -**`/app`** : configuration et initialisation du server express


---

## ⚙️ Installation et configuration

### Prérequis
- Docker installé sur votre machine.
- Node.js (si vous exécutez l'application hors Docker).
- Une instance de base de données PostgreSQL.

### 🚶‍♀️‍➡️Étapes

1. **Cloner le dépôt** :
   git clone https://github.com/2024-devops-alt-dist/ZythologueAPI-ac.git

2. **Créer un fichier `.env`** :
    Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement suivantes :
    ```env
    PORT=5000
    DATABASE_URL=postgres://<user>:<password>@<host>:<port>/<database>
    ```
    Remplacez `<user>`, `<password>`, `<host>`, `<port>` et `<database>` par les informations de votre base de données.

3. **Executer l'application avec Docker** :
    ```bash
    docker-compose up --build
    ```
    L'API sera accessible à l'adresse `http://localhost:5000`.

### 🧪 Points d'API
- Brasseries : breweries
- Bières : beers
- Ingrédients de bières : beer-ingredients
- Utilisateurs : users
- categories : categories des bières
- avis des utilisateurs : reviews
- associations bière-ingrédient : beer_ingredients
Methodes GET/POST/PUT/DELETE pour chacun d'entre eux avec un outil comme postman.

le swagger disponible après le lancement de l'application à l'adresse http://localhost:5000/api-docs
aidera à l'execution des requetes. 
 **🖼️ Exemple de requête/réponse**
*Ajouter une nouvelle bière*

- Requête : POST /beers

```
{
  "name": "IPA",
  "description": "Une IPA rafraîchissante avec des notes d'agrumes.",
  "abv": 6.5,
  "brewery_id": 1,
  "category_id": 3
}
```
Réponse :
```
{
  "beer_id": 10,
  "name": "IPA",
  "description": "Une IPA rafraîchissante avec des notes d'agrumes.",
  "abv": 6.5,
  "brewery_id": 1,
  "category_id": 3
}
```
