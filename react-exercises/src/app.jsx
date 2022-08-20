import React from "react";
import { Welcome } from "./Welcome";
import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./Counter";

export function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Welcome name="ERIK" />}></Route>
          <Route path="/counter" element={<ClickCounter />}></Route>
          <Route path="/:username"/>
        </Routes>
      </div>
    </>
  );
}
