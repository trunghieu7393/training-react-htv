import React, { Component } from 'react';
// import { Link, Route, Switch, Redirect } from 'react-router-dom';
// import EvaluationForm from '../../container/form/EvaluationForm.js';
// import Report from '../../container/report/Report.js';

import menu_data from './menu_data';
import MenuItem from './menu_item';


//import Aux from '../../hoc/Aux.js'
import { withTranslation } from 'react-i18next';

class Menu extends Component {
  render() {
    const { t } = this.props;

    return (

      <div className="sidebar header-fixed" data-color="white" data-active-color="danger">
        <div className="logo">

          <a href="#" className="logo-normal">
            <div className="logo-image-small">
              <img src="./assets/img/hybrid-logo.jpg" />
            </div>
          </a>
        </div>

        <div className="sidebar-wrapper">
          <ul className="nav">
            {menu_data.map((item, idx) =>
              <MenuItem
                label={item.label}
                url={item.url}
                key={idx}
                
              />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default withTranslation()(Menu);