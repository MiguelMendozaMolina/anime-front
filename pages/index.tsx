// pages/index.tsx
import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard/CharacterCard';

interface Character {
  name: string;
  image: string;
}

interface HomeProps {
  character: Character;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await axios.get('http://localhost:3001/characters/random');
  const character: Character = response.data;

  return {
    props: { character },
  };
};

const HomePage: NextPage<HomeProps> = ({ character }) => {
  return <CharacterCard character={character} />;
};

export default HomePage;