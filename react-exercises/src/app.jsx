import React from "react";
import { ClickCounter } from "./ClickCounter";
import ClickTracker from "./ClickTracker ";
import InteractiveWelcome from "./InteractiveWelcome ";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";

export class App extends React.Component {
  render() {
    return (
        <>
        <div>
        <ClickCounter />
      </div>
      <div>
          <ClickTracker />
        </div>
        <div>
          <InteractiveWelcome/>
        </div>
        <div>
          <Login />
        </div>
        <div>
          <UncontrolledLogin/>
        </div>
        </>
    );
  }
}
