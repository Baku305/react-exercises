import React from "react";
import { Hello } from "./Components-02";

const HelloEl = <Hello/>

export class App extends React.Component{
    render(){
        return <div>{HelloEl}</div>
    }
}