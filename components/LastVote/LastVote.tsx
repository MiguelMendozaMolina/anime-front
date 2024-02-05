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
      const apiUrlPath = process.env.NEXT_PUBLIC_URL_PATH_DEFAULT;
      const pathLastVote= process.env.NEXT_PUBLIC_PATH_LAST_VOTE

      if (!apiUrlPath || !pathLastVote) {
        console.error("lastVote is not defined. apiUrlPath:", apiUrlPath, "pathLastVote:", pathLastVote);
        return; 
      }
      try {
        const response = await axios.get(`${apiUrlPath}${pathLastVote}`);
        setLastVote(response.data); 
      } catch (error) {
        console.error('Error fetching last voted character:', error);
        setLastVote(null); 
      }
    };

    fetchLastVotedCharacter(); 
  }, []); 

  if (!lastVote) return <div>No hay votos recientes.</div>;

  return (
    <div className={styles.card}>
      <img src={lastVote.imageUrl} alt={lastVote.characterId} className={styles.image} />
      <h2 className={styles.name}>{lastVote.characterId}</h2>
      <p className={styles.voteType}>Voto: {lastVote.voteType}</p>
      <p className={styles.voteDate}>Votado el: {new Date(lastVote.createdAt).toLocaleDateString()}</p>
    </div>
  );
}