import { useEffect, useState } from "react";

import type CharacterType from "../CharacterType";

interface Data {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: CharacterType[];
  error?: "There is nothing here";
}

const useFetchFilteredCharacters = (
  query: string,
): CharacterType[] | "no matches" => {
  const [filteredCharacters, setFilteredCharacters] = useState<
    CharacterType[] | "no matches"
  >([]);

  useEffect(() => {
    let data: Data = {
      info: { count: 0, pages: 0, next: null, prev: null },
      results: [],
    };
    const allFilteredCharacters: CharacterType[] = [];
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
