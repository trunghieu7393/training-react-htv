import React from 'react';

import Pagination from '../Pagination/';

const Table = () => {
  return (
    <div className="col-md-12 card">
      <div className="card-body">
        <h4 className="card-title font-weight-bold">Bảng đánh giá</h4>
        {/* <!-- Question --> */}
        <div className="row card flex-row mt-4">
          <div className="col-md-2 text-center">
            <h5>Câu 1/50</h5>
          </div>
          <div className="col-md-10">
            <p className="font-weight-bold">
              Hoàn thành công việc theo kế hoạch: Mức độ mà nhân viên hoàn thành công việc trong một khoảng thời
              gian nhất định hoặc trong một giới hạn thời gian hợp lý.
            </p>
          </div>
        </div>
        {/* <!-- Table --> */}
        <div className="row">
          <div className="col-md-3 card">
            <h5 className="card-title text-center">Tiêu chí đánh giá</h5>
            <div className="mb-3">
              <ul className="list-group">
                <li className="list-group-item">1. Tham gia dưới 50% buổi</li>
                <li className="list-group-item">2. Tham gia 50%-75% buổi</li>
                <li className="list-group-item">3. Tham gia >75% buổi</li>
                <li className="list-group-item">4. Tham gia đủ 100%</li>
                <li className="list-group-item">5. Chất lượng vượt mức mong đợi</li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <h5 className="card-title mb-2">Lựa chọn thang điểm</h5>
            <div className="card-body h5 d-flex justify-content-around">
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="point1" name="point" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="point1">
                  1
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="point2" name="point" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="point2">
                  2
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="point3" name="point" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="point3">
                  3
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="point4" name="point" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="point4">
                  4
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="point5" name="point" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="point5">
                  5
                </label>
              </div>
            </div>
            {/* <!-- Comment TextArea --> */}
            <div className="form-group">
              <label className="h3 font-weight-bold" htmlFor="comment">Comments</label>
              <textarea className="form-control" id="comment" rows="10" style={{ maxHeight: "120px" }}></textarea>
            </div>
            {/* <!-- Pagination --> */}
            <Pagination hideEntry />
            {/* <!-- End of Pagination --> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Table;