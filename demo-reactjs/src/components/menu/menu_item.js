import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';


class item extends Component {
    render() {
        const { t } = this.props;
        const label = this.props.label;
        return (
            <li>
                <Link to={this.props.url}>
                    <i className="nc-icon nc-bulb-63"></i>
                    <p>{t(label)}</p>
                </Link>
            </li >
        );
    }
}


export default withTranslation()(item);