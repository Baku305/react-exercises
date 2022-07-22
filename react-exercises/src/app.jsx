import React from "react";
import { ClickCounter } from "./ClickCounter";
import ClickTracker from "./ClickTracker ";
import InteractiveWelcome from "./InteractiveWelcome ";
import Login from "./Login";
import TodoList from "./TodoList";
import UncontrolledLogin from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component {

  onLogin = (state) => console.log(state);

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
          <Login onLogin = {this.onLogin}/>
        </div>
        <div>
          <UncontrolledLogin/>
        </div>
        <div>
          <TodoList/>
        </div>
        <div>
          <Welcome/>
        </div>
        </>
    );
  }
}
