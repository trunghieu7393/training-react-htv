import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/layout/Layout.js';
import SideMenu from './components/menu/SideMenu.js';
import EvaluationForm from './container/form/EvaluationForm.js';
import Report from './container/report/Report.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Layout>
          <SideMenu />
            <EvaluationForm />
            <Report />
          </Layout>
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
