import React from "react";
import { Hello } from "./Components-02";
import { Welcome } from "./Props-01";
import { Welcome2 } from "./Props-02";
import { Welcome3 } from "./Props-03";
import { Welcome4 } from "./props-04";
import { Welcome5 } from "./props-05";


export class App extends React.Component {
  render() {
    return (
      <div>
        <span><Hello /></span> 
        <span><Welcome name = "Francesco" /></span>
        <span><Welcome2 /></span>
        <span><Welcome3 name ="Giovanni" age="18" /></span>
        <span><Welcome4 name = "Marco"/></span>
        <span><Welcome5 name = "Paola"/></span>
      </div>
    );
  }
}
