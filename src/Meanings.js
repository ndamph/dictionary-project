import React from "react";

import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.code.meanings.map(function (definition, index) {
        return (
          <div key={index}>
            <h5>{definition.partOfSpeech}</h5>
            <p>
              {definition.definition}
              <br />
              <Examples examples={definition.example} />
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
