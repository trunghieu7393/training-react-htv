import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/layout/';
import SideMenu from './components/menu/';
import EvaluationForm from './container/form/EvaluationForm.js';
import Report from './container/report/Report.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SideMenu />
        <Layout>
          <Route path="/evaluation" component={EvaluationForm} />
          <Route path="/report" component={Report} />
        </Layout>
      </div>
    );

  }
}

export default App;
