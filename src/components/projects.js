import React,{ Component } from 'react';
import { Tabs ,Tab, Grid, Cell, Card, CardText, CardActions, Button, IconButton,CardTitle,CardMenu} from 'react-mdl';

class Project extends Component{
    
    constructor(props){
        super(props);
        this.state={activeTab:0}
    }

    toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth : '450' ,margin: 'auto',width:'35%' }}>
                <CardTitle style={{color: '#333' , height : '176px',background: 'url(https://www.laptoponbudget.com/wp-content/uploads/2019/04/Best-Laptops-for-Android-Studio.png) center / cover'}}>
                    
                </CardTitle>

            <CardText style={{color: '#333'}}>
            <h3><b>Mobile based Inventory Management System using QR code scanner</b></h3>
                
                <li>
                    Easy retrieval of information through firebase and Zxingscanner</li>
                    <li>User Authentication through google sign-in included</li>
                    <li>Done for SIH 2020</li>


                   
            </CardText>

            <CardActions border>
                <a href="https://github.com/Tarun0607/Mobile_inventory" target="_blank">
                <Button colored style={{width:'100%'}}>
                    Github
                </Button></a>
            </CardActions>

            <CardMenu style = {{color:'#FF5733'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>

            </Card>


            <Card shadow={5} style={{minWidth : '450' ,margin: 'auto',width:'35%' }}>
                <CardTitle style={{color: '#333' , height : '176px',background: 'url(https://www.laptoponbudget.com/wp-content/uploads/2019/04/Best-Laptops-for-Android-Studio.png) center / cover'}}>
                    
                </CardTitle>

            <CardText style={{color: '#333'}}>
                <h3><b>Yountos Development (Internship at DomiLearn)</b></h3>
                
                    <li>A plotform for the patients and medical students to connect with others and medical experts</li>
                    <li>Recycler View and API's for join group and group list is added</li>
                    <li>Posts from medical students and medical experts are visible to the end-user</li>
                   
            </CardText>

            <CardActions border>
                <Button colored style={{width:'100%'}}>
                    Github
                </Button>
            </CardActions>

            <CardMenu style = {{color:'#FF5733'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>

            </Card>



            
            </div>
        )
    }

    else if(this.state.activeTab===1){
        return(
            <div>
                <Card shadow={5} style={{minWidth : '450' ,margin: 'auto',width:'35%' }}>
                <CardTitle style={{color: '#333' , height : '176px',background: 'url(https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg) center / cover'}}>
                    
                </CardTitle>

            <CardText style={{color: '#333'}}>
                <h3><b>Employee Performance Evaluation Portal</b></h3>
                
                    <li>A portal to assign tasks for employees </li>
                    <li>Employee's performance can be analysed by their day-to-day uploads</li>
                    <li>Done using HTML,CSS,Javascript and Bootstrap</li>
                    
            </CardText>

            <CardActions border>
                <a href="https://github.com/Tarun0607/Employee_Performance_Evaluation_Portal" target="_blank">
                <Button colored style={{width:'100%'}}>
                    Github
                </Button></a>
            </CardActions>

            <CardMenu style = {{color:'#FF5733'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>

            </Card>
    
            </div>
        )

        }

    else if(this.state.activeTab===2){
        return(
            <div className="projects-grid">

            <Card shadow={5} style={{minWidth : '450' ,margin: 'auto',width:'35%' }}>
                <CardTitle style={{color: '#333' , height : '176px',background: 'url(https://cdn.slant.co/24e8c381-eaac-4141-aa28-7921a1fd8833/-/format/jpeg/-/progressive/yes/-/preview/480x480/) center / cover'}}>
                    
                </CardTitle>

            <CardText style={{color: '#333'}}>
                <h3><b>Mobile Purchasing and Selling Portal</b></h3>
                
                    <li>A portal to purchase mobile and mobile accessories </li>
                    <li>Done using Visual studio + sql server</li>
                    <li>Domain : Database Management</li>
            </CardText>

            <CardActions border>
                <a href="https://github.com/Tarun0607/Mobile-Purchasing-Portal" target="_blank">
                <Button colored style={{width:'100%'}}>
                    Github
                </Button></a>
            </CardActions>

            <CardMenu style = {{color:'#FF5733'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>

            </Card>

            <Card shadow={5} style={{minWidth : '450' ,margin: 'auto',width:'35%' }}>
                <CardTitle style={{color: '#333' , height : '176px',background: 'url(https://cdn.slant.co/24e8c381-eaac-4141-aa28-7921a1fd8833/-/format/jpeg/-/progressive/yes/-/preview/480x480/) center / cover'}}>
                    
                </CardTitle>

            <CardText style={{color: '#333'}}>
                <h3><b>Car sales and Inventory Portal</b></h3>
                
                    <li>A portal to sell cars and purchase car accessories </li>
                    <li>Done using Visual studio + sql server</li>
                    <li>Domain : Software Engineering</li>
                    
            </CardText>

            <CardActions border>
                <a href="https://github.com/Tarun0607/Car-sales-and-inventory-management" target="_blank">
                <Button colored style={{width:'100%'}}>
                    Github
                </Button></a>
            </CardActions>

            <CardMenu style = {{color:'#FF5733'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>

            </Card>
    

    


            </div>
        )
    }

    else if(this.state.activeTab==3){

        return(
            <div>
                <Card shadow={5} style={{minWidth : '450' ,margin: 'auto',width:'35%' }}>
                <CardTitle style={{color: '#333' , height : '176px',background: 'url(https://miro.medium.com/max/5442/1*KpDOKMFAgDWaGTQHL0r70g.png) center / cover'}}>
                    
                </CardTitle>

            <CardText style={{color: '#333'}}>
                <h3><b>User directory using Trie</b></h3>
                
                    <li>An application to retrieve,modify,delete and add information of an user  </li>
                    <li>Faster retreival of search results using Trie data structure</li>
                    <li>Data Structures used : Linked List , Trie</li>
                    
            </CardText>

            <CardActions border>
                <a href="https://github.com/Tarun0607/User-Repository-Using-Trie" target="_blank">
                <Button colored style={{width:'100%'}}>
                    Github
                </Button></a>
            </CardActions>

            <CardMenu style = {{color:'#FF5733'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>

            </Card>
    
            </div>
        )
    }

    else{
        return(
            <div>
                <Card shadow={5} style={{minWidth : '450' ,margin: 'auto',width:'35%' }}>
                <CardTitle style={{color: '#333' , height : '176px',background: 'url(https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_690e90c5de441951cf5715b08b1d5420/arduino-ide.png) center / cover'}}>
                    
                </CardTitle>

            <CardText style={{color: '#333'}}>
                <h3><b>Controlling VLC media player through guesture recognition</b></h3>
                
                    <li>PyautoGUI and Pyserial python modules are used</li>
                    <li>Guestures for PLay/Pause , Vol Up , Vol Down , Rewind and Fast forward are designed</li>
                    <li>Done using Python + Arduino IDE</li>
                    
            </CardText>

            <CardActions border>
                <a href="https://github.com/Tarun0607/Hand-guesture-recognition-ARDUINO-" target="_blank">
                <Button colored style={{width:'100%'}}>
                    Github
                </Button></a>
            </CardActions>

            <CardMenu style = {{color:'#FF5733'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>

            </Card>
    
            </div>
        )
    }

}

    
    
    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})}>
                    <Tab>Android Studio</Tab>
                    <Tab>HTML+CSS</Tab>
                    <Tab>Visual Studio</Tab>
                    <Tab>Data Structures</Tab>
                    <Tab>Arduino</Tab>
                </Tabs>

                
                    <Grid>

                    <Cell col={12}>

                        <div className="content">
                        {this.toggleCategories()}
                        </div>
                    </Cell>

                    </Grid>
                  

                
            </div>
            
        )
    }
}


export default Project;
