import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class Item extends Component {
  render() {
    const { t } = this.props;
    const label = this.props.label;
   
    return (
      <li>
        <NavLink to={this.props.url} exact activeStyle={{
          color: "#ef8157",
          opacity: 1
        }}>
          <i className={this.props.icon}></i>
          <p>{t(label)}</p>
        </NavLink>
      </li>
    )
  }
}

export default withTranslation()(Item);