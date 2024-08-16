import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [display, setDisplay] = useState(null);

  function displayData(response) {
    setDisplay(response.data);
  }
  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = `73fd7aeeb1fc6do18b8423c70f3b718t`;
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(url).then(displayData);
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
      <Results code={display} />
    </div>
  );
}
