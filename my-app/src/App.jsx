import React, { Component, Fragment } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
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
import userService from './services/userService';


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
    // console.log(cookies)
    const isLogged = !!cookies['x-auth-token'];
    this.state = { isLogged };
  }

  login = (values) => {
    userService.login(values).then(() => {
      this.setState({ isLogged: true });
      // this.props.push('/about');
      console.log("done")
    })
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false });
      // history.push('/login');
      return null;
    });
  }

  render() {

    const { isLogged } = this.state;
    // console.log(isLogged);

    return (
      <Fragment>
        <Navigation
        {...this.props}
         isLogged={isLogged}
         logout={this.logout}
         login={this.login } 
         />
         <Switch>
        
        <Route exact path="/" component={ListQuestions} isLogged={isLogged}/>
        <Route path="/about" component={About} isLogged={isLogged}/>
        <Route path="/rules" component={Rules} isLogged={isLogged}/>
        <Route path="/register" component={Register} isLogged={isLogged}/>
        <Route path="/login"
        render={()=> (
          <Login
          isLogged={isLogged}
          login={this.login}
          />
        )}
        />
        <Route path="/userprofile" component={UserProfile} isLogged={isLogged}/>
        <Route path="/origamis" component={Origamis} isLogged={isLogged}/>
        
         </Switch>
        
         <Footer/>     
      </Fragment>
    )
  }
}

export default App;
