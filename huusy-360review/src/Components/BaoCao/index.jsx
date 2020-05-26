import React, { Component } from 'react';
import TableWithButton from '../Atoms/TableWithButton';
import '../../styles.css';
import SelectBox from '../Atoms/SelectBox';
import Pagination from '../Atoms/Pagination';

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
                      optionContent={['Team Front-End', 'Team PHP', 'Team Node.js', 'Team Back-End']}
                    />
                    {/* <!-- Table --> */}
                    <TableWithButton
                    tableScope={['ID','Tên người dùng','Điểm đánh giá']}
                    tableScopeContent={[[1,'Văn An','3/5'],[2,'Văn B','4/5'],[3,'Văn C','5/5']]}
                    />
                    
                    {/* <!-- Pagination Start--> */}
                    <Pagination/>
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