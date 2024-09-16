import React, { Component } from 'react';
//import Aux from '../../hoc/Aux.js';

import UserInformation from '../../components/EvaluationDetail/UserInformation.js';
import EvaluationTable from '../../components/EvaluationDetail/EvaluationTable.js';
// import LoadingPage from '../../components/LoadingPage/index.js';

import {loadPage} from '../../action/task'
import {connect} from 'react-redux'

class EvaluationForm extends Component {
  componentDidMount=()=> {
    const {loadPage}=this.props;
    loadPage()
  }
  render() {
    return (
      <div className="row">
        {/* <LoadingPage /> */}
        {/* <!-- Thông tin người đánh giá --> */}
        <UserInformation />
        {/* <!-- Bảng đánh giá --> */}
        <EvaluationTable />
      </div>
    )
  }
}

export default connect(null,{loadPage}) (EvaluationForm);