import React, { Component } from 'react';
import './MainPanel.scss';
import '../../styles.css';
import { withTranslation } from 'react-i18next';
import { useTranslation, Trans } from 'react-i18next';
import * as tesaga from '../../redux/actions/testSagas';
import {connect} from 'react-redux';
class NavBar extends Component {
  componentDidMount=()=>{
    const {createRedux, readRedux, updateRedux, deleteRedux} =this.props;
   
 }
  handleClick = lng => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }
  render() {
    // const { t, i18n } = useTranslation();
    return (
      <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <div class="navbar-toggle">
              <button type="button" class="navbar-toggler">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a class="navbar-brand font-weight-bold text-danger" href="javascript:;">360 Evaluation System</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
            aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navigation">

            <form>
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search..." />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <i class="nc-icon nc-zoom-split"></i>
                  </div>
                </div>
              </div>
            </form>

            <ul class="navbar-nav">
              <li class="nav-item">
                <button onClick={() => this.handleClick('vi')}>vi</button>
                <button onClick={() => this.handleClick('en')}>en</button>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-magnify" href="#">
                  <i class="nc-icon nc-bell-55"></i>
                </a>
              </li>

              <li class="nav-item btn-rotate dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="nc-icon nc-single-02"></i>

                  <p>
                    <span class="d-lg-none d-md-block">Profile</span>
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Profile</a>
                  <a class="dropdown-item" href="#">Settings</a>
                  <a class="dropdown-item" href="#">Log out</a>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    )
  }
}

// export default withTranslation('common')(NavBar);
export default withTranslation('common')(connect(null, {...tesaga})(NavBar));

// export default connect(null,{createRedux,readRedux,updateRedux,deleteRedux})(NavBar);