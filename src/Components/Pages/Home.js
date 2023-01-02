import React,{useEffect,useState} from "react";
import { Grid,Container } from "@mui/material";
import "./styleHome.css"

const Home=()=>{
    const[show,setShow]=useState(false)

//<p>Mi nombre es Norberto Manzanos y vivo en Buenos Aires, Argentina. Soy un desarrollador Fullstack. Entre otras tecnologias domino Html, Css, Javascript, TypeScript, React, React Native, Node Express, MongoDB y MySql. Mas abajo podras ver mis <a href="#projects">proyectos</a>, <a href="#curriculum">curriculum</a> y tambien mis datos de <a href="#contacto">contacto!</a></p>
    return(
        <Grid container className="home-title">
            <link async href="https://fonts.googleapis.com/css?family=Warnes" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>
           <div className="neon">Bienvenido a Coding City</div>
           <Grid container >
                <Grid item md={6} xs={12} className="home-title-about">
                    
                    
                    <div className="home-text">
                       
                            <p  id="home-msg">Hey, me dijeron que buscas un buen desarrollador...ven, tengo al mejor para ti<p id="home-msgok">. </p></p>
                         
                            
                           
                    </div>
                    <div className="home-link">
                    <a href="#bio" style={{color:"white"}} >
                        <p>Click aqui para seguirlo y dar con el desarrollador</p>
                    </a>
                    </div>
                </Grid>

   
            
            <Grid item md={6} xs={12}>
                <div className="home-title-wolf">
                    
                   
                    
                    
                </div>
                
            </Grid>
            </Grid>

        </Grid>
    )



}

export default Home

/* <Grid container className="home-title">
           
                <Grid item md={6} xs={12} className="home-title-about">
                    
                </Grid>

   
            
            <Grid item md={6} xs={12}>
                <div className="home-title-wolf">
                    <img src="wolfnofondo.png" alt="wolf" id="wolf"/>
                    
                    <p style={{color:"white"}} onClick={()=>setShow(true)} >Hey...me dijeron que estas bucando a un desarrollador? Bueno, ¡tengo al mejor para ti!. ¡Clickeame y veras!</p>
                </div>
                
            </Grid>

        </Grid>*/