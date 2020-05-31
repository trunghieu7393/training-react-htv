import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import axios from 'axios';


class UserInformation extends Component {

  state = {
    value: '',
  }

  change = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  //Post
  submitSelect = () => {
    const data = {
      title: 'Hello',
      body: 'New user',
      author: this.state.value,
    }
    axios.post('http://5ecf5b0216017c00165e29cd.mockapi.io/api/users', data)
      .then(res => {
        console.log('Success!', res);
        console.log('Status: ', res.status);
      })
      .catch(err => {
        console.log(err);
      })
  }

  //Delete
  handleDelete = () => {
    axios.delete('http://dummy.restapiexample.com/api/v1/delete/' + this.state.value)
      .then(res => {
        console.log('Delete OK!', res);
      })
  }

  render() {
    const marginLeft = { marginLeft: "6px" };
    const { t } = this.props;

    return (
      <div className="col-md-12 card">
        <div className="card-body">
          <h4 className="card-title font-weight-bold">{t('evaluation.information.title')}</h4>
          {/* <!-- Select box --> */}
          <div className="form-group col-md-12 mb-4">
            <label className="title" style={{ fontSize: "1em" }} htmlFor="inputState">
              {t('evaluation.information.label')}
            </label>
            <select id="inputState" className="form-control" value={this.state.value} onChange={this.change}>
              <option value="1">Sơn Tùng</option>
              <option value="2">Lung Thị Linh</option>
              <option value="3">Chí Phèo</option>
            </select>
          </div>
          {/* <!-- Show information --> */}
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="logo-image-small">
                <img src="./assets/img/default-avatar.png" alt="Avatar" />
              </div>
            </div>
            <div className="col-md-9">
              <div className="row align-items-baseline">
                <h6 className="card-subtitle mb-3 text-muted">{t('evaluation.information.name')}:</h6>
                <p className="card-text" style={marginLeft}>{this.props.person['name']}</p>
              </div>
              <div className="row align-items-baseline">
                <h6 className="card-subtitle mb-3 text-muted">{t('evaluation.information.position_title')}:</h6>
                <p className="card-text" style={marginLeft}>{this.props.person.email}</p>
              </div>
              <div className="row align-items-baseline">
                <h6 className="card-subtitle mb-3 text-muted">{t('evaluation.information.team')}:</h6>
                <p className="card-text" style={marginLeft}>{this.props.person.website}</p>
              </div>
            </div>
          </div>
          <div className="mt-3 pull-right">
            <button onClick={this.handleDelete} className="btn btn-outline-danger btn-round mr-2">
              Delete
            </button>
            <button onClick={this.submitSelect} className="btn btn-outline-success btn-round">
              {t('evaluation.information.btnConfirm')}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withTranslation()(UserInformation);
