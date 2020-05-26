import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 card">
          <div className="card-body">
            <h4 className="card-title font-weight-bold">Báo cáo</h4>
            {/* <!-- Filter --> */}
            <div className="form-group mb-4">
              <label className="title" style={{ fontSize: "1em" }} For="inputState">
                TÌm kiếm lựa chọn theo team
                        </label>
              <select id="inputState" className="form-control">
                <option selected disabled>Lựa chọn</option>
                <option value="1">Team Front-End</option>
                <option value="2">Team PHP</option>
                <option value="3">Team Node.js</option>
              </select>
            </div>
            {/* <!-- Table --> */}
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th scope="col">ID</th>
                  <th scope="col">Tên người dùng</th>
                  <th scope="col">Điểm đánh giá</th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <th scope="row">1</th>
                  <td>Nguyễn Văn Nam</td>
                  <td>3.5/5</td>
                  <td>
                    <button type="button" className="btn btn-outline-info btn-round">Xem</button>
                    <button type="button" className="btn btn-outline-danger btn-round">Xoá</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Barry Allen</td>
                  <td>4/5</td>
                  <td>
                    <button type="button" className="btn btn-outline-info btn-round">Xem</button>
                    <button type="button" className="btn btn-outline-danger btn-round">Xoá</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Lucky Clover</td>
                  <td>3/5</td>
                  <td>
                    <button type="button" className="btn btn-outline-info btn-round">Xem</button>
                    <button type="button" className="btn btn-outline-danger btn-round">Xoá</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Nguyễn Thị Linh Chi</td>
                  <td>5/5</td>
                  <td>
                    <button type="button" className="btn btn-outline-info btn-round">Xem</button>
                    <button type="button" className="btn btn-outline-danger btn-round">Xoá</button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <!-- Pagination Section --> */}
            <div className="mt-4">
              <div className="pull-left">
                <p>Hiển thị 4 trong tổng số 20</p>
              </div>
              <nav className="pull-right" aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">5</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- End of Pagination --> */}
          </div>
        </div>
        {/* <!-- End --> */}
      </div>
    )
  }
}

export default Table;