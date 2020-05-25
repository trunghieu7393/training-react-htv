import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import CauHoi from './Components/CauHoi/Cauhoi';
import ReViewCauHoi from './Components/ReViewCauHoi/ReViewCauHoi';
import DanhMuc from './Components/DanhMuc/DanhMuc';


import './App.scss';
import './styles.css';

class App extends Component {
  render() {
    return (
     
        <div className="app">
          <BrowserRouter>
            
            <Switch>
              <Route exact path="/" component={ CauHoi}/>
              <Route path="/CauHoi" component={ CauHoi}/>
              <Route path="/DanhMuc" component={ DanhMuc }/>
              <Route path="/ReViewCauHoi" component={ ReViewCauHoi }/>
            </Switch>
          </BrowserRouter>
         
        </div>
      
    )
  }
}

export default App;
