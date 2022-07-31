import React from "react";
import { Sum } from "./Sum";
import { Welcome } from "./Welcome";
import {ClickCounter} from "./ClickCounter"


export class App extends React.Component {

  render() {
    return (
      <>
								<ClickCounter/>
      </>
    );
  }
}
