import React from "react";
import InteractiveWelcome from "./InteractiveWelcome ";


export class App extends React.Component {

  onLogin = (state) => console.log(state);

  render() {
    return (
        <>
        <div>
          <InteractiveWelcome/>
        </div>
        </>
    );
  }
}
