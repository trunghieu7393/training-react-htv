import React, { Component } from 'react';
import './MainPanel.scss';
import '../../styles.css';
import { withTranslation } from 'react-i18next';

class Footer extends Component {

  render() {
    return (
      <footer class="footer footer-fixed" style={{ position: 'absolute' }, { width: '-webkit-fill-available' }}>
        <div class="container-fluid">
          <div class="row">
            <nav class="footer-nav">
              <ul>
                <li><a href="#" target="_blank">About Us</a></li>
                <li><a href="#" target="_blank">Contact</a></li>
                <li><a href="#" target="_blank">Licenses</a></li>
              </ul>
            </nav>
            <div class="credits ml-auto">
              <span class="copyright">
                © 2020 Hybrid Technologies Vietnam
                          <i class="fa fa-heart heart"></i>
                          All Rights Reserved
                        </span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;