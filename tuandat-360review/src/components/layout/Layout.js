import React, { Component } from 'react';

import Aux from '../../hoc/Aux.js';
import SideMenu from '../menu/SideMenu.js';
import NavMenu from '../navbar/NavMenu.js';


class Layout extends Component {
    render() {
        return (
            <Aux>
                
                <main className="main-panel">
                    <div className="content">
                        <NavMenu />
                        {this.props.children}
                    </div>
                </main>
            </Aux>
        )
    }
}

export default Layout;