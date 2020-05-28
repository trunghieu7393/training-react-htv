import React, { Component } from 'react';
import * as tesaga from '../../redux/actions/testSagas';
import {connect} from 'react-redux';
import '../../styles.css';

class SuaCauHoi extends Component {
    componentDidMount() {
        const {createRedux}=this.props;
        createRedux()
      }
    render() {
        return (
            <div class="">
            <div class="wrapper ">
              
              
             
          
             
              <div class="main-panel main-panel-height" >
                
               
                {/* <main content> */}
                <div class="content">
                <h3>Sửa câu hỏi</h3>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <input type="text" class="form-control" id="exampleInputEmail1"
                                value="Sửa nội dung câu hỏi"/>
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12 col-sm-6">
                        <div class="form-group">
                            <h5>Danh mục</h5>
                            <input type="text" class="form-control" id="exampleInputEmail1"
                                value="Sửa nội dung câu hỏi"/>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="form-group">
                            <h5>Mục đánh giá</h5>
                            <input type="text" class="form-control" id="exampleInputEmail1"
                                value="Sửa nội dung câu hỏi"/>
                        </div>
                    </div>
                </div>
                <div class="view-point mt-3 border">
                    <div class="container">
                        <table class="table table-bordered text-center tb-point" id="dataTable" width="100%"
                            cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Thang điểm </th>
                                    <th>Nội dung tiêu chí</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nội dung 1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Nội dung 2</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Nội dung 3</td>
                                </tr>
                            </tbody>
                        </table>
                        <ul class="btn-1">
                            <li>
                                <button class="btn btn-success">Lưu</button>
                            </li>
                            <li><button class="btn btn-default">Hủy</button></li>
                        </ul>
                    </div>
                </div>
            </div>
          {/* End       */}
          
               
                
              
              </div>
           
            </div>
            
          
           
          </div>

        )
    }
}

export default connect(null,{...tesaga})(SuaCauHoi);