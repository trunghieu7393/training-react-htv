import React, { Component } from 'react';
//import Aux from '../../hoc/Aux.js';

import UserInformation from '../../components/EvaluationDetail/UserInformation.js';
import EvaluationTable from '../../components/EvaluationDetail/EvaluationTable.js';
import LoadingPage from '../../components/LoadingPage/index.js';

class EvaluationForm extends Component {
  render() {
    return (
      <div className="row">
        <LoadingPage />
        {/* <!-- Thông tin người đánh giá --> */}
        <UserInformation />
        {/* <!-- Bảng đánh giá --> */}
        <EvaluationTable />
      </div>
    )
  }
}

export default EvaluationForm;