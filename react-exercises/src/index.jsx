import React from "react";
import {createRoot} from "react-dom/client"
import { App } from "./Components-03";
import { Hello } from "./Components-02";


const root = createRoot(document.getElementById("root"))

const appEl = <App/>
const HelloEl = <Hello/>

root.render(
    <>
    {HelloEl}
    {appEl}
    </>
    
)

