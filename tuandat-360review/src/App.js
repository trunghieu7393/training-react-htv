import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Molecules/layout/';
import SideMenu from './components/Molecules/menu/';
import EvaluationForm from './components/Molecules/container/form/EvaluationForm.js';
import Report from './components/Molecules/container/report/';
import Assign from './components/Molecules/container/assign/';
import CreateQuestion from './components/Molecules/container/question/create.js';
import QuestionList from './components/Molecules/container/question/list.js';


import './App.css';
// import GlobalLoading from './components/Atoms/GlobalLoading/index.js'


class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <SideMenu />
        <Layout>
          {/* <GlobalLoading /> */}
          <Switch>
            <Route path="/evaluation" component={EvaluationForm} />
            <Route path="/report" component={Report} />
            <Route path="/assign" component={Assign} />
            <Route path="/question-create" component={CreateQuestion} />
            <Route path="/question-list" component={QuestionList} />
            <Redirect from="/" to="/evaluation" />
          </Switch>
        </Layout>
      </div>
    );

  }
}

export default App;
