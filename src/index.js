import ReactDom from "react-dom/client"

import Home from "./viwes/Home/home"
import About from "./viwes/About/about"
import Contact from "./viwes/Contact/contact"

const root = ReactDom.createRoot(document.getElementById("root"))



const pathname = window.location.pathname
if (path =="/")
    {
        root.render(<Home/>)
    }

else if (path =="/about")  
    {
        root.render(<About/>)
    } 

else if (path =="/contact")  
        {
            root.render(<Contact/>)
        } 