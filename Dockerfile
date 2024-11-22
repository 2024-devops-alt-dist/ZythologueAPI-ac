# ici on mets tout ce qui va etre executé au lancement de docker-compose up -d

FROM node:18-alpine  
# node:18-alpine qui est une image de nodejs basée sur alpine linux (une distribution linux légère) compatible avec l'image docker de nodejs      


# définir le répertoire de travail
WORKDIR /app

# copier le fichier package.json dans le répertoire de travail
COPY package.json /app

# installer les dépendances
RUN npm install

# copier le reste des fichiers dans le répertoire de travail
COPY . /app

# lancer l'application
CMD ["node", "app.js"]

# Exposer le port 3000
EXPOSE 3000
