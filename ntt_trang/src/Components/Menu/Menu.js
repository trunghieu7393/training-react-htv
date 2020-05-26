import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import DanhMuc from '../DanhMuc/DanhMuc.js';
import CauHoi from '../CauHoi/CauHoi.js';
import ReviewCauHoi from '../ReviewCauHoi/ReviewCauHoi.js';
import MenuItem from './MenuItem'
import LogoMenu from './LogoMenu'

const Menu = () => {
    return (
        <Router>
            <div className="Menu">
                <div className="sidebar" data-color="white" data-active-color="danger">
                    <LogoMenu />
                    <MenuItem />
                </div>
                <Switch>
                    <Route path="/DanhMuc" component={DanhMuc} />
                    <Route path="/CauHoi" component={CauHoi} />
                    <Route path="/ReviewCauHoi" component={ReviewCauHoi} />
                </Switch>
            </div>
        </Router >
    );
};

export default Menu;