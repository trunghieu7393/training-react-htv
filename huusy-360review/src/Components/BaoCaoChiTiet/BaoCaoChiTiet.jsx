import React, { Component } from 'react';

import '../../styles.css';

class BaoCao extends Component {
    render() {
        return (
            <div class="">
            <div class="wrapper ">
              
              <div class="sidebar" data-color="white" data-active-color="danger">
               
                <div class="logo">
                  
                  <a href="#" class="logo-normal">
                    <div class="logo-image-small">
                      <img src="./assets/img/hybrid-logo.jpg"/>
                    </div>
                  </a>
                </div>
              
                <div class="sidebar-wrapper">
                <ul class="nav">
          <li class="active ">
            <a href="/CauHoi">
              <i class="nc-icon nc-bulb-63"></i>
              <p>Câu hỏi</p>
            </a>
          </li>
          <li>
            <a href="/DanhMuc">
              <i class="nc-icon nc-glasses-2"></i>
              <p>Danh mục</p>
            </a>
          </li>
          <li>
            <a href="/ReViewCauHoi">
              <i class="nc-icon nc-bullet-list-67"></i>
              <p>Review câu hỏi</p>
            </a>
          </li>
        </ul>
                </div>
              </div>
             
              <div class="main-panel main-panel-height" >
          
                <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                  <div class="container-fluid">
                    <div class="navbar-wrapper">
                      <div class="navbar-toggle">
                        <button type="button" class="navbar-toggler">
                          <span class="navbar-toggler-bar bar1"></span>
                          <span class="navbar-toggler-bar bar2"></span>
                          <span class="navbar-toggler-bar bar3"></span>
                        </button>
                      </div>
                      <a class="navbar-brand font-weight-bold text-danger" href="javascript:;">360 Evaluation System</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                      aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-bar navbar-kebab"></span>
                      <span class="navbar-toggler-bar navbar-kebab"></span>
                      <span class="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navigation">
                     
                      <form>
                        <div class="input-group no-border">
                          <input type="text" value="" class="form-control" placeholder="Search..."/>
                          <div class="input-group-append">
                            <div class="input-group-text">
                              <i class="nc-icon nc-zoom-split"></i>
                            </div>
                          </div>
                        </div>
                      </form>
                      
                      <ul class="navbar-nav">
                        
                        <li class="nav-item">
                          <a class="nav-link btn-magnify" href="#">
                            <i class="nc-icon nc-bell-55"></i>
                          </a>
                        </li>
                   
                        <li class="nav-item btn-rotate dropdown">
                          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="nc-icon nc-single-02"></i>
                            <p>
                              <span class="d-lg-none d-md-block">Profile</span>
                            </p>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" href="#">Settings</a>
                            <a class="dropdown-item" href="#">Log out</a>
                          </div>
                        </li>
                      </ul>
                
                    </div>
                  </div>
                </nav>
               
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
                    <p class="card-text" style="margin-left:6px">Trần Tuấn Đạt</p>
                  </div>
                  <div class="row align-items-baseline">
                    <h6 class="card-subtitle mb-3 text-muted">Team:</h6>
                    <p class="card-text" style="margin-left: 6px">Front-End React</p>
                  </div>
                </div>
              </div>
              {/* <!-- Table detail --> */}
              <div class="row">
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
              </div>
              {/* <!-- Tab Nav Form --> */}
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
                      <div class="card-body" style="overflow-y: scroll">
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
              {/* <!-- End of Tab -->
              <!-- Button --> */}
              <button type="button" class="btn btn-default btn-round pull-right">Quay lại</button>
            </div>
          </div>

          {/* <!-- End --> */}
        </div>
      </div>
               {/* End */}
                <footer class="footer" style={{position: 'absolute'}, {width: '-webkit-fill-available'}}>
                  <div class="container-fluid">
                    <div class="row">
                      <nav class="footer-nav">
                        <ul>
                          <li><a href="#" target="_blank">About Us</a></li>
                          <li><a href="#" target="_blank">Contact</a></li>
                          <li><a href="#" target="_blank">Licenses</a></li>
                        </ul>
                      </nav>
                      <div class="credits ml-auto">
                        <span class="copyright">
                          © 2020 Hybrid Technologies Vietnam
                          <i class="fa fa-heart heart"></i>
                          All Rights Reserved
                        </span>
                      </div>
                    </div>
                  </div>
                </footer>
                
              </div>
              
            </div>
      
          
           
          </div>
        )
    }
}

export default BaoCao;