import React, { Component } from 'react';

import '../../styles.css';

class TatCaCauHoi extends Component {
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
          <div class="col-12 col-sm-4">
            <div class="form-group">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Danh mục có sẵn</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-sm-4">
            {/* <!-- Search form --> */}
            <div class="form-group">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Mục đánh giá có sẵn</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-sm-8">
            <form>
              <div class="input-group">
                <input type="text" value="" class="form-control" placeholder="Search..."/>
                <div class="input-group-append">
                  <div class="input-group-text">
                    <i class="nc-icon nc-zoom-split"></i>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-header">
            <h5>Thêm chỉ định</h5>
          </div>
          <div class="card-body">
            <div class="table-responsive col-md-12">
              <table class="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Nội dung câu hỏi</th>
                    <th>Danh mục</th>
                    <th>Mục đánh giá</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nội dung 1</td>
                    <td>Danh mục 1</td>
                    <td>Mục đánh giá 1</td>
                    <td>
                      <button class="btn btn-outline-primary btn-sm">Sửa</button>
                      <button class="btn btn-outline-danger btn-sm">Xóa</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Nội dung 1</td>
                    <td>Danh mục 1</td>
                    <td>Mục đánh giá 1</td>
                    <td>
                      <button class="btn btn-outline-primary btn-sm">Sửa</button>
                      <button class="btn btn-outline-danger btn-sm">Xóa</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Nội dung 1</td>
                    <td>Danh mục 1</td>
                    <td>Mục đánh giá 1</td>
                    <td>
                      <button class="btn btn-outline-primary btn-sm">Sửa</button>
                      <button class="btn btn-outline-danger btn-sm">Xóa</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="float-left">
                <p><strong>Hiển thị 5 trong tổng số 20</strong></p>
              </div>
              <div class="float-right">
                <nav aria-label="...">
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active">
                      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
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

export default TatCaCauHoi;