import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import PropTypes from 'prop-types';
import LoadingIcon from '../../../assets/img/loading.gif';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from '../../../actions/ui';


class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={LoadingIcon} className={classes.icon} alt="loading" />
        </div>
      );
    }

    return xhtml;
    // return (
    //   <div className={classes.globalLoading}>
    //     <img src={LoadingIcon} className={classes.icon} alt="loading" />
    //   </div>
    // )
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
  null,
);

export default compose(
  withStyles(styles), //order first
  withConnect, //order second
)(GlobalLoading);

// export default withStyles(styles)(GlobalLoading);