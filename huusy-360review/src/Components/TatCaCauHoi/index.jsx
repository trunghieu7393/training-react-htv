import React, { Component } from 'react';

import '../../styles.css';

class TatCaCauHoi extends Component {
    render() {
        return (
            <div class="">
            <div class="wrapper ">
              
            
             
              <div class="main-panel main-panel-height" >
          
                
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
                
                
              </div>
              
            </div>
      
          
           
          </div>
        )
    }
}

export default TatCaCauHoi;