import React from "react";


import { CarDetails } from "./CarDetails";
import { FilteredList } from "./FilteredList";


export function App() {
  return (
    <>
      <div>
        <FilteredList list = {[{name:"marco", id:"1", age:"25"},{name:"luigi", id:"1", age:"29"},{name:"laura", id:"1", age:"15"}]}/>
      </div>
    </>
  );}

