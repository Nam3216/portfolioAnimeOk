import React from "react";
import { Grid,Container } from "@mui/material";
import mockProjects from "../Mock/MockProjects";
import CardOk from "./Card";
import "./styleProjects.css"

const Projects=()=>{

    return(
        <div className="projects-container">
            <div className="neon" id="projects-titleok">Proyectos</div>
        <Grid container className="projects-title">
            
           
            {mockProjects.map((item)=>{
            //para q haya 3 por pantalla
            return    (<Grid item  md={4} xs={12} className="projects">
                    <CardOk data={item}/>
            </Grid>)

            })}
            


        </Grid>
  
        </div>
    )


}

export default Projects