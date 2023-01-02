import React from "react";
import Home from "./Home";
import Bio from "./Bio";
import Projects from "./Projects";
import Contact from "./Contact";

const HomePage=()=>{

    return(
        <div>
            <div id="home">
                <Home/>
            </div>
            <div id="bio">
                <Bio/>
            </div>
            <div id="proyectos">
                <Projects/>
            </div>
            <div id="contacto">
                <Contact/>
            </div>


        </div>
    )


}

export default HomePage