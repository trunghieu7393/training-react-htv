import React, { Component } from 'react';
import * as tesaga from '../../redux/actions/testSagas';
import {connect} from 'react-redux';
import './DanhMuc.scss';
import '../../styles.css';

class DanhMuc extends Component {
  componentDidMount() {
    const {createRedux}=this.props;
    createRedux()
  }
  render() {
    return (
      <div class="">
        <div class="wrapper ">
          {/* header */}
          
          {/* End header */}
          <div class="main-panel main-panel-height" >

            

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
                  </div>
                  <div class="txtNoiDung mt-4">

                  </div>
                  <div class="mt-2 w-100 d-flex justify-content-center btnApDung ">
                    <button type="button" class="btn btn-success text-center ">Áp dụng</button>
                  </div>

                </div>

              </div>
            </div>

            

          </div>

        </div>



      </div>
    )
  }
}

export default connect(null,{...tesaga})(DanhMuc);