# Proyecto de Votación de Personajes con Next.js

Este proyecto de Next.js permite a los usuarios votar por sus personajes favoritos de series como "Rick and Morty," "Pokemon" y "Superheroes". Los usuarios pueden ver el personaje con más "likes", el que tiene más "dislikes", el último votado y buscar el estado de votación de personajes específicos.

## Características

- **Votación**: Los usuarios pueden votar "me gusta" o "no me gusta" por los personajes. Para realizar esta acción, puedes recargar la página con el botón F5 o hacer clic en el botón de inicio.
- **Visualización**: Ver el personaje con más "likes", más "dislikes" y el último votado.
- **Búsqueda**: Buscar personajes por nombre para ver sus totales de "likes" y "dislikes".
- **Colores**: Los colores que se utilizaron están basados en el dibujo animado de Rick and Morty.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) para el framework frontend y SSR (Server-Side Rendering).
- [React](https://reactjs.org/) para la construcción de la interfaz de usuario.
- [Axios](https://github.com/axios/axios) para solicitudes HTTP.
- CSS Modules para estilos.

## Estructura del Proyecto

```
/anime-front
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

```bash
git clone https://github.com/MiguelMendozaMolina/anime-front
```

2. **Instala las dependencias:**

```bash
cd anime-front
npm install
```

3. **Agrega tu archivo .env al proyecto con los secretos**
- Recuerda crear un archivo .env en el cual deberas agregar los valores de los secretos 
  para el proyecto de anime-front


4. **Ejecuta el servidor de desarrollo:**

```bash
npm run dev
```
- Visita [http://localhost:3000](http://localhost:3000) en tu navegador.

## Datos Importantes 
Para poder ejecutar el proyecto, es necesario contar con la versión V18.17.0 de Node.js, la cual puedes descargar desde el siguiente enlace: 
- https://nodejs.org/download/release/v18.17.0/

Para poder utilizar distintas versiones de Node.js, se recomienda el uso de NVM:
- https://desarrolloweb.com/home/nvm

Es muy importante poder crear un archivo .env en la raiz del proyecto para almacenar las variables de entorno , se adjunta un video para entender de mejor manera su aplicacion 
- https://www.youtube.com/watch?v=WsAPow3rv1w
