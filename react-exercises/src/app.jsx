import React from "react";
import { Hello } from "./HelloWorld";
import { Welcome } from "./Props-01";
import { Welcome2 } from "./Props-02";
import { Welcome3 } from "./Props-03";
import { Welcome4 } from "./props-04";
import { Welcome5 } from "./props-05";
import { Welcome6 } from "./props-05";
import { Counter } from "./Counter";

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
          <Welcome4 name={<strong>Marco</strong>} />
        </div>
        <div>
          <Welcome5 name="Paola" age = "20"/>
        </div>
        <div>
          <Welcome5 name="Piero" age = "17"/>
        </div>
        <div>
          <Welcome5 name="Fabrizio"/>
        </div>
        <div>
          <Welcome6 name="Nino" age = "66"/>
        </div>
        <div>
          <Welcome6 name="John" age = "64"/>
        </div>
        <div>
          <Counter initialValue = {10} increment = {2}interval = {1000}/>
        </div>
      </div>
    );
  }
}
