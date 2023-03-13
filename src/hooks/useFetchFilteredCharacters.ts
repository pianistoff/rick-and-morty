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

interface Data {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: Character[];
  error?: "There is nothing here";
}

const useFetchFilteredCharacters = (
  query: string,
): Character[] | "no matches" => {
  const [filteredCharacters, setFilteredCharacters] = useState<
    Character[] | "no matches"
  >([]);

  useEffect(() => {
    let data: Data = {
      info: { count: 0, pages: 0, next: null, prev: null },
      results: [],
    };
    const allFilteredCharacters: Character[] = [];
    const fetchOnePage = async (url?: string): Promise<void> => {
      try {
        const response = await fetch(
          url ?? `https://rickandmortyapi.com/api/character/?name=${query}`,
        );
        data = await response.json();

        if (data.error !== undefined) {
          setFilteredCharacters("no matches");
          return;
        }

        if (data.results !== undefined) {
          allFilteredCharacters.push(...data.results);
        }

        if (data.info?.next !== null && data.info?.next !== undefined) {
          fetchOnePage(data.info.next).catch(console.error);
        } else {
          setFilteredCharacters(allFilteredCharacters);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchOnePage().catch(console.error);
  }, [query]);

  return filteredCharacters;
};

export default useFetchFilteredCharacters;
