import { useEffect, useState } from "react";

import type CharacterType from "../CharacterType";

const useFetchInitialCharacters = (): CharacterType[] => {
  const [initialCharacters, setinitialCharacters] = useState([]);

  useEffect(() => {
    const fetchInitialCharacters = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9",
        );
        const data = await response.json();
        setinitialCharacters(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInitialCharacters().catch(console.error);
  }, []);
  return initialCharacters;
};

export default useFetchInitialCharacters;
