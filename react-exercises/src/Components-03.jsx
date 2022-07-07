import React from "react";
import { Hello } from "./Components-02";
import { Welcome } from "./Props-01";
import { Welcome2 } from "./Props-02";

const HelloEl = <Hello/>
const WelcomeEl = <Welcome name = "Francesco"/>
const Welcome2El = <Welcome2 />

export class App extends React.Component{
    render(){
        return <div>{HelloEl} {WelcomeEl} {Welcome2El}</div>
    }
}