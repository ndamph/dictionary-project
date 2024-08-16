import React from "react";

import "./Results.css";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.code) {
    return (
      <div className="Results">
        <h1 className="text-capitalize">{props.code.word}</h1>
        <h4>{props.code.phonetic}</h4>
        <Meanings code={props.code} />
      </div>
    );
  } else {
    return null;
  }
}
