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
        <div>
          <Hello />
        </div>
        <div>
          <Welcome name="Francesco" />
        </div>
        <div>
          <Welcome2 />
        </div>
        <div>
          <Welcome3 name="Giovanni" age="18" />
        </div>
        <div>
          <Welcome4 name="Marco" />
        </div>
        <div>
          <Welcome5 name="Paola" age = "20"/>
        </div>
        <div>
          <Welcome5 name="Paola" age = "17"/>
        </div>
      </div>
    );
  }
}
