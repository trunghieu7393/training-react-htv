import React, { Component } from "react";
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from '../../action/ui';


class GlobalLoading extends Component {
	render() {
		const { label, url, t } = this.props;
		const { classes, showLoading } = this.props;
		let xhtml = null;
		if (showLoading) {
			xhtml = (
				<div className={classes.globalLoading}>
					<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" alt="loading"
						className={classes.icon} />
				</div>
			);
		}
		// return (
		// 	<div className={classes.globalLoading}>
		// 		<img src={LoadingIcon} alt="loading" className={classes.icon}/>
		// 	</div>
		// );
		return xhtml;
	}
}

GlobalLoading.propTypes = {
	classes: PropTypes.object,
	showLoading: PropTypes.bool
}
const mapStateToProps = state => {
	return {
		showLoading: state.ui.showLoading
	}
}
const mapDispatchToProps = dispatch => {
	return {
		uiActions: bindActionCreators(uiActions, dispatch)
	}
}
const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps)


export default compose(
	withStyles(styles),
	withConnect
)(
	GlobalLoading
);