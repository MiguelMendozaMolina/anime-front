
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './MostLiked.module.css'; // Asegúrate de tener estilos apropiados para este componente

interface CharacterVote {
  characterId: string;
  imageUrl: string;
  count: number; // Asumiendo que quieres mostrar el conteo de likes
}

export default function MostLiked() {
  const [mostLiked, setMostLiked] = useState<CharacterVote | null>(null);

  useEffect(() => {
    const fetchMostLikedCharacter = async () => {
      try {
        const response = await axios.get('http://localhost:3001/characters/most-liked');
        setMostLiked(response.data); // Guarda la respuesta en el estado
      } catch (error) {
        console.error('Error fetching most liked character:', error);
        setMostLiked(null); // En caso de error, limpia el estado
      }
    };

    fetchMostLikedCharacter(); // Llama a la función al montar el componente
  }, []); // Un arreglo vacío como segundo argumento para ejecutar solo una vez

  if (!mostLiked) return <div>No hay personajes con "like" recientes.</div>; // Renderiza esto si no hay datos

  // Renderiza los detalles del personaje más "likeado" si existe
  return (
    <div className={styles.card}>
      <img src={mostLiked?.imageUrl} alt={mostLiked?.characterId} className={styles.image} />
      <h2 className={styles.name}>{mostLiked?.characterId}</h2>
      {/* Asumiendo que quieres mostrar el conteo de likes, ajusta según tu respuesta de backend */}
      <p className={styles.voteCount}>Votos en likes: {mostLiked?.count}</p> 
    </div>
  );
}