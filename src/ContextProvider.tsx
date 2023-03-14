import { useState, createContext, type ReactNode, type FC } from "react";

type PositiveInteger = number & { __positiveIntegerBrand: unknown };
type BaseURL = "https://rickandmortyapi.com/api";

interface Character {
  id: PositiveInteger;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: `${BaseURL}/location/${PositiveInteger}`;
  };
  location: {
    name: string;
    url: `${BaseURL}/location/${PositiveInteger}`;
  };
  image: `${BaseURL}/character/avatar/${PositiveInteger}.jpeg`;
  episode: Array<`${BaseURL}/episode/${PositiveInteger}`>;
  url: `${BaseURL}/character/${PositiveInteger}.jpeg`;
  created: string;
}

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextType {
  characters: Character[] | "no matches";
  fetchInitialCharacters: () => Promise<void>;
  fetchFilteredCharacters: (query: string) => void;
}

const Context = createContext<ContextType>({
  characters: [],
  fetchInitialCharacters: async () => {
    await Promise.resolve();
  },
  fetchFilteredCharacters: () => {},
});

const ContextProvider: FC<ContextProviderProps> = ({
  children,
}: ContextProviderProps) => {
  const [characters, setCharacters] = useState<Character[] | "no matches">([]);

  const fetchInitialCharacters = async (): Promise<void> => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9",
      );
      const data = await response.json();
      setCharacters(
        data.sort((a: Character, b: Character) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFilteredCharacters = (query: string): void => {
    const allFilteredCharacters: Character[] = [];
    const fetchOnePage = async (url?: string): Promise<void> => {
      try {
        const response = await fetch(
          url ?? `https://rickandmortyapi.com/api/character/?name=${query}`,
        );
        const data = await response.json();

        if (data.error !== undefined) {
          setCharacters("no matches");
          return;
        }

        if (data.results !== undefined) {
          allFilteredCharacters.push(...data.results);
        }

        if (data.info?.next !== null && data.info?.next !== undefined) {
          fetchOnePage(data.info.next).catch(console.error);
        } else {
          setCharacters(
            allFilteredCharacters
              .sort((a, b) =>
                a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
              )
              .slice(0, 8),
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchOnePage().catch(console.error);
  };

  const value = {
    characters,
    fetchInitialCharacters,
    fetchFilteredCharacters,
  };
  return <Context.Provider value={value}> {children} </Context.Provider>;
};

export { Context, ContextProvider };
