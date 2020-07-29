import React, { Fragment } from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import './App.css';

import Footer from "./components/common/Footer/Footer";
import Navigation from "./components/common/Navigation/Navigation";
import About from "./components/about/About";
import Rules from "./components/rules/Rules";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import CreateQuestion from "./components/questions/Create";
import AllQuestions from "./components/questions/AllQuestions";
import Questions from "./components/questions/Questions";
import EditQuestionForm from "./components/questions/EditQuestionForm";
import Detail from "./components/questions/Detail";
import UserProfile from "./components/user/UserProfile";
import userService from './services/userService';
import Category from "./components/questions/Category";
import UserContext from './services/Context';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = { userId: "", userName: "" };
    } 

    static contextType = UserContext; 

    login = (values) => {
      userService.login(values).then((res) => {
          this.context.logIn(res.username)
      if (res === undefined) {
          toast("Invalid username or password!")
      } else {
          toast("User succesfully logged in!")
          this.setState({ userId: res._id });
          this.setState({ userName: res.username });
          this.props.history.push('/')};
      })
    }

    logout = () => {
      userService.logout().then(() => {
      this.context.logOut()
        toast("Logout succesful!")
        console.log(this.context)
        this.setState({ isLogged: false });
        this.props.history.push('/login');
        return null;
      });
    }

    render() {
        return (
        <Fragment>

            <Navigation
             userId={this.state.userId}
             logout={this.logout} />

            <Switch>
                <Route exact path="/" component={Category}/>
                <Route path="/about" component={About} />
                <Route path="/rules" component={Rules} />
                <Route path="/create" component={CreateQuestion} />
                <Route path="/all" component={AllQuestions} />
                <Route path="/edit/:id" component={EditQuestionForm} />
                <Route path="/questions/:id" component={Questions} />
                <Route path="/question/:id" component={Detail} />
                <Route path="/userprofile/:id" component={UserProfile} />
                <Route path="/register" component={Register} />
                <Route path="/login" render={()=> (<Login login={this.login} /> )} />
            </Switch>

            <Footer/>        
        
        <ToastContainer />  
        </Fragment>
        )
      }
    }

export default withRouter(App);
