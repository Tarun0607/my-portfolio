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
                        src="IMG_TARUN.jfif"
                        alt="avatar"
                        style={{height:'300px', border:'2px solid red'}}></img>
                    <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Undergraduate Student on Computer Science and Engineering from <br/>VIT , Chennai</p>

                </Cell>
                
                
                
                
                
                <Cell col={6}>

                    <h2>Contact Me</h2>
                    <hr/>

                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                +91-8098672000</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                                <i className="fa fa-envelope-square" aria-hidden="true"/>
                                tarun.ambili123@gmail.com</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className="fa fa-telegram" aria-hidden="true"/>
                                +91-8098672000
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className="fa fa-whatsapp" aria-hidden="true"/>
                                <a href="https://wa.me/8098672000" target="_blank">
                                <Button raised colored>GET IN TOUCH</Button>
                                </a>
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className="fa fa-facebook-square" aria-hidden="true"/>
                                <a style={{color:"#333"}} href="https://www.facebook.com/harikuttan.tarun" target="_blank">
                                @Harikuttan Tarun
                                </a>
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className="fa fa-quora" aria-hidden="true"/>
                                <a style={{color:"#333"}} href="https://www.quora.com/profile/Tarun-Ambili" target="_blank">
                                @Tarun Ambili
                                </a>
                                </ListItemContent>
                        </ListItem>

                        
                        
                    </List>
                </div>

            </Cell>

        </Grid>

    </div>
        )
    }
}


export default Contact;
