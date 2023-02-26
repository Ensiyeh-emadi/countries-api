import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search a country..."
        value={input}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchInput;
