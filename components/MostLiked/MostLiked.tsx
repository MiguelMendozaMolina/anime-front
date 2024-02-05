import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './MostLiked.module.css';

interface CharacterVote {
  characterId: string;
  imageUrl: string;
  count: number; 
}

export default function MostLiked() {
  const [mostLiked, setMostLiked] = useState<CharacterVote | null>(null);

  useEffect(() => {
    const fetchMostLikedCharacter = async () => {
      const apiUrlPath = process.env.NEXT_PUBLIC_URL_PATH_DEFAULT;
      const pathMostLiked= process.env.NEXT_PUBLIC_PATH_MOST_LIKED

      if (!apiUrlPath || !pathMostLiked) {
        console.error("mostLiked is not defined. apiUrlPath:", apiUrlPath, "pathMostLiked:", pathMostLiked);
        return; 
      }
      try {
        const response = await axios.get(`${apiUrlPath}${pathMostLiked}`);
        setMostLiked(response.data); 
      } catch (error) {
        console.error('Error fetching most liked character:', error);
        setMostLiked(null); 
      }
    };

    fetchMostLikedCharacter(); 
  }, []); 

  if (!mostLiked) return <div>No hay personajes con "like" recientes.</div>; 

  return (
    <div className={styles.card}>
      <img src={mostLiked?.imageUrl} alt={mostLiked?.characterId} className={styles.image} />
      <h2 className={styles.name}>{mostLiked?.characterId}</h2>
      <p className={styles.voteCount}>Votos en likes: {mostLiked?.count}</p> 
    </div>
  );
}