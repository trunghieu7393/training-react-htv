import React, { Component } from 'react';

import '../../styles.css';

class TrangDanhGia extends Component {
    render() {
        return (
            <div class="">
            <div class="wrapper ">
              
              
             
              <div class="main-panel main-panel-height" >
          
               
               
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
                <label class="title" style={{fontSize:' 1em'}} for="inputState">
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
                    <p class="card-text" style={{marginLeft: '6px'}}>Sơn Tùng</p>
                  </div>
                  <div class="row align-items-baseline">
                    <h6 class="card-subtitle mb-3 text-muted">Title:</h6>
                    <p class="card-text" style={{marginLeft: '6px'}}>Senior Software Engineer</p>
                  </div>
                  <div class="row align-items-baseline">
                    <h6 class="card-subtitle mb-3 text-muted">Team:</h6>
                    <p class="card-text" style={{marginLeft: '6px'}}>Node.js Back-end</p>
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
                    <textarea class="form-control" id="comment" rows="10" style={{maxHeight: '120px'}}></textarea>
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