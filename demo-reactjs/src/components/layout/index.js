import React, { Component } from 'react';

import Aux from '../../hoc/Aux.js';
import NavMenu from '../navbar/index.js';
import Footer from '../../container/footer'


class Layout extends Component {
  render() {
    return (
      <Aux>
        <main className="main-panel">
          <NavMenu />
          <div className="content">
            {this.props.children}
          </div>
          <Footer />
        </main>
      </Aux>
    )
  }
}

export default Layout;