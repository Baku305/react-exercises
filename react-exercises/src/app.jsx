import React from "react";

import { Sum } from "./Sum";
import { Welcome } from "./Welcome";
import Login from "./Login";
import {ClickCounter} from "./ClickCounter"
import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";

const onLogin = (state) => {
  console.log(state);
};

const onCounterChange = (state) => {
  console.log(state);
}

export function App() {
  return (
    <>
      <div>
        <Welcome />
        <Sum />
        <Login onLogin={onLogin} />
        <ClickCounter onCounterChange = {onCounterChange}/>
        <Counter/>
        <GithubUser username= "Baku305"/>
        <GithubUserList usernameList= {["alantheandroid","Baku305"]}/>
      </div>
    </>
  );}

