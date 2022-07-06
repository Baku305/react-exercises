import {createRoot} from "react-dom/client"
import { Hello } from "./Components-02";

const root = createRoot(document.getElementById("root"))

const helloEl = < Hello />

root.render(helloEl)

