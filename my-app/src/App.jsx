import React, { Component, Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import './App.css';

import Footer from "./components/common/Footer/Footer";

class App extends Component {
  render() {

    return (
      <Fragment>
         <Footer />
      </Fragment>
    )
  }
}

export default App;
