import React from "react";
import { Hello } from "./Components-02";
import { Welcome } from "./Props-01";
import { Welcome2 } from "./Props-02";
import { Welcome3 } from "./Props-03";

const HelloEl = <Hello />;
const WelcomeEl = <Welcome name="Francesco" />;
const Welcome2El = <Welcome2 />;
const Welcome3El = <Welcome3 name="Giovanni" age="28" />;

export class App extends React.Component {
  render() {
    return (
      <div>
        <span>{HelloEl}</span> 
        <span>{WelcomeEl}</span>
        <span>{Welcome2El}</span>
        <span>{Welcome3El}</span>
      </div>
    );
  }
}
