import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import CauHoi from './Components/CauHoi/Cauhoi';
import ReViewCauHoi from './Components/ReViewCauHoi/ReViewCauHoi';
import DanhMuc from './Components/DanhMuc/DanhMuc';
import TatCaCauHoi from './Components/TatCaCauHoi/TatCaCauHoi';
import Header from './Components/Header/Header';
import BaoCao from './Components/BaoCao/BaoCao';
import BaoCaoChiTiet from './Components/BaoCaoChiTiet/BaoCaoChiTiet';
import DangNhap from './Components/DangNhap/DangNhap';
import DanhGiaMentor from './Components/DanhGiaMentor/DanhGiaMentor';
import SuaCauHoi from './Components/SuaCauHoi/SuaCauHoi';
import TrangDanhGia from './Components/TrangDanhGia/TrangDanhGia';

import './App.scss';
import './styles.css';

class App extends Component {
  render() {
    return (
     
        <div className="app">
          <BrowserRouter>
            <Header/>
            <Switch>
              <Route exact path="/" component={Header}/>
              <Route path="/CauHoi" component={ CauHoi}/>
              <Route path="/DanhMuc" component={ DanhMuc }/>
              <Route path="/ReViewCauHoi" component={ ReViewCauHoi }/>
              <Route path="/TatCaCauHoi" component={TatCaCauHoi}/>
              <Route path="/BaoCao" component={ BaoCao}/>
              <Route path="/BaoCaoChiTiet" component={ BaoCaoChiTiet }/>
              <Route path="/DangNhap" component={ DangNhap }/>
              <Route path="/DanhGiaMentor" component={DanhGiaMentor}/>
              <Route path="/SuaCauHoi" component={ SuaCauHoi}/>
              <Route path="/TrangDanhGia" component={ TrangDanhGia }/>
              
            </Switch>
          </BrowserRouter>
         
        </div>
      
    )
  }
}

export default App;
