import React, { Component } from 'react';

import Aux from '../hoc/index'
import NavMenu from '../navbar/index.js';
import Footer from '../container/footer/'

import GlobalLoading from '../../Atoms/GlobalLoading/index.js'

class Layout extends Component {

  render() {
    return (
      <Aux>
        <main className="main-panel">
          <NavMenu />
          <div className="content">
            <GlobalLoading />
            {this.props.children}
          </div>
          <Footer />
        </main>
      </Aux>
    )
  }
}

export default Layout;