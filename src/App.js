import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import { ReactRouterGlobalHistory } from 'react-router-global-history';

class App extends Component {
  render() {


    const userLinks = (
      <>
        <Sidebar />
      </>
    );

    const getLinks = (
      <>
        <Login />
      </>
    );

    const routerLinks = (
      <>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/register" exact component={Register} />
      </>
    )
    return (
      <Router>
        <ReactRouterGlobalHistory />
        <Header />
        { this.props.auth.isLoggedIn ? userLinks : getLinks}
        <div className="rightpane">
          <Switch>
            {this.props.auth.isLoggedIn ? routerLinks : null}
          </Switch>
        </div>
      </Router >
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(App);
