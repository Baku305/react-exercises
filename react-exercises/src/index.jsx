import React from "react";
import {createRoot} from "react-dom/client"
import { App } from "./Components-03";



const root = createRoot(document.getElementById("root"))

const appEl = <App/>

root.render(appEl)

