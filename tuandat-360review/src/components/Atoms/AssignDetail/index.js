import React, { Component } from 'react';

class AssignDetail extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="form-group">
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Người đánh giá</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          {/* Search Form */}
          <form>
            <div className="input-group">
              <input type="text" value="" className="form-control" placeholder="Search..." />
              <div className="input-group-append">
                <div className="input-group-text">
                  <i className="nc-icon nc-zoom-split"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="card mb-4">
          <div className="card-header">
            <h5>Danh sách chỉ định</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive col-md-12">
              <table className="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>Người đánh giá</th>
                    <th>Người được đánh giá</th>
                    <th>Thời hạn</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nguyễn Văn A</td>
                    <td>Nguyễn Văn B</td>
                    <td>19/5/2020</td>
                    <td className="text-center">
                      <button className="btn btn-outline-primary btn-sm">Sửa</button>
                      <button className="btn btn-outline-danger btn-sm">Xóa</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Nguyễn Văn A</td>
                    <td>Nguyễn Văn B</td>
                    <td>19/5/2020</td>
                    <td className="text-center">
                      <button className="btn btn-outline-primary btn-sm">Sửa</button>
                      <button className="btn btn-outline-danger btn-sm">Xóa</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Nguyễn Văn A</td>
                    <td>Nguyễn Văn B</td>
                    <td>19/5/2020</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm">Sửa</button>
                      <button className="btn btn-outline-danger btn-sm">Xóa</button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <ul className="btn-1">
                <li>
                  <button className="btn btn-success">Lưu</button>
                </li>
                <li><button className="btn btn-danger">Xóa hết</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-header">
            <h5>Thêm chỉ định</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive col-md-12">
              <table className="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>Người đánh giá</th>
                    <th>Người được đánh giá</th>
                    <th>Thời hạn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nguyễn Văn A</td>
                    <td>Nguyễn Văn B</td>
                    <td>19/5/2020</td>
                  </tr>
                </tbody>
              </table>

              <ul className="btn-1">
                <li>
                  <button className="btn btn-primary">Thêm mới</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default AssignDetail;