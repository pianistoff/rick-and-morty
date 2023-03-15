import { useEffect, useState } from "react";

import type CharacterType from "../CharacterType";

const useFetchClickedCharacter = (id: number): CharacterType => {
  const [clickedCharacter, setClickedCharacter] = useState<CharacterType>({
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [],
    url: "",
    created: "",
  });

  useEffect(() => {
    const fetchClickedCharacter = async (): Promise<void> => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`,
        );
        const data = await response.json();
        setClickedCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchClickedCharacter().catch(console.error);
  }, [id]);
  return clickedCharacter;
};

export default useFetchClickedCharacter;
