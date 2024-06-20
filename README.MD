# RutaGo - Frontend

<p align="center">
  <img src="./img_readme/desktops.png" alt="Vista Principal en Dispositivos Desktops" width="400">
  <img src="./img_readme/moviles.png" alt="Vista Principal en Dispositivos Móviles" width="400">
</p>

## Descripción

¿Estás cansado de perderte en la ciudad? 🤔 RutaGo es la aplicación web funcional que estabas esperando. Desarrollada por un equipo de programadores web entusiastas, RutaGo te brinda una solución innovadora para descubrir las rutas de autobuses en Santa Marta. 🌴

### Características Principales:

- 🌐 Frontend moderno con React y Chakra UI para una experiencia de usuario excepcional
- 🔒 Autenticación segura con bcryptjs, jsonwebtoken y recuperación de contraseña vía correo electrónico
- 🗺️ Visualización interactiva de rutas de autobús con Leaflet
- 🔐 Rutas públicas y privadas para usuarios autenticados
- 📡 Backend robusto con Node, Express, TypeORM y PostgreSQL
- 👤 Vistas personalizadas para usuarios y administradores

### Tecnologías Utilizadas:

- **Front-end**: React, Chakra UI, Axios, Leaflet
- **Back-end**: Node, bcryptjs, cors, dotenv, express, express-validator, jsonwebtoken, typeorm, postgresql, nodemailer

Nuestro equipo ([Juan Díaz](https://www.linkedin.com/in/juan7diaz), [Daniel Cogollos](https://www.linkedin.com/in/daniel-cogollos-b238362a4/) y [Gian Astori](https://www.linkedin.com/in/gian-marco-astori-payares-188448307/)) trabajó arduamente siguiendo una arquitectura MVC para entregar esta aplicación web escalable 🚀

## Instalación

Sigue estos pasos para poner en marcha el frontend de RutaGo en tu entorno local:

### Prerrequisitos

- Node.js instalado
- Yarn instalado

### Instrucciones

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/Juan7diaz/RutaGo-Frontend.git
   cd RutaGo-Frontend
   ```

2. **Instalar dependencias**:

   ```bash
   yarn install
   ```

3. **Configurar variables de entorno**:

   Crea un archivo `.env` en la raíz del proyecto, utilizando el archivo `.env.example` como referencia, y define la siguiente variable:

   ```env
   VITE_BASE_URL_API = http://localhost:8080/api
   ```

4. **Iniciar el servidor de desarrollo**:

   ```bash
   yarn dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.

## Repositorio del Backend

Para configurar y ejecutar el backend, visita el repositorio:

- [Backend de RutaGo](https://github.com/Juan7diaz/RutaGo-Backend)

## Contribución

¡Nos encantaría recibir tu ayuda para mejorar RutaGo! Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`)
4. Sube tus cambios a tu fork (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

---

¿Necesitas ayuda adicional o tienes alguna pregunta? No dudes en abrir un issue o contactar a alguno de los miembros del equipo. ¡Gracias por utilizar RutaGo! 🌟