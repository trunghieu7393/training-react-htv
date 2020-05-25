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
          <div class="col-md-12 card">
            {/* <!-- <h3 class="description">Your content here</h3> --> */}
            <div class="card-body">
              <h4 class="card-title font-weight-bold">Báo cáo</h4>
              {/* <!-- Filter --> */}
              <div class="form-group mb-4">
                <label class="title" style="font-size: 1em" for="inputState">
                  TÌm kiếm lựa chọn theo team
                </label>
                <select id="inputState" class="form-control">
                  <option selected disabled>Lựa chọn</option>
                  <option value="1">Team Front-End</option>
                  <option value="2">Team PHP</option>
                  <option value="3">Team Node.js</option>
                </select>
              </div>
              {/* <!-- Table --> */}
              <table class="table table-bordered">
                <thead class="thead-dark">
                  <tr class="text-center">
                    <th scope="col">ID</th>
                    <th scope="col">Tên người dùng</th>
                    <th scope="col">Điểm đánh giá</th>
                    <th scope="col">Thao tác</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr>
                    <th scope="row">1</th>
                    <td>Nguyễn Văn Nam</td>
                    <td>3.5/5</td>
                    <td>
                      <button type="button" class="btn btn-outline-info btn-round">Xem</button>
                      <button type="button" class="btn btn-outline-danger btn-round">Xoá</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Barry Allen</td>
                    <td>4/5</td>
                    <td>
                      <button type="button" class="btn btn-outline-info btn-round">Xem</button>
                      <button type="button" class="btn btn-outline-danger btn-round">Xoá</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Lucky Clover</td>
                    <td>3/5</td>
                    <td>
                      <button type="button" class="btn btn-outline-info btn-round">Xem</button>
                      <button type="button" class="btn btn-outline-danger btn-round">Xoá</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Lung Thị Linh</td>
                    <td>5/5</td>
                    <td>
                      <button type="button" class="btn btn-outline-info btn-round">Xem</button>
                      <button type="button" class="btn btn-outline-danger btn-round">Xoá</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <!-- Pagination Section --> */}
              <div class="mt-4">
                <div class="pull-left">
                  <p>Hiển thị 4 trong tổng số 20</p>
                </div>
                <nav class="pull-right" aria-label="Page navigation">
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
              </div>
              {/* <!-- End of Pagination --> */}
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