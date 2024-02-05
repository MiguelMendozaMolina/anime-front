// components/CharacterCard.tsx (Asegúrate de que la ruta sea correcta según tu estructura de proyecto)
import React from 'react';
import styles from './CharacterCard.module.css';
import axios from 'axios';

interface Character {
  name: string;
  image: string;
}

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  // logica para manejar los votos 
  const handleVote = async (voteType: 'like'| 'dislike') => {
    try {
      await axios.post('http://localhost:3001/characters/vote', {
        characterId: character.name,
        voteType: voteType,
        imageUrl: character.image

      });
      console.log(`Voted ${voteType} for ${character.name} and image ${character.image}`);
      window.location.reload();

    } catch(error){
      console.error("Error submitting vote:", error);
    }
  };

  return (
    <div className={styles.card}>
      <img src={character.image} alt={character.name} className={styles.image} />
      <h2 className={styles.name}>{character.name}</h2>
      <div className={styles.buttons}> {/* Envuelve los botones en un div con la clase .buttons */}
        <button onClick={() => handleVote('like')} className={`${styles.voteButton} ${styles.like}`}>Like</button>
        <button onClick={() => handleVote('dislike')} className={`${styles.voteButton} ${styles.dislike}`}>Dislike</button>
      </div>
    </div>
  );
};

export default CharacterCard;
