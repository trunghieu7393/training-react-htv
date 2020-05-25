import React from 'react';

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
                                <label className="custom-control-label" for="point1">
                                    1
                                            </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="point2" name="point" className="custom-control-input" />
                                <label className="custom-control-label" for="point2">
                                    2
                                            </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="point3" name="point" className="custom-control-input" />
                                <label className="custom-control-label" for="point3">
                                    3
                                            </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="point4" name="point" className="custom-control-input" />
                                <label className="custom-control-label" for="point4">
                                    4
                                            </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="point5" name="point" className="custom-control-input" />
                                <label className="custom-control-label" for="point5">
                                    5
                                            </label>
                            </div>
                        </div>
                        {/* <!-- Comment TextArea --> */}
                        <div className="form-group">
                            <label className="h3 font-weight-bold" for="comment">Comments</label>
                            <textarea className="form-control" id="comment" rows="10" style={{ maxHeight: "120px" }}></textarea>
                        </div>
                        {/* <!-- Pagination --> */}
                        <nav className="mt-4" aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabindex="-1">Previous</a>
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
                        {/* <!-- End of Pagination --> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Table;