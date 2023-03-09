import { useEffect, useState } from "react";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const useFetchCharacters = (): Character[] => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9",
        );
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCharacters().catch(console.error);
  }, []);
  return characters;
};

export default useFetchCharacters;
