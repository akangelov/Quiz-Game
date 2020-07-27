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


function parseCookeis() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

class App extends React.Component {

  constructor(props) {
    super(props);
    const cookies = parseCookeis();
    const isLogged = !!cookies['x-auth-token'];
    this.state = { isLogged,
                   userId: "",
                   userName: ""
    };
  }

  login = (values) => {
    userService.login(values).then((res) => {
      console.log(res) 
      // console.log(this.userId)
    if (res === undefined) {
        toast("Invalid username or password!")
    } else {
        toast("User succesfully logged in!")
        this.setState({ isLogged: true });
        this.setState({ userId: res._id });
        this.setState({ userName: res.username });
        this.props.history.push('/')};
    })
  }

  logout = () => {
    userService.logout().then(() => {
      toast("Logout succesful!")
      this.setState({ isLogged: false });
      this.props.history.push('/login');
      return null;
    });
  }

  render() {
    console.log(this.state)
    const { isLogged } = this.state;
    const {userId} = this.state;
    const {userName} = this.state;
    // console.log(this.props)

    return (
      <Fragment>
        <Navigation
        // {...this.props}
         isLogged={isLogged}
         userId={this.state.userId}
         logout={this.logout}
         />
         <Switch>
        
        <Route exact path="/" component={Category} isLogged={isLogged}/>
        <Route path="/about" component={About} isLogged={isLogged}/>
        <Route path="/rules" component={Rules} isLogged={isLogged}/>
        <Route path="/create" component={CreateQuestion} isLogged={isLogged}/>
        <Route path="/all" component={AllQuestions} isLogged={isLogged}/>
        <Route path="/edit/:id" component={EditQuestionForm} isLogged={isLogged} />
        <Route path="/questions/:id" component={Questions} isLogged={isLogged}/>
        <Route path="/question/:id" component={Detail} isLogged={isLogged} />
        <Route path="/userprofile/:id"
         render={()=> (
          <UserProfile
          isLogged={isLogged}
          userId={userId}
          userName={userName}
          />
        )}
        />
        <Route path="/register" component={Register} isLogged={isLogged}/>
        <Route path="/login"
         render={()=> (
          <Login
          isLogged={isLogged}
          login={this.login}
          />
        )}
        />
         </Switch>
        
         <Footer/>
         <ToastContainer />     
      </Fragment>
    )
  }
}

export default withRouter(App);
