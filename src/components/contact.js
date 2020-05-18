import React,{ Component } from 'react';
import {Button,Grid,Cell} from 'react-mdl';
import {List,ListItem,ListItemContent} from 'react-mdl';
class Contact extends Component{
    render(){
        return (
            <div className='contact-body'>

            <Grid className="contact-grid">
                <Cell col={6}>

                    <h2>TARUN A H</h2>
                    <img 
                        src={require("./IMG_TARUN.jfif")}
                        alt="avatar"
                        style={{margin:'auto',height:'300px',width:'fit-parent', border:'2px solid red'}}></img>
                    <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Undergraduate Student on Computer Science and Engineering from <br/>VIT , Chennai</p>

                </Cell>
                
                
                
                
                
                <Cell col={6}>

                    <h2>Contact Me</h2>
                    <hr/>

                    <div style={{textAlign:'center'}}className="contact-list">
                        <h4 style={{fontWeight:'bold'}}>Mobile</h4>
                        <p>+91 - 8098672000</p>
                        <h4 style={{fontWeight:'bold'}}>E-mail</h4>
                        <a color="black" href="https://mail.google.com/mail/?view=cm&fs=1&to=tarun.ambili123@gmail.com">tarun.ambili123@gmail.com</a>
                        <h4 style={{fontWeight:'bold'}}>Whatsapp</h4>
                        <a href="https://wa.me/918098672000" target="_blank">
                                <Button raised colored>GET IN TOUCH</Button>
                        </a>
                        <h4 style={{fontWeight:'bold'}}>Telegram</h4>
                        <p>+91-8098672000</p>
                        <h4 style={{fontWeight:'bold'}}>Facebook</h4>
                        <a style={{color:"#333"}} href="https://www.facebook.com/harikuttan.tarun" target="_blank">
                                @Harikuttan Tarun
                        </a>
                        <h4 style={{fontWeight:'bold'}}>Quora</h4>
                        <a style={{color:"#333"}} href="https://www.quora.com/profile/Tarun-Ambili" target="_blank">
                                @Tarun Ambili
                                </a>
                    
                </div>

            </Cell>

        </Grid>

    </div>
        )
    }
}


export default Contact;
