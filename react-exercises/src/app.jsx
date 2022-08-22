import React from "react";

import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";

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
          <DisplayLanguage/>
        </LanguageContext.Provider>
      </div>
    </>
  );
}
