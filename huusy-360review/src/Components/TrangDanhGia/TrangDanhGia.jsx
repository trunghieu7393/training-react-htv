import React, { Component } from 'react';

import '../../styles.css';

class TrangDanhGia extends Component {
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
          {/* <!-- Thông tin người đánh giá --> */}
          <div class="col-md-12 card">
            {/* <!-- <h3 class="description">Your content here</h3> --> */}
            <div class="card-body">
              <h4 class="card-title font-weight-bold">Thông tin</h4>
              {/* <!-- Select box --> */}
              <div class="form-group col-md-12 mb-4">
                <label class="title" style="font-size: 1em" for="inputState">
                    Chọn người cần đánh giá (Bản thân hoặc người khác)
                  </label>
                <select id="inputState" class="form-control">
                  <option selected disabled>Lựa chọn</option>
                  <option value="1">Sơn Tùng</option>
                  <option value="2">Lung Thị Linh</option>
                  <option value="3">Chí Phèo</option>
                </select>
              </div>
              {/* <!-- Show information --> */}
              <div class="row mb-3">
                <div class="col-md-3">
                  <div class="logo-image-small">
                    <img src="./assets/img/default-avatar.png"/>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="row align-items-baseline">
                    <h6 class="card-subtitle mb-3 text-muted">Tên:</h6>
                    <p class="card-text" style="margin-left:6px">Sơn Tùng</p>
                  </div>
                  <div class="row align-items-baseline">
                    <h6 class="card-subtitle mb-3 text-muted">Title:</h6>
                    <p class="card-text" style="margin-left: 6px">Senior Software Engineer</p>
                  </div>
                  <div class="row align-items-baseline">
                    <h6 class="card-subtitle mb-3 text-muted">Team:</h6>
                    <p class="card-text" style="margin-left: 6px">Node.js Back-end</p>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-outline-info btn-round mt-3 pull-right">Xác nhận</button>
            </div>
          </div>
          {/* <!-- Bảng đánh giá --> */}
          <div class="col-md-12 card">
            {/* <!-- <h3 class="description">Your content here</h3> --> */}
            <div class="card-body">
              <h4 class="card-title font-weight-bold">Bảng đánh giá</h4>
              {/* <!-- Question --> */}
              <div class="row card flex-row mt-4">
                <div class="col-md-2 text-center">
                  <h5>Câu 1/50</h5>
                </div>
                <div class="col-md-10">
                  <p class="font-weight-bold">
                    Hoàn thành công việc theo kế hoạch: Mức độ mà nhân viên hoàn thành công việc trong một khoảng thời
                    gian nhất định hoặc trong một giới hạn thời gian hợp lý.
                  </p>
                </div>
              </div>
              {/* <!-- Table --> */}
              <div class="row">
                <div class="col-md-3 card">
                  <h5 class="card-title text-center">Tiêu chí đánh giá</h5>
                  <div class="mb-3">
                    <ul class="list-group">
                      <li class="list-group-item">1. Tham gia dưới 50% buổi</li>
                      <li class="list-group-item">2. Tham gia 50%-75% buổi</li>
                      <li class="list-group-item">3. Tham gia >75% buổi</li>
                      <li class="list-group-item">4. Tham gia đủ 100%</li>
                      <li class="list-group-item">5. Chất lượng vượt mức mong đợi</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-9">
                  <h5 class="card-title mb-2">Lựa chọn thang điểm</h5>
                  <div class="card-body h5 d-flex justify-content-around">
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="point1" name="point" class="custom-control-input"/>
                      <label class="custom-control-label" for="point1">
                        1
                      </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="point2" name="point" class="custom-control-input"/>
                      <label class="custom-control-label" for="point2">
                        2
                      </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="point3" name="point" class="custom-control-input"/>
                      <label class="custom-control-label" for="point3">
                        3
                      </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="point4" name="point" class="custom-control-input"/>
                      <label class="custom-control-label" for="point4">
                        4
                      </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="point5" name="point" class="custom-control-input"/>
                      <label class="custom-control-label" for="point5">
                        5
                      </label>
                    </div>
                  </div>
                  {/* <!-- Comment TextArea --> */}
                  <div class="form-group">
                    <label class="h3 font-weight-bold" for="comment">Comments</label>
                    <textarea class="form-control" id="comment" rows="10" style="max-height: 120px;"></textarea>
                  </div>
                  {/* <!-- Pagination --> */}
                  <nav class="mt-4" aria-label="Page navigation">
                    <ul class="pagination justify-content-center">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                      </li>
                      <li class="page-item active"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">4</a></li>
                      <li class="page-item"><a class="page-link" href="#">5</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>
                  {/* <!-- End of Pagination --> */}
                </div>
              </div>

            </div>
          </div>
          {/* <!-- End --> */}
        </div>
      </div>
      {/* <!-- End --> */}
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

export default TrangDanhGia;