import React, { useState } from "react";
import type { FormEventHandler } from "react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Searching for "${query}"...`);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="search-box-container">
        <input
          type="text"
          placeholder="Filter by name..."
          value={query}
          onChange={handleInputChange}
          className="search-box"
        />
      </div>
    </form>
  );
};

export default SearchBar;
