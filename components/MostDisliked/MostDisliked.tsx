import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './MostDisliked.module.css'; // Asegúrate de tener estilos apropiados para este componente

interface CharacterVote {
  characterId: string;
  imageUrl: string;
  count: string;
}

export default function MostDisliked() {
  const [mostDisliked, setMostDisliked] = useState<CharacterVote | null>(null);

  useEffect(() => {
    const fetchMostDislikedCharacter = async () => {
      try {
        // Asegúrate de que el endpoint corresponda al de tu backend para "most-disliked"
        const response = await axios.get('http://localhost:3001/characters/most-disliked');
        setMostDisliked(response.data); // Guarda la respuesta en el estado
      } catch (error) {
        console.error('Error fetching most disliked character:', error);
        setMostDisliked(null); // En caso de error, limpia el estado
      }
    };

    fetchMostDislikedCharacter(); // Llama a la función al montar el componente
  }, []); // Un arreglo vacío como segundo argumento para ejecutar solo una vez

  if (!mostDisliked) return <div>No hay personajes con "dislike" recientes.</div>; // Renderiza esto si no hay datos

  // Renderiza los detalles del personaje más "dislikeado" si existe
  return (
    <div className={styles.card}>
      <img src={mostDisliked.imageUrl} alt={mostDisliked.characterId} className={styles.image} />
      <h2 className={styles.name}>{mostDisliked.characterId}</h2>
      <p className={styles.voteType}>Votos en dislikes: {mostDisliked.count}</p>
    </div>
  );
}