import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Project from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/my-portfolio" component={LandingPage}></Route>
        <Route path="/aboutme" component={Aboutme}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/projects" component={Project}></Route>
        <Route path="/resume" component={Resume}></Route>
    </Switch>
)

export default Main;