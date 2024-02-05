import React, { useState } from 'react';
import axios from 'axios';
import styles from './CharacterStatus.module.css';

interface CharacterStatus {
  characterName: string;
  totalLikes: number;
  totalDislikes: number;
  imageUrl?: string; 
}

const CharacterStatus: React.FC = () => {
  const [characterName, setCharacterName] = useState('');
  const [status, setStatus] = useState<CharacterStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacterStatus = async () => {
    const apiUrlPath = process.env.NEXT_PUBLIC_URL_PATH_DEFAULT;
    const pathCharacterStatus= process.env.NEXT_PUBLIC_PATH_CHARACTER_STATUS
    if (!apiUrlPath || !pathCharacterStatus) {
      console.error("characterStatus is not defined. apiUrlPath:", apiUrlPath, "pathCharacterStatus:", pathCharacterStatus);
      return; 
    }
    try {
      const response = await axios.get(`${apiUrlPath}${pathCharacterStatus}${characterName}`);
      setStatus(response.data); 
      setError(null); 
    } catch (error) {
      console.error('Error fetching character status:', error);
      setStatus(null); 
      setError('Es necesario que ingreses el nombre del personaje'); 
    }
  };

  return (
    <div className={styles.card}>
      <input
        type="text"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
        placeholder="Ingresa el nombre del personaje"
        className={styles.input}
      />
      <button onClick={fetchCharacterStatus} className={styles.button}>Buscar Personaje</button>
      {error && <p className={styles.error}>{error}</p>}
      {status && (
        <div className={styles.status}>
          <h2>{status.characterName}</h2>
          {status.imageUrl && <img src={status.imageUrl} alt={status.characterName} className={styles.image} />}
          <p>Likes: {status.totalLikes}</p>
          <p>Dislikes: {status.totalDislikes}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterStatus;