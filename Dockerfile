# Image de base Node.js
FROM node:18

# Crée le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json et installer dépendances
COPY package*.json ./
RUN npm install

# Copier le reste de l'application
COPY . .

# Installer stress-ng pour le chaos engineering
RUN apt-get update && \
    apt-get install -y stress-ng && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Expose le port
EXPOSE 3000

# Commande par défaut pour démarrer l'application
CMD ["node", "index.js"]
