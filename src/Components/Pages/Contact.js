import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@mui/material";
import { Grid,Container } from "@mui/material";
import "./styleContact.css"

const Contact=()=>{
    const form=useRef()

   /* const sendCheck=()=>{
        setCheckMail(true)
    }*/

    const sendEmail=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_kothuvl', 'template_b1s9ayj', form.current, 'Ab-jG_IYyCla718rH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return(
        <div className="form-containerok">
            
            <Grid container className="form-container"> 
                <div className="neon" id="contactok">Contacto</div>
                <Grid container className="form-items"> 
                    <Grid item md={6} xs={12} className="form-item-form">
                            <div>
                                <div className="contact-text">
                                    <p id="contact-comic">Te dije que era bueno...vamos llamalo, mandale un mail o completa el formulario...</p>
                                    <div className="contact-data">
                                        <p>54 9 1133232167</p>
                                        <p>norbertomanzanos@gmail.com</p>
                                    </div>
                                </div>
                                <form ref={form} className="form" onSubmit={sendEmail}>
                                    <label for="name"></label>
                                    <input type="text" placeholder="Escribe tu nombre" name="name" />
                                    <label for="email"></label>
                                    <input type="text" placeholder="Escribe tu email" name="email"/>
                                    <label for="message"></label>
                                    <textarea  id="text-input" placeholder="Escribe tu mensaje" name="message" />
                                    <Button variant="contained"id="form-button" type="submit">Enviar</Button>
                                </form>
                            </div>
                    </Grid>
                    <Grid item md={6} xs={12} >

                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact