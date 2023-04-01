# Usa un'immagine di base con Node.js preinstallato
FROM node:14

# Imposta la directory di lavoro dell'applicazione
WORKDIR /ipgrabber

# Copia il file package.json nella directory di lavoro
COPY package*.json ./

# Installa le dipendenze dell'applicazione
RUN npm install express
RUN npm install node-ipinfo

# Copia i file dell'applicazione nella directory di lavoro
COPY . .

# Espone la porta 80 per l'applicazione
EXPOSE 80

# Avvia l'applicazione
CMD ["npm", "start"]