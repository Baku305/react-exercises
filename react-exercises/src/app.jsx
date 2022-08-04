import React from "react";


import { CarDetails } from "./CarDetails";


export function App() {
  return (
    <>
      <div>
        <CarDetails initialData = {{model : "BMW", year : "2020", color : "blue"}}/>
      </div>
    </>
  );}

