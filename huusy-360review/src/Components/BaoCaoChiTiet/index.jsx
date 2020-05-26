import React, { Component } from 'react';
import Table from '../Atoms/Table';
import Tab from '../Molecules/Tab';
import '../../styles.css';
import {withTranslation} from 'react-i18next';

class BaoCao extends Component {
  handleClick= lng => {
    const {i18n} = this.props;
    i18n.changeLanguage(lng);
  }  
  render() {
        return (
            <div class="">
            <div class="wrapper ">
              
              
             {/* Main panel */}
              <div class="main-panel main-panel-height" >
          
                
               
          {/* main content */}
          <div class="content">
        <div class="row">
          {/* <!-- Information Section --> */}
          <div class="col-md-12 card">
            {/* <!-- <h3 class="description">Your content here</h3> --> */}
            <h4 class="ml-3 mb-3 font-weight-bold">Báo cáo chi tiết</h4>
            <div class="card-body">
              {/* <!-- Show information --> */}
              <div class="row mb-3">
                <div class="col-md-3">
                  <div class="logo-image-small">
                    <img src="./assets/img/default-avatar.png"/>
                  </div>
                </div>
                <div class="mt-3">
                  <div class="row align-items-baseline">
                    <h6 class="card-subtitle mb-3 text-muted">Tên:</h6>
                    <p class="card-text" style={{marginLeft: '6px'}}>Trần Tuấn Đạt</p>
                  </div>
                  <div class="row align-items-baseline">
                    <h6 class="card-subtitle mb-3 text-muted">Team:</h6>
                    <p class="card-text" style={{marginLeft: '6px'}}>Front-End React</p>
                  </div>
                </div>
              </div>
              {/* <!-- Table detail --> */}
              {/* <div class="row">
                <div class="col-md-5">
                  <table class="table table-bordered">
                    <thead class="text-center">
                      <tr>
                        <th scope="col">Tiêu chí</th>
                        <th scope="col">Điểm trung bình</th>
                      </tr>
                    </thead>
                    <tbody class="text-center font-weight-normal">
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
              </div> */}
              <div class="row">
                <div class="col-md-5">
                <Table
                    tableScope={['TIÊU CHÍ','ĐIỂM TRUNG BÌNH']}
                    tableScopeContent={[['Năng lực','3/5'],['Thái độ','4/5'],['Teamwork','5/5']]}
                    />
                </div>
              </div>
              
              {/* <!-- Tab Nav Form --> */}
              {/* <div class="container-fluid mb-5">
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
                {/* <div class="tab-content mt-3" id="nav-tabContent">
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
              </div> */}
              <Tab/>
              {/* <!-- End of Tab -->
              <!-- Button --> */}
              <button type="button" class="btn btn-default btn-round pull-right">Quay lại</button>
            </div>
          </div>

          {/* <!-- End --> */}
        </div>
      </div>
               {/* End */}
                
                
              </div>
              {/*--------------------------- End --------------------------------------*/}
            </div>
      
          
           
          </div>
        )
    }
}

export default withTranslation()(BaoCao);