import React, { Component } from 'react';

import Aux from '../../hoc/Aux.js';
import SideMenu from '../menu/SideMenu.js';
import NavMenu from '../navbar/NavMenu.js';
// import Footer from '../container/Footer.js';


class Layout extends Component {
    render() {
        return (
            <Aux>
                <main className="main-panel">
                    <NavMenu />
                    <div className="content">
                        {this.props.children}
                    </div>
                    {/* <Footer /> */}
                </main>
            </Aux>
        )
    }
}

export default Layout;