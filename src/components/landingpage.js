import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component{
    render(){
        return (
            <div style={{width:'100%' , margin:'auto'}}>
               <Grid className="landing-grid">
                   <Cell col={12}>

                    <img
                    
                    src="IMG_1620.JPG"
                    alt="avatar"
                    className = "avatar-img"
                    
                    
                    />

                    <div className="banner-text">
                        <h1>Tarun A H</h1>
                        <hr/>
                        <p>A technological enthusiast who is keen in improving and enhancing his skills day by day<br/>
                        and very much interested in Machine Learning and Artificial Intelligence.<br/><br/>
                        Check me out on these handles as well!!</p>
                        <div className="social-links">

                        <a href="https://www.linkedin.com/in/tarun-a-h-1146b11a7/" rel="noopener noreferrer" target="_blank">

                        <i className="fa fa-linkedin-square" aria-hidden="true"/>

                        </a>


                        <a href="https://github.com/Tarun0607" rel="noopener noreferrer" target="_blank">

                        <i className="fa fa-github-square" aria-hidden="true"/>

                        </a>


                        <a href="https://www.hackerrank.com/tarun_ah2018" rel="noopener noreferrer" target="_blank">

                        <i className="fa fa-header" aria-hidden="true"/>

                        </a>

                        <a href="https://www.codechef.com/users/tarun0607" rel="noopener noreferrer" target="_blank">

                        <i className="fa fa-code" aria-hidden="true"/>

                        </a>

                        
                        
                        
                        <a href="https://www.instagram.com/tarun.jpeg_/?hl=en" rel="noopener noreferrer" target="_blank">

                        <i className="fa fa-instagram" aria-hidden="true"/>

                        </a>



                        <a href="https://www.facebook.com/harikuttan.tarun" rel="noopener noreferrer" target="_blank">

                        <i className="fa fa-facebook-official" aria-hidden="true"/>

                        </a>




                        </div>
                    </div>
                   </Cell>

                </Grid> 
            </div>
        )
    }
}


export default LandingPage;
