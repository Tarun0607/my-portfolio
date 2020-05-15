import React,{ Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Aboutme extends Component{
    render(){
        return (
            <div>
                <Grid className="about-grid">
                    <Cell className="about-left" col={4}>

                        <div style={{textAlign:'center'}}>
                            <img src="Resume photo.jpeg"
                            alt="avatar"
                            style={{height:'300px',width:'300px'}}/>

                        </div>
                        <h2 style={{paddingTop:'2em'}}>Tarun A H</h2>
                        <h4 style={{color:'grey'}}>Computer Science Student</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        <p>An undergraduate student on Computer Science and Engineering from Vellore Institute Of Technology , Chennai . Aritificial Intelligence is something that excites me more about technology .
                            Apart from Academics , I am very much Interested in Piano and music . 
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>D103, Golden Garden D block , Tata New Heaven Ribbon Walk , Mambakkam, Near VIT college , Chennai - 636127</p>
                        <h5>Phone</h5>
                        <p>+91-8098672000</p>
                        <h5>Email</h5>
                        <p>tarun.ambili123@gmail.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell className="about-right" col={8}>
                        <h2>About Me</h2>
                        <hr style={{borderTop:'3px solid red', width: '50%'}}/>
                        <p style={{font:'sans-serif',fontsize:"66px",fontWeight:"bold",lineHeight:"2.0"}}>Hey there!! Technology has always been a fascination to me since my childhood . It all started when my dad gifted me a laptop when 
                            I was in my 3rd grade . Being an admirer of technology , i really wished to study Computer Science and Engineering in the best educational
                            Institution in the country . I was a JEE aspirant but couldnt get through the cut-off required for IIT's and NIT's as well . But then , I had a firm faith in my skills
                            and started exploring more about the latest technologies . I look forward to participate in hackathons and providing innovative solutions for the
                            problems .  
                        </p>

                        <p style={{font:'sans-serif',fontsize:"66px",fontWeight:"bold",lineHeight:"2.0"}}>I was very weak in programming , which is the heart of Computer Science . Started Practising a lot of problems across various platforms .
                            The struggle has been paying off really well recently . I look forward for participating in competitive programming and increasing my problem-solving abilities.
                            Now , Solving problems has become my hobby!!
                        </p>

                        <p style={{font:'sans-serif',fontsize:"66px",fontWeight:"bold",lineHeight:"2.0"}}>I was a resident in Salem , a city in TamilNadu , for around 10 years. I represented my School in various competitions like quizzes, Speeches , writing .
                            I was able to win some trophies for my School too!! . The most memorable event is winning district 1st in Salem in a letter-writing competition in 2016.
                            I could remember the days when I stammered a lot just to speak 2 lines and the mistakes I made just to write 2 lines . I have went through many embrassing moments.Being a strong believer of effort and Hardwork , 
                            I struggled a lot to overcome my fear and improve my skills .  
                         </p>

                        <p style={{font:'sans-serif',fontsize:"66px",fontWeight:"bold",lineHeight:"2.0"}}>
                            Apart from Academics , I am very much interested in Music and playing piano . If given an option to change my career , I would love to become
                            a band player. I am also interested in organising events and yes I have organised some events as a part of School and college culturals!! 
                            Being a fan of AR Rahman and Shah-rukh Khan, I love watching movies, would plug my earphones and listen music in my leisure time.
                        </p>

                        <p style={{font:'sans-serif',fontsize:"66px",fontWeight:"bold",lineHeight:"2.0"}}>
                            I've got a wonderful bunch of like-minded people as my friends, who were with me in my ups and downs.
                            Currently , Persuing Undergraduation in Computer Science and Engineering , I look forward to work in a team environment
                            Keen on improving my skills so as to get placed in an orgranization, enabling me to utilize my skills for the growth and development of the orgaization. 
                        </p>

                        <p style={{font:'sans-serif',fontsize:"66px",fontWeight:"bold",lineHeight:"2.0"}}>
                            This webpage is done using React-js . Got to know the basics of React and implemented the concepts while designing the webpage.
                            <br/>
                            Cheers!!

                        </p>

                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Aboutme;
