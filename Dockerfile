#Usa una imagen base de Node.js
FROM node:latest

#Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

#Copia los archivos necesarios para tu aplicación
COPY package*.json ./
COPY src ./src

#Instala las dependencias de tu aplicación
RUN npm install

#Expone el puerto 8080 en el contenedor
EXPOSE 3000

#Comando para ejecutar tu aplicación cuando se inicie el contenedor
CMD ["node", "src/app.js"]