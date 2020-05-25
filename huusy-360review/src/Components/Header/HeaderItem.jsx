import React, {Component} from 'react';
import '../../styles.css';
import {Link} from 'react-router-dom';
class HeaderItem extends Component {
    render() {
        const { label, url}= this.props;
        return (
            <li>
                <i class="nc-icon nc-bulb-63"></i>
                 <Link  to={ url }>{ label }</Link>
            </li>
        )
    }
}
export default HeaderItem;