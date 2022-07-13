import React from "react";
import { Welcome5 } from "./props-05";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Welcome5 name="Paola" age = "20"/>
        </div>
      </div>
    );
  }
}
