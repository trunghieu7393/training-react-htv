import React, { Component } from 'react';
import TableWithButton from '../Atoms/TableWithButton';
import '../../styles.css';
import SelectBox from '../Atoms/SelectBox';
class BaoCao extends Component {
  render() {
    return (
      <div class="">
        <div class="wrapper ">

         

          <div class="main-panel main-panel-height" >

            

            {/* main content */}
            <div class="content">
              <div class="row">
                <div class="col-md-12 card">
                  {/* <!-- <h3 class="description">Your content here</h3> --> */}
                  <div class="card-body">
                    <h4 class="card-title font-weight-bold">Báo cáo</h4>
                    {/* <!-- Filter --> */}
                    
                    <SelectBox
                      label='TÌm kiếm lựa chọn theo team'
                      option_content={['Team Front-End', 'Team PHP', 'Team Node.js', 'Team Back-End']}
                    />
                    {/* <!-- Table --> */}
                    <TableWithButton
                    table_scope={['ID','Tên người dùng','Điểm đánh giá']}
                    table_scope_content={[[1,'Văn An','3/5'],[2,'Văn B','4/5'],[3,'Văn C','5/5']]}
                    />
                    
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
            </div>
            {/* End */}
            

          </div>

        </div>



      </div>
    )
  }
}

export default BaoCao;