import React from "react";

export default function Meanings(props) {
  console.log(props.code);
  return (
    <div className="Meanings">
      {props.code.meanings.map(function (definition, index) {
        return (
          <div key={index}>
            <h5>{definition.partOfSpeech}</h5>
            <p>
              {definition.definition}
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
