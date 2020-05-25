import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-md-12 card">
                    <div class="card-body">
                        <h4 class="card-title font-weight-bold">Báo cáo</h4>
                        {/* <!-- Filter --> */}
                        <div class="form-group mb-4">
                            <label class="title" style={{ fontSize: "1em" }} for="inputState">
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
        )
    }
}

export default Table;