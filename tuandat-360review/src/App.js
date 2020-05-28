import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/layout/';
import SideMenu from './components/menu/';
import EvaluationForm from './components/container/form/EvaluationForm.js';
import Report from './components/container/report/Report.js';

import './App.css';


class App extends Component {

  //fake authentication Promise
  // authenticate() {
  //   return new Promise(resolve => setTimeout(resolve, 4000)) // 2 seconds
  // }

  // componentDidMount() {
  //   this.authenticate().then(() => {
  //     const ele = document.getElementById('ipl-progress-indicator')
  //     if (ele) {
  //       // fade out
  //       ele.classList.add('available')
  //       setTimeout(() => {
  //         // remove from DOM
  //         ele.outerHTML = ''
  //       }, 4000)
  //     }
  //   })
  // }


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
