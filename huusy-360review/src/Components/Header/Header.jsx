import React, {Component} from 'react';
import '../../styles.css';
import {HeaderData} from './HeaderData/HeaderData';
import {HeaderItem} from './HeaderItem';

class Header extends Component {
    render() {
        return (
            <div class="sidebar" data-color="white" data-active-color="danger">

            <div class="logo">

              <a href="#" class="logo-normal">
                <div class="logo-image-small">
                  <img src="./assets/img/hybrid-logo.jpg" />
                </div>
              </a>
            </div>

            <div class="sidebar-wrapper">
              <ul class="nav">
                  {HeaderData.map((item,idx)=>{
                      <HeaderItem
                      label={item.label}
                      url={item.url}
                        key={idx}
                      />
                  })}
                
              </ul>
            </div>
          </div>
        )
    }
}
export default Header;