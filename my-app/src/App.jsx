import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import './App.css';

import Footer from "./components/common/Footer/Footer";
import Navigation from "./components/common/Navigation/Navigation";
import About from "./components/about/About";
import Rules from "./components/rules/Rules";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import ListQuestions from "./components/questions/read/ListQuestions";
import Origamis from "./components/origamis/Origami";
import UserProfile from "./components/user/UserProfile";
// import userService from '../services/user-service';


function parseCookeis() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

class App extends Component {

  constructor(props) {
    super(props);
    const cookies = parseCookeis();
    console.log(cookies)
    const isLogged = !!cookies['x-auth-token'];
    this.state = { isLogged };
  }

  // register = (data) => {
  //   return userService.register(data)
  // }

  render() {

    const { isLogged } = this.state;
    console.log(isLogged);

    return (
      <Fragment>
        <Navigation isLogged={isLogged} />
         <Switch>
        
        <Route exact path="/" component={ListQuestions} isLogged={isLogged}/>
        <Route path="/about" component={About} isLogged={isLogged}/>
        <Route path="/rules" component={Rules} isLogged={isLogged}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login} isLogged={isLogged}/>
        <Route path="/userprofile" component={UserProfile} isLogged={isLogged}/>
        <Route path="/origamis" component={Origamis} isLogged={isLogged}/>
        
         </Switch>
        
         <Footer/>     
      </Fragment>
    )
  }
}

export default App;
