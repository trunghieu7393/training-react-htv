import React, { Component } from 'react';

class Tab extends Component {
  render() {
    const { table_scope, table_scope_content } = this.props;
    return (
        <div class="container-fluid mb-5">
        <nav class="mt-4">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
              aria-controls="nav-home" aria-selected="true">Năng Lực</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
              aria-controls="nav-profile" aria-selected="false">Thái độ</a>
            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
              aria-controls="nav-contact" aria-selected="false">Teamwork</a>
          </div>
        </nav>
        {/* <!-- Content --> */}
        <div class="tab-content mt-3" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="card">
              <div class="card-body" style={{overflowY: 'scroll'}}>
                <div class="row">
                  <div class="col-md-4">
                    <div class="d-flex align-items-center ml-1">
                      <img class="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                      <div class="ml-3">
                        <div class="card-text color-custom">
                          <b>
                            Nguyễn Văn Thuận: 3/5
                          </b>
                        </div>
                        <p class="card-text">
                          Comment: Good good good
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="d-flex align-items-center ml-1">
                      <img class="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                      <div class="ml-3">
                        <div class="card-text color-custom">
                          <b>
                            Nguyễn Văn Thuận: 3/5
                          </b>
                        </div>
                        <p class="card-text">
                          Comment: Good good good
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="d-flex align-items-center ml-1">
                      <img class="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                      <div class="ml-3">
                        <div class="card-text color-custom">
                          <b>
                            Nguyễn Văn Thuận: 3/5
                          </b>
                        </div>
                        <p class="card-text">
                          Comment: Good good good
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="d-flex align-items-center ml-1">
                      <img class="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                      <div class="ml-3">
                        <div class="card-text color-custom">
                          <b>
                            Nguyễn Văn Thuận: 3/5
                          </b>
                        </div>
                        <p class="card-text">
                          Comment: Good good good
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="d-flex align-items-center ml-1">
                      <img class="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                      <div class="ml-3">
                        <div class="card-text color-custom">
                          <b>
                            Nguyễn Văn Thuận: 3/5
                          </b>
                        </div>
                        <p class="card-text">
                          Comment: Good good good
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="d-flex align-items-center ml-1">
                      <img class="avatar border-gray" src=" ./assets/img/mike.jpg" alt="Avatar"/>
                      <div class="ml-3">
                        <div class="card-text color-custom">
                          <b>
                            Nguyễn Văn Thuận: 3/5
                          </b>
                        </div>
                        <p class="card-text">
                          Comment: Good good good
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt
            officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure
            magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
            consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu
            exercitation irure Lorem incididunt nostrud.
          </div>
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt
            officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure
            magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
            consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu
            exercitation irure Lorem incididunt nostrud.
          </div>
        </div>
      </div>
    )
  }
}

export default Tab;