import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './MostDisliked.module.css'; 

interface CharacterVote {
  characterId: string;
  imageUrl: string;
  count: string;
}

export default function MostDisliked() {
  const [mostDisliked, setMostDisliked] = useState<CharacterVote | null>(null);

  useEffect(() => {
    const fetchMostDislikedCharacter = async () => {
      const apiUrlPath = process.env.NEXT_PUBLIC_URL_PATH_DEFAULT;
      const pathMostDisliked= process.env.NEXT_PUBLIC_PATH_MOST_DISLIKED

      if (!apiUrlPath || !pathMostDisliked) {
        console.error("mostDisliked is not defined. apiUrlPath:", apiUrlPath, "pathMostDisliked:", pathMostDisliked);
        return; 
      }
      try {
        const response = await axios.get(`${apiUrlPath}${pathMostDisliked}`);
        setMostDisliked(response.data); 
      } catch (error) {
        console.error('Error fetching most disliked character:', error);
        setMostDisliked(null); 
      }
    };

    fetchMostDislikedCharacter(); 
  }, []); 

  if (!mostDisliked) return <div>No hay personajes con "dislike" recientes.</div>;

  return (
    <div className={styles.card}>
      <img src={mostDisliked.imageUrl} alt={mostDisliked.characterId} className={styles.image} />
      <h2 className={styles.name}>{mostDisliked.characterId}</h2>
      <p className={styles.voteType}>Votos en dislikes: {mostDisliked.count}</p>
    </div>
  );
}