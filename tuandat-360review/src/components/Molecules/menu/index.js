import React, { Component } from 'react';
import Item from './items/';

const menu = [
  {
    label: 'menu.evaluate',
    url: '/evaluation',
    icon: 'nc-icon nc-bulb-63'
  },
  {
    label: 'menu.view-question',
    url: '/question-list',
    icon: 'nc-icon nc-globe-2',
  },
  {
    label: 'menu.create-question',
    url: '/question-create',
    icon: 'nc-icon nc-glasses-2',
  },
  {
    label: 'menu.assign',
    url: '/assign',
    icon: 'nc-icon nc-bullet-list-67'
  },
  {
    label: 'menu.report',
    url: '/report',
    icon: 'nc-icon nc-paper',
  }
]

class Menu extends Component {
  render() {
    const item = menu.map((it, key) => {
      return (
        <Item label={it.label}
          url={it.url}
          icon={it.icon}
          
          key={key} />
      )
    })

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
            {item}
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;