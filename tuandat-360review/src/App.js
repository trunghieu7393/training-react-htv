import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/';
import SideMenu from './components/menu/';
import EvaluationForm from './components/container/form/EvaluationForm.js';
import Report from './components/container/report/Report.js';

import './App.css';
import GlobalLoading from './components/GlobalLoading/index.js'


class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <SideMenu />
        <Layout>
          <GlobalLoading />
          <Switch>
            <Route path="/evaluation" component={EvaluationForm} />
            <Route path="/report" component={Report} />
            <Redirect from="/" to="/evaluation" />
          </Switch>
        </Layout>
      </div>
    );

  }
}

export default App;
