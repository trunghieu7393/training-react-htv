import React from 'react';
import TopMenu from '../Menu/TopMenu'

class DanhMuc extends React.Component {
    render() {
        return (
            <div className="main-panel main-panel-height">
                <TopMenu />
                <div className="content">
                <div className="container-fluid">
                    <h1 className="mt-4">Danh sách các mẫu tiêu chí</h1>
                    <div className="row mt-3">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                            <div className="input-group mb-3">
                                <select className="custom-select custom-select-nobackground" id="inputGroupSelect02">
                                    <option selected>Chọn danh mục</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="input-group-append">
                                    <label className="input-group-text pr-2" for="inputGroupSelect02"><i className="fas fa-caret-right"></i></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                            <div className="input-group mb-3">
                                <select className="custom-select custom-select-nobackground" id="inputGroupSelect02">
                                    <option selected>Chọn mục đánh giá</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="input-group-append">
                                    <label className="input-group-text pr-2" for="inputGroupSelect02"><i className="fas fa-caret-right" ></i></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                            <div className="input-group mb-3">
                                <select className="custom-select custom-select-nobackground" id="inputGroupSelect02">
                                    <option selected>Chọn câu hỏi</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="input-group-append">
                                    <label className="input-group-text pr-2" for="inputGroupSelect02"><i className="fas fa-caret-right" ></i></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                            <div className="input-group mb-3">
                                <select className="custom-select custom-select-nobackground" id="inputGroupSelect02">
                                    <option selected>Chọn thang điểm</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="input-group-append">
                                    <label className="input-group-text pr-2" for="inputGroupSelect02"><i className="fas fa-caret-right" ></i></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="txtNoiDung mt-4">

                    </div>
                    <button type="button" className="btn btn-primary mt-2 ml-2 btnApDung">Áp dụng</button>

                </div>
                </div>
            </div>
        )
    }
};

export default DanhMuc;