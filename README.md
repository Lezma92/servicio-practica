# Servicio Node.js para Consumir Servicio REST de Generación de Hash de Folio

Este proyecto Node.js utiliza Express y Axios para consumir un servicio REST que genera un hash a partir de un folio proporcionado por medio de una solicitud POST.

## Descripción

El servicio Node.js expone un endpoint `/gethash` que acepta un cuerpo JSON con el parámetro `folio`. Luego, hace una solicitud GET al servicio REST implementado en Spring Boot para obtener el hash correspondiente y lo devuelve como respuesta en formato JSON.

## Requisitos Previos

Antes de ejecutar este servicio, asegúrate de tener instalado Node.js en tu sistema.

## Configuración y Ejecución

1. **Clonar el Repositorio:**
   git clone https://github.com/Lezma92/servicio-practica.git
2. **Instalar Dependencias:**
Desde la carpeta raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias necesarias (Express, Axios y Cors):
npm install
3. **Ejecutar la Aplicación:**
Una vez configurado, ejecuta el siguiente comando para iniciar la aplicación:
node index.js
4. **Consumir el Endpoint:**
Puedes consumir el servicio utilizando herramientas como Postman:

```http
POST http://localhost:3033/gethash
Content-Type: application/json

{
  "folio": "ejemplo123"
}