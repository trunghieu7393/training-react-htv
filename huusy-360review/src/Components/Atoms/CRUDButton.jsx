import React, { Component } from 'react';

class CRUDButton extends Component {
	onSubmit = (event) => {
		event()
	}
	render() {
		const { feature, event } = this.props;
		return (
			<button onClick={() => this.onSubmit(event)} type="button" class="btn btn-outline-info btn-round">Xem</button>
		)
	}
}

export default CRUDButton;