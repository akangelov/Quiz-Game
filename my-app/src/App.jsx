import React, { Fragment } from "react";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import './App.css';

import About from "./pages/about/About";
import EditQuestions from "./components/questions/crud/GetQuestions";
import CreateQuestion from "./components/questions/crud/CreateQuestion";
import GetQuestion from "./components/questions/answerForm/GetQuestion";
import HomePage from "./pages/home/Home";
import EditQuestionForm from "./components/questions/crud/EditQuestionForm";
import Footer from "./components/common/Footer/Footer";
import Login from "./pages/user/Login";
import Navigation from "./components/common/Navigation/Navigation";
import GetQuestionsByCategory from "./components/questions/questionsbycategory/GetQuestionsByCategory";
import Rules from "./pages/rules/Rules";
import PageNotFound from "./pages/notFound/PageNotFound";
import Register from "./pages/user/Register";
import UserContext from './utils/Context';
import UserProfile from "./pages/user/UserProfile";
import userService from './utils/userService';

class App extends React.Component {

    static contextType = UserContext; 

    login = (values) => {
      userService.login(values).then((res) => {
          this.context.logIn(res)
      if (res === undefined) {
          toast("Invalid username or password!")
      } else {
          toast("User succesfully logged in!")
          console.log(this.context)
          this.props.history.push('/')};
      })
    }

    logout = () => {
        userService.logout().then(() => {
            this.props.history.push('/login');
            this.context.logOut()
            toast("Logout succesful!")
            console.log(this.context)
            return null;
      });
    }

    render() {
        return (
        <Fragment>
            <Navigation logout={this.logout} />

            <Switch>
                <Route exact path="/">
                    {this.context.loggedIn ? <HomePage/> : <Redirect to="/login"/> }     
                </Route> 
                <Route path="/about" component={About} />
                <Route path="/rules" component={Rules} />
                <Route path="/create">
                    {this.context.loggedIn ? <CreateQuestion/> : <Redirect to="/login"/> }     
                </Route> 
                <Route path="/edit">
                    {this.context.loggedIn ? <EditQuestions/> : <Redirect to="/login"/> }     
                </Route> 
                <Route path="/edit/:id" component={EditQuestionForm} /> 
                <Route path="/category/:id" component={GetQuestionsByCategory} />
                <Route path="/question/:id" component={GetQuestion} />
                <Route path="/userprofile/:id" component={UserProfile} />
                <Route path="/register">
                    {!this.context.loggedIn ? <Register/> : <Redirect to="/"/> }     
                </Route> 
                <Route path="/login"> 
                    {!this.context.loggedIn ? <Login login={this.login} /> : <Redirect to="/"/> } 
                </Route> 
                <Route path="*" component={PageNotFound} />
            </Switch>
            
            <Footer/>  
                      
        <ToastContainer />  
      
        </Fragment>
        )
    }
}

export default withRouter(App);
