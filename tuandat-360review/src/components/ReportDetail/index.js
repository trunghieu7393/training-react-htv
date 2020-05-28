import React, { Component } from 'react';
import UserTable from './table/';
import Pagination from './pagination/';

class Table extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 card">
          <div className="card-body">
            <h4 className="card-title font-weight-bold">Báo cáo</h4>
            {/* Filter */}
            <div className="form-group mb-4">
              <label className="title" style={{ fontSize: "1em" }} htmlFor="inputState">
                TÌm kiếm lựa chọn theo team
              </label>
              <select id="inputState" className="form-control">
                <option value="1">Team Front-End</option>
                <option value="2">Team PHP</option>
                <option value="3">Team Node.js</option>
              </select>
            </div>
            {/* Table */}
            <UserTable />
            {/* Pagination */}
            <Pagination />
            {/* End of Pagination */}
          </div>
        </div>
        {/* <!-- End Body--> */}
      </div>
    )
  }
}

export default Table;