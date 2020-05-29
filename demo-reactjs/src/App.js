import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/layout/';
import SideMenu from './components/menu/';
import EvaluationForm from './container/form/EvaluationForm.js';
import Report from './container/report/Report.js';
import store from './redux/store';
// import GlobalLoading from './components/GlobalLoading/index';

import LoadingPage from './components/LoadingPage/index';


class App extends Component {

  // fake authentication Promise
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        },400)
      }
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          {/* <GlobalLoading /> */}
          <LoadingPage />
          <SideMenu />
          <Layout>
            {/* <Route exact path="/" component={Login} /> */}
            <Route path="/evaluation" component={EvaluationForm} />
            <Route path="/report" component={Report} />
          </Layout>
        </div>
      </Provider>
    );

  }
}

export default App;