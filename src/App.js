import React from "react"; 
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import './style.scss';
import Sim from './image/sim.png';
import Calendar from './Calendar.js';
import Todo from './Todo.js';


class App extends React.Component { 
  constructor(props){ 
    super(props); 
    this.state = {} 
  } 
  componentDidMount(){ 
  } 
   
  render(){ 
    return ( 
      <div className="App"> 
        <Container>
          <Header>
            <h2>오늘도 신나는 일정 관리!</h2>
            <hr/>
          </Header>
          <Switch>
            <Route path="/" exact component={Calendar} />
            <Route path="/todo" exact component={Todo} />
           </Switch>
          
          <Footer>
            <img src={Sim}/>
          </Footer>
        </Container>
      </div> 
    ); 
  } 
} 
export default withRouter(App);

const Container = styled.div`
  width:55vw;
  min-height: 430px;
  background-color: white;
  margin:80px auto;
  border-radius: 30px;
  text-align:center;
  position: relative;
  padding:15px 15px 20px 15px;
 

  
  @media (min-width: 768px) and (max-width:1023px) {
  
    width: 80vw;
 
  }

  @media (max-width:767px) {
  
    width: 80vw;
    min-height: 400px;
  }
`

const Header = styled.div`
  & h2{
    font-family: "KOTRA_BOLD-Bold";
    font-size: 26px;
    
    @media (max-width:767px) {
  
      font-size: 20px;
 
  }
  }
  & hr{
    width:85%;
    border: none;
    height : 1px;
    background-color:#D3D2CE70;
    position: relative;
    top:-8px;
    z-index:20;
    
  }
`
const Footer = styled.div`
  
  position: absolute;
  z-index:1000;
  bottom: -60px;
  left:-415px;
  & img{
    
    width:33%;
  }
  @media (min-width: 768px) and (max-width:1023px) {
  
    width: 70vw;
    left:-300px;
    bottom: -50px;
    
  }

  @media (max-width:767px) {
  
    width: 80vw;
    left:-140px;
    bottom: -20px;
  }
  
`

