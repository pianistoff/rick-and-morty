import React from "react";
import type { FormEventHandler } from "react";

import useSessionStorageState from "../hooks/useSessionStorageState";

interface SearchBarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const [input, setInput] = useSessionStorageState("", "input");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setSearchQuery(input);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="search-box-container">
        <input
          type="text"
          placeholder="Filter by name..."
          value={input}
          onChange={handleInputChange}
          className="search-box"
        />
      </div>
    </form>
  );
};

export default SearchBar;
