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

const useFilterCharacters = (query: string): Character[] | "no matches" => {
  const [filteredCharacters, setFilteredCharacters] = useState<
    Character[] | "no matches"
  >([]);

  useEffect(() => {
    const filterCharacters = async (): Promise<void> => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${query}`,
        );
        const data = await response.json();
        if (data.error === "There is nothing here") {
          setFilteredCharacters("no matches");
        } else {
          setFilteredCharacters(data.results.slice(0, 8));
        }
      } catch (error) {
        console.error(error);
      }
    };
    filterCharacters().catch(console.error);
  }, [query]);

  return filteredCharacters;
};

export default useFilterCharacters;
