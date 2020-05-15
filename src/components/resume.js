import React,{ Component } from 'react';

class Resume extends Component{
    render(){
        return (
            <div class="resume-page">
                <embed src={require("./My Resume.pdf")} ></embed>
            </div>
        )
    }
}


export default Resume;
