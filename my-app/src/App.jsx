import React, { Fragment } from "react";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import './App.css';

import About from "./pages/about/About";
import AllQuestions from "./components/questions/crud/AllQuestions";
import CreateQuestion from "./components/questions/crud/CreateQuestion";
import Answer from "./components/questions/answerForm/Answer";
import HomePage from "./pages/home/Home";
import EditQuestionForm from "./components/questions/crud/EditQuestionForm";
import Footer from "./components/common/Footer/Footer";
import Login from "./pages/user/Login";
import Navigation from "./components/common/Navigation/Navigation";
import Questions from "./components/questions/questionsbycategory/QuestionsByCategory";
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
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={About} />
                <Route path="/rules" component={Rules} />
                <Route path="/create" component={CreateQuestion} />
                <Route path="/all" component={AllQuestions} />
                <Route path="/edit/:id" component={EditQuestionForm} />
                <Route path="/questions/:id" component={Questions} />
                <Route path="/question/:id" component={Answer} />
                <Route path="/userprofile/:id" component={UserProfile} />
                <Route path="/register" component={Register} />
                <Route path="/login" render={()=> (<Login login={this.login} /> )} />
                <Route path="*" component={PageNotFound} />
            </Switch>
            
            <Footer/>  
                      
        <ToastContainer />  
      
        </Fragment>
        )
    }
}

export default withRouter(App);
