import React from "react";
import { Grid,Container } from "@mui/material";
import "./styleBio.css"
import SkillBar  from 'react-skillbars';
import certJs from "./certificado_javascript.pdf"
import certReact from "./certificado_react.pdf"
import certNod from "./nodejs.pdf"

const Bio=()=>{

    const skills = [
        { type: 'Javascript', level: 85 },
        { type: 'Typescript', level: 80 },
        { type: 'React', level: 85 },
        { type: 'Node Js', level: 75 },
        { type: 'MySql', level: 75 },
        { type: 'MongoDB', level: 75 },
      ];

      const colors = {
        bar: "#3498db",
        title: {
          text: "#fff",
          background: "#2980b9"
        }
      };

    return(
        <div className="bio-container">
          
                <Grid container className="bio-title">
                    <div className="neon" id="bio-titleok">Acerca de mi</div>
                    
                    <Grid container spacing={2} className="bio-items">
                        <Grid item md={6} xs={12} className="bio-title-about">
                            <div className="bio-title-text">
                                <div className="bio-title-picture">
                                    <img src="foto.png" alt="norberto" id="picture" />
                                    <h2>Hola, soy Norberto!</h2>
                                

                                </div>
                                <div>
                                    <h3>Desarrollador Fullstack</h3>
                                    
                                    
                                    <p id="bio">Mi nombre es Norberto Manzanos y vivo en Buenos Aires, Argentina. Soy un desarrollador Fullstack. Entre otras tecnologias domino Html, Css, Javascript, TypeScript, React, React Native, Node Express, MongoDB y MySql. Mas abajo podras ver mis proyectos, curriculum y tambien mis datos de contacto!</p>
                                </div>
                                <div className="bio-links">
                                    <div className="bio-linksa">
                                        
                                            <p>Aqui esta mi curriculum, descargalo!</p>
                                      
                                    </div>
                                    <div className="bio-linksb">
                                        <a href="#proyectos" >
                                            <p>Tambien tengo varios proyectos para que revises, miralos! </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12} className="bio-title-about">
                            <SkillBar skills={skills} height={'3vh'} animationDelay={1000} colors={colors}/>
                        </Grid>
                    </Grid>

                </Grid>

        </div>
    )
}

export default Bio

/* <p>Html - Css</p>
                            <p>JavasScript - TypeScript - Python</p>
                            <p>React - Redux</p>
                            <p>Node - MySql - MongoDB</p>*/