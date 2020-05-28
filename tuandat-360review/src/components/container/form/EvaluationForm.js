import React, { Component } from 'react';
import axios from 'axios';

import UserInformation from '../../EvaluationDetail/UserInformation.js';
import EvaluationTable from '../../EvaluationDetail/EvaluationTable.js';

class EvaluationForm extends Component {

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users/1').then(response => {
      const update = response.data;
      this.setState({
        person: update
      })
      //console.log('Test data', update);
    })
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

export default EvaluationForm;