import React from 'react';
//import Aux from '../../hoc/Aux.js'
import { Link, Route, Switch } from 'react-router-dom';
import EvaluationForm from '../../container/form/EvaluationForm.js';
import Report from '../../container/report/Report.js';

const menu = () => {
  return (
    <div className="sidebar" data-color="white" data-active-color="danger">
      {/* Logo */}
      <div className="logo">
        <a href="#" className="logo-normal">
          <div className="logo-image-small">
            <img src="/assets/img/hybrid-logo.jpg" />
          </div>
        </a>
      </div>
      {/* Menu Item */}
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="active ">
            <Link to="/evaluation">
              <i className="nc-icon nc-bulb-63"></i>
              <p>Đánh Giá</p>
            </Link>

          </li>
          <li>
            <a href="#">
              <i className="nc-icon nc-glasses-2"></i>
              <p>Câu Hỏi</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="nc-icon nc-bullet-list-67"></i>
              <p>Phân công đánh giá</p>
            </a>
          </li>
          <li>
            <Link to="/report">
              <i className="nc-icon nc-paper"></i>
              <p>Báo cáo</p>
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/evaluation" exact component={EvaluationForm} />
        <Route path="/report" component={Report} />
      </Switch>
    </div>
  )
}

export default menu;