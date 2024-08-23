import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span className="Synonyms">
        <p>synonym: </p>
        {props.synonyms.map(function (synonym, index) {
          return (
            <ul className={index}>
              <li>{synonym}</li>
            </ul>
          );
        })}
      </span>
    );
  } else {
    return null;
  }
}
