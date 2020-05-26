import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';


class UserInformation extends Component {
  render() {
    const marginLeft = { marginLeft: "6px" };
    const { t } = this.props;
    return (
      <div className="col-md-12 card">
        <div className="card-body">
          <h4 className="card-title font-weight-bold">{t('evaluation.information.title')}</h4>
          {/* <!-- Select box --> */}
          <div className="form-group col-md-12 mb-4">
            <label className="title" style={{ fontSize: "1em" }} For="inputState">
              {t('evaluation.information.label')}
            </label>
            <select id="inputState" className="form-control">
              <option selected disabled>Lựa chọn</option>
              <option value="1">Sơn Tùng</option>
              <option value="2">Lung Thị Linh</option>
              <option value="3">Chí Phèo</option>
            </select>
          </div>
          {/* <!-- Show information --> */}
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="logo-image-small">
                <img src="./assets/img/default-avatar.png" alt="Avatar"/>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row align-items-baseline">
                <h6 className="card-subtitle mb-3 text-muted">{t('evaluation.information.name')}:</h6>
                <p className="card-text" style={marginLeft}>Sơn Tùng</p>
              </div>
              <div className="row align-items-baseline">
                <h6 className="card-subtitle mb-3 text-muted">{t('evaluation.information.position_title')}:</h6>
                <p className="card-text" style={marginLeft}>Senior Software Engineer</p>
              </div>
              <div className="row align-items-baseline">
                <h6 className="card-subtitle mb-3 text-muted">{t('evaluation.information.team')}:</h6>
                <p className="card-text" style={marginLeft}>Node.js Back-end</p>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-outline-info btn-round mt-3 pull-right">{t('evaluation.information.btnConfirm')}</button>
        </div>
      </div>
    )
  }
}

export default withTranslation()(UserInformation);
