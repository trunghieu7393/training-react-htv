import React from 'react';
import TopMenu from '../Menu/TopMenu'

class CauHoi extends React.Component {
    render() {
        return (
            <div className="main-panel main-panel-height">
                <TopMenu />
                <div className="content">
                    <h1 className="mt-4">Quản lý câu hỏi</h1>
                    <ol className="breadcrumb mt-4 mb-4">
                        <li className="breadcrumb-item active">Nhập nội dung câu hỏi</li>
                    </ol>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6">
                                    <h4>Danh mục</h4>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="optradio" />Tự nhập
                                        </label>
                                        <input className="form-control" type="text" name="" />
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="optradio" />Chọn sẵn
                                        </label>
                                        <br />
                                        <select className="form-control" id="sel1">
                                            <option>Danh mục có sẵn</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-6  mt-1">
                                    <h4>Mục đánh giá</h4>
                                    <br />
                                    <div className="form-check">
                                        <input className="form-control" type="text" name="" />
                                    </div>
                                    <br />
                                    <div className="form-check mt-1">
                                        <select className="form-control" id="sel1">
                                            <option>Mục đánh giá có sẵn</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="table-responsive table-responsive-hidden">
                                <div className="table-responsive table-responsive-hidden">
                                    <table className="table table-bordered" id="dataTable" width="100%">
                                        <thead>
                                            <tr>
                                                <th className="border-table-right">Thanh điểm</th>
                                                <th className="border-table-right">Nội dung tiêu chuẩn</th>
                                                <th className="">Teamplate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>System Architect</td>
                                                <td>
                                                    <button className="btn btn-primary">Chọn mẫu</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Accountant</td>
                                                <td><button className="btn btn-primary">Chọn mẫu</button></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <ul className="btn-Save">
                                        <li>
                                            <button className="btn btn-primary">Thêm mới</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
};

export default CauHoi;