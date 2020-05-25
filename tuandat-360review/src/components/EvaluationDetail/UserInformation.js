import React from 'react';

const UserInformation = () => {
    const marginLeft = { marginLeft: "6px" }

    return (
        <div className="col-md-12 card">
            <div className="card-body">
                <h4 className="card-title font-weight-bold">Thông tin</h4>
                {/* <!-- Select box --> */}
                <div className="form-group col-md-12 mb-4">
                    <label className="title" style={{ fontSize: "1em" }} for="inputState">
                        Chọn người cần đánh giá (Bản thân hoặc người khác)
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
                            <img src="./assets/img/default-avatar.png" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row align-items-baseline">
                            <h6 className="card-subtitle mb-3 text-muted">Tên:</h6>
                            <p className="card-text" style={marginLeft}>Sơn Tùng</p>
                        </div>
                        <div className="row align-items-baseline">
                            <h6 className="card-subtitle mb-3 text-muted">Title:</h6>
                            <p className="card-text" style={marginLeft}>Senior Software Engineer</p>
                        </div>
                        <div className="row align-items-baseline">
                            <h6 className="card-subtitle mb-3 text-muted">Team:</h6>
                            <p className="card-text" style={marginLeft}>Node.js Back-end</p>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-outline-info btn-round mt-3 pull-right">Xác nhận</button>
            </div>
        </div>
    )

}

export default UserInformation;
