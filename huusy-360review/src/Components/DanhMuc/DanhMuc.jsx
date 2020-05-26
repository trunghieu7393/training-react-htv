import React, { Component } from 'react';
import './DanhMuc.scss';
import '../../styles.css';

class DanhMuc extends Component {
  render() {
    return (
      <div class="">
        <div class="wrapper ">
<<<<<<< HEAD
          {/* header */}
=======

>>>>>>> master
          <div class="sidebar" data-color="white" data-active-color="danger">

            <div class="logo">

              <a href="#" class="logo-normal">
                <div class="logo-image-small">
                  <img src="./assets/img/hybrid-logo.jpg" />
                </div>
              </a>
            </div>

            <div class="sidebar-wrapper">
              <ul class="nav">
                <li class="active ">
                  <a href="/CauHoi">
                    <i class="nc-icon nc-bulb-63"></i>
                    <p>Câu hỏi</p>
<<<<<<< HEAD
                  </a>
                </li>
                <li>
                  <a href="/DanhMuc">
                    <i class="nc-icon nc-glasses-2"></i>
                    <p>Danh mục</p>
                  </a>
                </li>
                <li>
=======
                  </a>
                </li>
                <li>
                  <a href="/DanhMuc">
                    <i class="nc-icon nc-glasses-2"></i>
                    <p>Danh mục</p>
                  </a>
                </li>
                <li>
>>>>>>> master
                  <a href="/ReViewCauHoi">
                    <i class="nc-icon nc-bullet-list-67"></i>
                    <p>Review câu hỏi</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
<<<<<<< HEAD
          {/* End header */}
=======

>>>>>>> master
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
                      <input type="text" value="" class="form-control" placeholder="Search..." />
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


            <div class="content">
              <div class="row">

                <div class="container-fluid">
                  <h1 class="mt-4">Danh sách các mẫu tiêu chí</h1>
                  <div class="row mt-3">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                      <h6>Danh mục</h6>
                      <div class="input-group mb-3">
                        <i class="fas fa-exclamation-circle"></i>
                        <select class="custom-select custom-select-nobackground" id="inputGroupSelect02">
                          <option selected>Chọn danh mục</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div class="input-group-append">
                          <label class="input-group-text pr-2" for="inputGroupSelect02"><i class="fas fa-caret-right"></i></label>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                      <h6>Mục đánh giá</h6>
                      <div class="input-group mb-3">
                        <i class="fas fa-exclamation-circle"></i>
                        <select class="custom-select custom-select-nobackground" id="inputGroupSelect02">
                          <option selected>Chọn mục đánh giá</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div class="input-group-append">
                          <label class="input-group-text pr-2" for="inputGroupSelect02"><i class="fas fa-caret-right" ></i></label>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                      <h6>Câu hỏi</h6>
                      <div class="input-group mb-3">
                        <i class="fas fa-exclamation-circle"></i>
                        <select class="custom-select custom-select-nobackground" id="inputGroupSelect02">
                          <option selected>Chọn câu hỏi</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div class="input-group-append">
                          <label class="input-group-text pr-2" for="inputGroupSelect02"><i class="fas fa-caret-right" ></i></label>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                      <h6>Thang điểm</h6>
                      <div class="input-group mb-3">
                        <i class="fas fa-exclamation-circle"></i>
                        <select class="custom-select custom-select-nobackground" id="inputGroupSelect02">
                          <option selected>Chọn thang điểm</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div class="input-group-append">
                          <label class="input-group-text pr-2" for="inputGroupSelect02"><i class="fas fa-caret-right" ></i></label>
                        </div>
                      </div>
                    </div>
<<<<<<< HEAD
                  </div>
                  <div class="txtNoiDung mt-4">

                  </div>
=======
                  </div>
                  <div class="txtNoiDung mt-4">

                  </div>
>>>>>>> master
                  <div class="mt-2 w-100 d-flex justify-content-center btnApDung ">
                    <button type="button" class="btn btn-success text-center ">Áp dụng</button>
                  </div>

                </div>

              </div>
            </div>

            <footer class="footer" style={{ position: 'absolute' }, { width: '-webkit-fill-available' }}>
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

export default DanhMuc;