import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './LastVote.module.css'

interface CharacterVote {
  characterId: string;
  voteType: 'like' | 'dislike';
  imageUrl: string;
  createdAt: string;
}

export default function LastVote() {
  const [lastVote, setLastVote] = useState<CharacterVote | null>(null);

  useEffect(() => {
    const fetchLastVotedCharacter = async () => {
      try {
        // Realiza la solicitud al endpoint proporcionado
        const response = await axios.get('http://localhost:3001/characters/last-vote');
        setLastVote(response.data); // Guarda la respuesta en el estado
      } catch (error) {
        console.error('Error fetching last voted character:', error);
        setLastVote(null); // En caso de error, limpia el estado
      }
    };

    fetchLastVotedCharacter(); // Llama a la función al montar el componente
  }, []); // Un arreglo vacío como segundo argumento para ejecutar solo una vez

  if (!lastVote) return <div>No hay votos recientes.</div>; // Renderiza esto si no hay datos

  // Renderiza los detalles del último voto si existe
  return (
    <div className={styles.card}>
      <img src={lastVote.imageUrl} alt={lastVote.characterId} className={styles.image} />
      <h2 className={styles.name}>{lastVote.characterId}</h2>
      <p className={styles.voteType}>Voto: {lastVote.voteType}</p>
      <p className={styles.voteDate}>Votado el: {new Date(lastVote.createdAt).toLocaleDateString()}</p>
    </div>
  );
}