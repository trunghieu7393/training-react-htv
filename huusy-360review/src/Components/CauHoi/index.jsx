import React, { Component } from 'react';
import * as tesaga from '../../redux/actions/testSagas';
import { connect } from 'react-redux';
import '../../styles.css';

class CauHoi extends Component {
	componentDidMount() {
		const { createRedux } = this.props;
		createRedux()
	}
	render() {
		return (
			<div class="">
				<div class="wrapper ">



					<div class="main-panel main-panel-height" >



						<div class="content">
							<div class="row">

								<div class="container-fluid">
									<h1 class="mt-4">Quản lý câu hỏi</h1>
									<ol class="breadcrumb mt-4 mb-4">
										<li class="breadcrumb-item active">Nhập nội dung câu hỏi</li>
									</ol>
									<div class="card mb-4">
										<div class="card-body">
											<div class="row">
												<div class="col-12 col-sm-6 col-md-6">
													<h4>Danh mục</h4>
													<div class="form-check">
														<label class="form-check-label">
															<input type="radio" class="form-check-input" name="optradio" />Tự nhập
                                        </label>
														<input class="form-control" type="text" name="" />
													</div>
													<div class="form-check">
														<label class="form-check-label">
															<input type="radio" class="form-check-input" name="optradio" />Chọn sẵn
                                        </label>

														<select class="form-control" id="sel1">
															<option>Danh mục có sẵn</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
														</select>
													</div>
												</div>
												<div class="col-12 col-sm-6 col-md-6  mt-1">
													<h4>Mục đánh giá</h4>

													<div class="form-check">
														<input class="form-control" type="text" name="" />
													</div>

													<div class="form-check mt-1">
														<select class="form-control" id="sel1">
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

									<div class="card mb-4">
										<div class="card-body">
											<div class="table-responsive table-responsive-hidden">
												<div class="table-responsive table-responsive-hidden">
													<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
														<thead>
															<tr>
																<th class="border-table-right">Thanh điểm</th>
																<th class="border-table-right">Nội dung tiêu chuẩn</th>
																<th class="">Teamplate</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>1</td>
																<td>System Architect</td>
																<td>
																	<button class="btn btn-primary">Chọn mẫu</button>
																</td>
															</tr>
															<tr>
																<td>2</td>
																<td>Accountant</td>
																<td><button class="btn btn-primary">Chọn mẫu</button></td>
															</tr>
														</tbody>
													</table>

													<ul class="btn-Save">
														<li>
															<button class="btn btn-primary">Thêm mới</button>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>



					</div>

				</div>


			</div>
		)
	}
}

export default connect(null, { ...tesaga })(CauHoi);