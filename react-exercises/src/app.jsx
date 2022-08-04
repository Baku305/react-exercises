import React from "react";

import { Sum } from "./Sum";
import { Welcome } from "./Welcome";
import Login from "./Login";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";

import { GithubUserList } from "./GithubUserList";
import { CarDetails } from "./CarDetails";

const onLogin = (state) => {
  console.log(state);
};

const onCounterChange = (state) => {
  console.log(state);
};

export function App() {
  const [language, setlanguage] = useState("en");

  const handleChangeLanguage = (event) => {
    setlanguage(event.target.value);
  };
  return (
    <>
      <div>
        <select name="" id="" onChange={handleChangeLanguage}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={language}>
          <Welcome />
          <Sum />
          <Login onLogin={onLogin} />
          <ClickCounter onCounterChange={onCounterChange} />
          <Counter />
          <GithubUser username="Baku305" />
          <GithubUserList />
        <CarDetails initialData={{ model: "BMW", year: "2020", color: "blue" }} />
        </LanguageContext.Provider>
      </div>
    </>
  );
}
