import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import CauHoi from './Components/CauHoi';
import ReViewCauHoi from './Components/ReViewCauHoi';
import DanhMuc from './Components/DanhMuc';
import TatCaCauHoi from './Components/TatCaCauHoi';
import Header from './Components/Header';
import BaoCao from './Components/BaoCao';
import BaoCaoChiTiet from './Components/BaoCaoChiTiet';
import DangNhap from './Components/DangNhap';
import DanhGiaMentor from './Components/DanhGiaMentor';
import SuaCauHoi from './Components/SuaCauHoi';
import TrangDanhGia from './Components/TrangDanhGia';
import NavBar from './Components/MainPanel/NavBar';
import Footer from './Components/MainPanel/Footer';
import './App.scss';
import './styles.css';

class App extends Component {

	render() {
		
		return (
			
			<div className="app">
				<BrowserRouter>
					<Header/>
					<NavBar/>
					<Footer/>
					{/* <button onClick={() => changeLanguage('de')}>de</button>
					<button onClick={() => changeLanguage('en')}>en</button> */}
					<Switch>
						<Route exact path="/" component={DangNhap} />
						<Route path="/CauHoi" component={CauHoi} />
						<Route path="/DanhMuc" component={DanhMuc} />
						<Route path="/ReViewCauHoi" component={ReViewCauHoi} />
						<Route path="/TatCaCauHoi" component={TatCaCauHoi} />
						<Route path="/BaoCao" component={BaoCao} />
						<Route path="/BaoCaoChiTiet" component={BaoCaoChiTiet} />
						<Route path="/DangNhap" component={DangNhap} />
						<Route path="/DanhGiaMentor" component={DanhGiaMentor} />
						<Route path="/SuaCauHoi" component={SuaCauHoi} />
						<Route path="/TrangDanhGia" component={TrangDanhGia} />

					</Switch>
				</BrowserRouter>

			</div>
			
		)
	}
}

export default App;
