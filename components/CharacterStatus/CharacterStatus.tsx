import React, { useState } from 'react';
import axios from 'axios';
// Asegúrate de que el archivo de estilos exista y esté correctamente referenciado
import styles from './CharacterStatus.module.css';

interface CharacterStatus {
  characterName: string;
  totalLikes: number;
  totalDislikes: number;
  imageUrl?: string; // Si tu API devuelve una URL de imagen, asegúrate de que este campo esté presente
}

const CharacterStatus: React.FC = () => {
  const [characterName, setCharacterName] = useState('');
  const [status, setStatus] = useState<CharacterStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacterStatus = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/characters/status/${characterName}`);
      setStatus(response.data); // Asume que la respuesta de la API tiene la estructura de CharacterStatus
      setError(null); // Resetea cualquier error previo
    } catch (error) {
      console.error('Error fetching character status:', error);
      setStatus(null); // Limpia el estado anterior en caso de error
      setError('Personaje no encontrado o error en la solicitud.'); // Establece el mensaje de error
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