import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Fetching definition of ${keyword}`);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a word.."
          onChange={handleChange}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}
