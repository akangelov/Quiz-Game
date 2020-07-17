import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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


class App extends Component {
  render() {

    return (
      <Fragment>
        <Navigation/>
         <Switch>
        
        <Route exact path="/" component={ListQuestions} />
        <Route path="/about" component={About} />
        <Route path="/rules" component={Rules} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/userprofile" component={UserProfile} />
        <Route path="/origamis" component={Origamis} />
        
         </Switch>
        
         <Footer/>     
      </Fragment>
    )
  }
}

export default App;
