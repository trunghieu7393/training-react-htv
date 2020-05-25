import React from 'react';
import { Link } from 'react-router-dom';

class LogoMenu extends React.Component {
    render() {
        return (
            <div className="logo">
                <Link className="logo-normal">
                    <div className="logo-image-small">
                        <img src="./assets/img/hybrid-logo.jpg" alt="logo"/>
                    </div>
                </Link>
            </div>
        )
    }
};

export default LogoMenu;