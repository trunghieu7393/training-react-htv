import React, {Component} from 'react';
import '../../styles.css';
import {Link} from 'react-router-dom';
import {withTranslation} from 'react-i18next';
class HeaderItem extends Component {
    render() {
        const { label, url,t }= this.props;
        return (
            <li>
                <i class="nc-icon nc-bulb-63"></i>
        <Link  to={ url }>{t(label)}</Link>
            </li>
        )
    }
}
export default withTranslation()(HeaderItem);