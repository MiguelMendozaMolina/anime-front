# Proyecto de Votación de Personajes con Next.js

Este proyecto Next.js permite a los usuarios votar por sus personajes favoritos de series como "Rick and Morty", "Pokemon" y "Superheroes". Los usuarios pueden ver el personaje más likes, el con más dislikes, el último votado, y buscar el estado de votación de personajes específicos.

## Características

- **Votación**: Los usuarios pueden votar "me gusta" o "no me gusta" por los personajes.
- **Visualización**: Ver el personaje con más "likes", más "dislikes" y el último votado.
- **Búsqueda**: Buscar personajes por nombre para ver sus totales de "likes" y "dislikes".

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) para el framework frontend y SSR (Server-Side Rendering).
- [React](https://reactjs.org/) para la construcción de UI.
- [Axios](https://github.com/axios/axios) para solicitudes HTTP.
- CSS Modules para estilos.

## Estructura del Proyecto

```
/proyecto
├── components/ # Componentes reutilizables
│ ├── CharacterCard/ # Tarjeta de personaje para votación
│ │ ├── CharacterCard.tsx
│ │ └── CharacterCard.module.css
│ ├── Header/ # Encabezado y navegación
│ │ ├── Header.tsx
│ │ └── Header.module.css
│ └── ...
├── pages/ # Páginas de la aplicación
│ ├── _app.tsx # Configuración global de la aplicación
│ ├── index.tsx # Página de inicio
│ ├── most-liked.tsx # Página para mostrar el personaje más "likeado"
│ ├── most-disliked.tsx # Página para mostrar el personaje más "dislikeado"
│ └── ...
├── public/ # Activos estáticos como imágenes
├── styles/ # Estilos globales
│ └── globals.css
└── README.md
```
## Cómo Empezar

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:**

git clone https://tu-repositorio.com/proyecto.git

2. **Instala las dependencias:**

cd proyecto
npm install

3. **Ejecuta el servidor de desarrollo:**

npm run dev
Visita [http://localhost:3000](http://localhost:3000) en tu navegador.

## Datos Importantes 
Para poder ejecutar el proyecto es necesario contar con la version 
V18.17.0 de Node.js la cual puedes descargar desde el siguiente link 
https://nodejs.org/download/release/v18.17.0/

Para poder utilizar distintos entornos de Node.js se recomienda el uso de NVM 
https://desarrolloweb.com/home/nvm
