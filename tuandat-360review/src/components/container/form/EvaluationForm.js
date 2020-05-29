import React, { Component } from 'react';
import axios from 'axios';

import UserInformation from '../../EvaluationDetail/UserInformation.js';
import EvaluationTable from '../../EvaluationDetail/EvaluationTable.js';

import { connect } from 'react-redux';
import * as taskActions from '../../../actions/task.js';


class EvaluationForm extends Component {

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users/1').then(response => {
      const update = response.data;
      this.setState({
        person: update
      })
      //console.log('Test data', update);
    })

    const { fetchLoadPage } = this.props;
    fetchLoadPage(); // from taskActions
  }

  state = {
    person: {},
  }

  render() {
    return (
      <div className="row">
        {/* <!-- Thông tin người đánh giá --> */}
        <UserInformation person={this.state.person} />
        {/* <!-- Bảng đánh giá --> */}
        <EvaluationTable />
      </div>
    )
  }
}

export default connect(null, { ...taskActions })(EvaluationForm);