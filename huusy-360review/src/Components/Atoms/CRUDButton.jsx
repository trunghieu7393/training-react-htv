import React, {Component} from 'react';

class CRUDButton extends Component {
    render() {
        const {feature}=this.props;
        return (
            <button type="button" class="btn btn-outline-info btn-round">Xem</button>
        )
    }
}

export default CRUDButton;