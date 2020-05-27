import React, { Component } from 'react';
import '../../styles.css';
import './Header.scss';
import HeaderData from './HeaderData/HeaderData';
import HeaderItem from './HeaderItem';
import {withTranslation} from 'react-i18next';
import { useTranslation, Trans } from 'react-i18next';
import {createRedux,readRedux,updateRedux,deleteRedux} from '../../redux/actions/testSagas';
import {connect} from 'react-redux';
class Header extends Component {
  
  handleClick= lng => {
    const {i18n} = this.props;
    i18n.changeLanguage(lng);
  }
  render() {
    
    return (
      <div class="sidebar header-fixed" data-color="white" data-active-color="danger">

        <div class="logo">

          <a href="#" class="logo-normal">
            <div class="logo-image-small">
              <img src="./assets/img/hybrid-logo.jpg" />
            </div>
          </a>
        </div>

        <div class="sidebar-wrapper">
            
          <ul class="nav">
            {HeaderData.map((item, idx) =>
              <HeaderItem
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
// export default withTranslation('common') connect(null,{createRedux,readRedux,updateRedux,deleteRedux})(Header);
export default connect(null,{createRedux,readRedux,updateRedux,deleteRedux})(Header);