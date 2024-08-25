import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [display, setDisplay] = useState(null);
  const [photos, setPhotos] = useState(null);

  function displayData(response) {
    setDisplay(response.data);
  }

  function handlePhotos(response) {
    setPhotos(response.data.photos.photos);
    console.log(response.data.photos.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = `73fd7aeeb1fc6do18b8423c70f3b718t`;
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(url).then(displayData);

    let pexelsKey = `l7eCbJuvOvV4JxdXG3xjFGZkCM1vADShhGmlf1ZGdnqTGFV1sVJmTk1B`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorization: `${pexelsKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePhotos);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="search"
          placeholder="Enter a word.."
          onChange={handleChange}
        ></input>
        <input className="submit-button" type="submit" value="Search"></input>
      </form>
      <Results code={display} />
      <Photos photos={photos} />
    </div>
  );
}
