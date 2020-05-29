import React, { Component } from 'react';
import Table from '../../ReportDetail/';

import { connect } from 'react-redux';
import * as taskActions from '../../../actions/task.js';

class Report extends Component {

  componentDidMount() {
    const { fetchLoadPage } = this.props;
    fetchLoadPage(); // from taskActions
  }

  render() {
    return (
      <Table />
    )
  }
}

export default connect(null, { ...taskActions })(Report);