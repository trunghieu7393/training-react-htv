import React, { Component } from 'react';

class Detail extends Component {

  render() {
    return (
    <div className="row">
      {/* <!-- Information Section --> */}
      <div className="col-md-12 card">
        <h4 className="ml-3 mb-3 font-weight-bold">Báo cáo chi tiết</h4>
        <div className="card-body">
          {/* <!-- Show information --> */}
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="logo-image-small">
                <img src="./assets/img/default-avatar.png"/>
              </div>
            </div>
            <div className="mt-3">
              <div className="row align-items-baseline">
                <h6 className="card-subtitle mb-3 text-muted">Tên:</h6>
                <p className="card-text" style="margin-left:6px">Trần Tuấn Đạt</p>
              </div>
              <div className="row align-items-baseline">
                <h6 className="card-subtitle mb-3 text-muted">Team:</h6>
                <p className="card-text" style="margin-left: 6px">Front-End React</p>
              </div>
            </div>
          </div>
          {/* <!-- Table detail --> */}
          <div className="row">
            <div className="col-md-5">
              <table className="table table-bordered">
                <thead className="text-center">
                  <tr>
                    <th scope="col">Tiêu chí</th>
                    <th scope="col">Điểm trung bình</th>
                  </tr>
                </thead>
                <tbody className="text-center font-weight-normal">
                  <tr>
                    <td scope="row">Năng lực</td>
                    <td>3/5</td>
                  </tr>
                  <tr>
                    <td scope="row">Thái độ</td>
                    <td>4/5</td>
                  </tr>
                  <tr>
                    <td scope="row">Teamwork</td>
                    <td>5/5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Tab Nav Form --> */}
          <div className="container-fluid mb-5">
            <nav className="mt-4">
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                  aria-controls="nav-home" aria-selected="true">Năng Lực</a>
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                  aria-controls="nav-profile" aria-selected="false">Thái độ</a>
                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
                  aria-controls="nav-contact" aria-selected="false">Teamwork</a>
              </div>
            </nav>
            {/* <!-- Content --> */}
            <div className="tab-content mt-3" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="card">
                  <div className="card-body" style="overflow-y: scroll">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="d-flex align-items-center ml-1">
                          <img className="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                          <div className="ml-3">
                            <div className="card-text color-custom">
                              <b>
                                Nguyễn Văn Thuận: 3/5
                              </b>
                            </div>
                            <p className="card-text">
                              Comment: Good good good
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex align-items-center ml-1">
                          <img className="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                          <div className="ml-3">
                            <div className="card-text color-custom">
                              <b>
                                Nguyễn Văn Thuận: 3/5
                              </b>
                            </div>
                            <p className="card-text">
                              Comment: Good good good
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex align-items-center ml-1">
                          <img className="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                          <div className="ml-3">
                            <div className="card-text color-custom">
                              <b>
                                Nguyễn Văn Thuận: 3/5
                              </b>
                            </div>
                            <p className="card-text">
                              Comment: Good good good
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex align-items-center ml-1">
                          <img className="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                          <div className="ml-3">
                            <div className="card-text color-custom">
                              <b>
                                Nguyễn Văn Thuận: 3/5
                              </b>
                            </div>
                            <p className="card-text">
                              Comment: Good good good
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex align-items-center ml-1">
                          <img className="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                          <div className="ml-3">
                            <div className="card-text color-custom">
                              <b>
                                Nguyễn Văn Thuận: 3/5
                              </b>
                            </div>
                            <p className="card-text">
                              Comment: Good good good
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex align-items-center ml-1">
                          <img className="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                          <div className="ml-3">
                            <div className="card-text color-custom">
                              <b>
                                Nguyễn Văn Thuận: 3/5
                              </b>
                            </div>
                            <p className="card-text">
                              Comment: Good good good
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt
                officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure
                magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
                consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu
                exercitation irure Lorem incididunt nostrud.
              </div>
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt
                officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure
                magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
                consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu
                exercitation irure Lorem incididunt nostrud.
              </div>
            </div>
          </div>
          {/* <!-- End of Tab --> */}
          {/* <!-- Button --> */}
          <button type="button" className="btn btn-default btn-round pull-right">Quay lại</button>
        </div>
      </div>
      {/* <!-- End --> */}
    </div>
    )
  }
}

export default Detail;