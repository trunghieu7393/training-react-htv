import React, { Component } from 'react';
import * as tesaga from '../../redux/actions/testSagas';
import { connect } from 'react-redux';
import '../../styles.css';

class ReViewCauHoi extends Component {
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
										<li class="breadcrumb-item active">Hiện nội dung câu hỏi</li>
									</ol>
									<div class="card mb-4">
										<div class="card-body">
											<div class="row">
												<div class="col-12 col-sm-6 col-md-6">
													<h4>Danh mục</h4>
													<ol class="breadcrumb mt-4 mb-4">
														<li class="breadcrumb-item active">Kỹ năng</li>
													</ol>

												</div>
												<div class="col-12 col-sm-6 col-md-6  mt-1">
													<h4>Mục đánh giá</h4>
													<ol class="breadcrumb mt-4 mb-4">
														<li class="breadcrumb-item active">Hoàn thiện blabla abc</li>
													</ol>


												</div>
											</div>
										</div>
									</div>

									<div class="card mb-4">
										<div class="card-body">
											<div class="table-responsive table-responsive-hidden  ">
												<div class="table-responsive table-responsive-hidden table-responsive-ajust">
													<table class="table table-bordered table-width-ajust  " id="dataTable" cellspacing="0">
														<thead>
															<tr>
																<th class="border-table-right border-table-left border-table-top ">Thanh điểm</th>
																<th class="border-table-right border-table-top">Nội dung tiêu chuẩn</th>

															</tr>
														</thead>
														<tbody>
															<tr>
																<td>1</td>
																<td>Nội dung 1</td>

															</tr>
															<tr>
																<td>2</td>
																<td>Nội dung 2</td>

															</tr>
															<tr>
																<td>3</td>
																<td>Nội dung 3</td>

															</tr>
														</tbody>
													</table>

													<ul class="btn-Save button-width-ajust d-flex justify-content-end mr-4">
														<li>
															<button class="btn btn-success">Quay lại</button>
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

export default connect(null, { ...tesaga })(ReViewCauHoi);