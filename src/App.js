import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component{
  render(){
    return ( 
    <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title="My-Profile" scroll>
            <Navigation>
                <a target="_blank" href="https://docs.google.com/gview?url=https://github.com/Tarun0607/Resume/raw/master/My%20Resume.pdf&embedded=true">Resume</a>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="">Powered by &nbsp;
                <img style={{height:"40px",width:"40px"}} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
                </Link>
            </Navigation>
        </Header>
        <Drawer title="My-Profile">
            <Navigation>
            <a target="_blank" href="https://docs.google.com/gview?url=https://github.com/Tarun0607/Resume/raw/master/My%20Resume.pdf&embedded=true">Resume</a>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="">Powered by &nbsp;
                <img style={{height:"40px",width:"40px"}} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
                </Link>

            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    )
  };
}
export default App;
