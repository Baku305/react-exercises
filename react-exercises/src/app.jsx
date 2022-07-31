import React from "react";

import { Sum } from "./Sum";
import { Welcome } from "./Welcome";
import Login from "./Login";

const onLogin = (state) => {
  console.log(state);
};

export function App() {
  return (
    <>
      <div>
        <Welcome />
        <Sum />
        <Login onLogin={onLogin} />
      </div>
    </>
  );
}
