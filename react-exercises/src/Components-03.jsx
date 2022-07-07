import React from "react";
import { Hello } from "./Components-02";
import { Welcome } from "./Props-01";

const HelloEl = <Hello/>
const WelcomeEl = <Welcome name = "Francesco"/>

export class App extends React.Component{
    render(){
        return <div>{HelloEl} {WelcomeEl}</div>
    }
}