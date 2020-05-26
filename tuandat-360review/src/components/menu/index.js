import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import EvaluationForm from '../../container/form/EvaluationForm.js';
import Report from '../../container/report/Report.js';

//import Aux from '../../hoc/Aux.js'
import { withTranslation } from 'react-i18next';

class Menu extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="sidebar" data-color="white" data-active-color="danger">
        {/* Logo */}
        <div className="logo">
          <a href="#" className="logo-normal">
            <div className="logo-image-small">
              <img src="/assets/img/hybrid-logo.jpg" alt="Logo" />
            </div>
          </a>
        </div>
        {/* Menu Item */}
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="active ">
              <Link to="/evaluation">
                <i className="nc-icon nc-bulb-63"></i>
                <p>{t('menu.evaluate')}</p>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="nc-icon nc-glasses-2"></i>
                <p>{t('menu.question')}</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="nc-icon nc-bullet-list-67"></i>
                <p>{t('menu.assign')}</p>
              </a>
            </li>
            <li>
              <Link to="/report">
                <i className="nc-icon nc-paper"></i>
                <p>{t('menu.report')}</p>
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/evaluation" exact component={EvaluationForm} />
          <Route path="/report" component={Report} />
          <Redirect from="/" to="/evaluation" />
        </Switch>
      </div>
    )
  }
}

export default withTranslation()(Menu);