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
import { Provider } from 'react-redux';
// import configureStore from './redux/store';
import store from './redux/store';
import './App.scss';
import './styles.css';
import GlobalLoading from '../src/Components/Atoms/GlobalLoading';
import { useTranslation, Trans } from 'react-i18next';
// const store= configureStore();
class App extends Component {

	render() {
		
		return (
			<Provider store={ store }>
			<div className="app">
				<BrowserRouter>
					<Header/>
					<NavBar/>
					<GlobalLoading/>
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
			</Provider>
		)
	}
}

export default App;
