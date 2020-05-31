import React, { Component } from 'react';

import Pagination from '../Pagination/';

class ListDetail extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="form-group">
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Danh mục có sẵn</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          {/* <!-- Search form --> */}
          <div className="form-group">
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Mục đánh giá có sẵn</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-sm-8">
          <form>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search..." />
              <div className="input-group-append">
                <div className="input-group-text">
                  <i className="nc-icon nc-zoom-split"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 card mb-4">
          <div className="card-header">
            <h5>Danh sách các câu hỏi</h5>
          </div>
          <div className="card-body">
            <table className="table table-bordered text-center" id="dataTable">
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
                    <button className="btn btn-outline-primary btn-sm mr-2">Sửa</button>
                    <button className="btn btn-outline-danger btn-sm">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Nội dung 1</td>
                  <td>Danh mục 1</td>
                  <td>Mục đánh giá 1</td>
                  <td>
                    <button className="btn btn-outline-primary btn-sm mr-2">Sửa</button>
                    <button className="btn btn-outline-danger btn-sm">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Nội dung 1</td>
                  <td>Danh mục 1</td>
                  <td>Mục đánh giá 1</td>
                  <td>
                    <button className="btn btn-outline-primary btn-sm mr-2">Sửa</button>
                    <button className="btn btn-outline-danger btn-sm">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </div>
    )
  }
}

export default ListDetail;