import React from "react";
import { Sum } from "./Sum";
import { Welcome } from "./Welcome";
import {ClickCounter} from "./ClickCounter"


export class App extends React.Component {
  state = {
    language: "en",
  };

  handleLenguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
    console.log(this.state);
  };

  onLogin = (state) => console.log(state);
 
  render() {
    return (
      <>
        <Welcome />
								<Sum/>
								<ClickCounter/>
      </>
    );
  }
}
