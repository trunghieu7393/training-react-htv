import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';


class NavMenu extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a className="navbar-brand font-weight-bold text-danger" href="#">360 Evaluation System</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
            aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            {/* <!-- Search Bar --> */}
            <div>
              <div className="input-group no-border">
                <input type="text" value="1" className="form-control" placeholder="Search..." readOnly />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <i className="nc-icon nc-zoom-split"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of search bar --> */}
            {/* <!-- User menu --> */}
            <ul className="navbar-nav">
              {/* <!-- Notifications --> */}
              <li className="nav-item">
                <a className="nav-link btn-magnify" href="#">
                  <i className="nc-icon nc-bell-55"></i>
                </a>
              </li>
              {/* User Items */}
              <li className="nav-item btn-rotate dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i className="nc-icon nc-single-02"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Profile</span>
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">{t('user_menu.profile')}</a>
                  <a className="dropdown-item" href="#">{t('user_menu.setting')}</a>
                  <a className="dropdown-item" href="#">{t('user_menu.logout')}</a>
                </div>
              </li>
              {/* Change page language */}
              <li>
                <button onClick={() => i18n.changeLanguage('vn')} type="button" class="btn btn-default btn-sm">VN</button>
                <button onClick={() => i18n.changeLanguage('en')} type="button" class="btn btn-primary btn-sm">EN</button>
              </li>
            </ul>
            {/* <!-- End of user menu --> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default withTranslation()(NavMenu);