import React from 'react';
import styles from './CharacterCard.module.css';
import axios from 'axios';


interface Character {
  name: string;
  image: string;
}

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  // logic for handling votes

  const apiUrlPath = process.env.NEXT_PUBLIC_URL_PATH_DEFAULT;
  const pathCharacterVote = process.env.NEXT_PUBLIC_PATH_CHARACTER_VOTE
  const handleVote = async (voteType: 'like'| 'dislike') => {

    if (!apiUrlPath || !pathCharacterVote) {
      console.error("characterVoteURL is not defined. apiUrlPath:", apiUrlPath, "pathCharacterVote:", pathCharacterVote);
      return;
    }
    try {
      await axios.post( `${apiUrlPath}${pathCharacterVote}` , {
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
      <div className={styles.buttons}>
        <button onClick={() => handleVote('like')} className={`${styles.voteButton} ${styles.like}`}>Like</button>
        <button onClick={() => handleVote('dislike')} className={`${styles.voteButton} ${styles.dislike}`}>Dislike</button>
      </div>
    </div>
  );
};

export default CharacterCard;
