import React, { Component } from 'react';
import axios from 'axios';
import '../../styles.css';
import DanhGiaMentorItem from './DanhGiaMentorItem';

class DanhGiaMentor extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      datathemchidinh: {
        nguoidanhgia:'',
        nguoiduocdanhgia:'',
        thoihan:''
      }
    }
  }
  // componentDidMount=()=> {
  //   const {data}=this.state;
  //   console.log('haha')
  //   var a=[]
  // let ignore = false;

  //    async function fetchData() {
  //      const result = await axios('http://localhost:3001/users');
  //      if (!ignore) { a= result.data;
  //       this.setState({data:result.data})
  //       console.log('result.data',result.data)
  //      };
  //    }
  //    //https://api.giphy.com/v1/gifs/search?api_key=KLPXTaSdbUDCwS9SHN1R68TMtRSGGOdl&q=
  //    fetchData();
  //    this.setState({data:a})
  //    return () => { ignore = true; }
  // }
  componentDidMount() {
    
    axios.get("http://localhost:3001/users")
      .then(response => {
        console.log(response)
        console.log(response.data)


        this.setState({ data: response.data });
      })
      .catch(err => console.log(err));
  }
  handleChange=(e)=> {
    const {datathemchidinh}= this.state;
    datathemchidinh[e.target.name]=e.target.value;
    this.setState({datathemchidinh})
  }
  postDatabase=()=> {
    const {datathemchidinh} = this.state;
    axios.post('http://localhost:3001/users', {
      nguoidanhgia:`huusy`,
      nguoiduocdanhgia: `trandat`,
      thoihan: `trang`
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    const { data, datathemchidinh } = this.state;
    console.log('data', data);
    console.log('datathemchidinh', datathemchidinh);
    return (
      <div class="">
        <div class="wrapper ">
          {/* Header */}
          {/* <div class="sidebar" data-color="white" data-active-color="danger">
               
                <div class="logo">
                  
                  <a href="#" class="logo-normal">
                    <div class="logo-image-small">
                      <img src="./assets/img/hybrid-logo.jpg"/>
                    </div>
                  </a>
                </div>
              
                <div class="sidebar-wrapper">
                <ul class="nav">
          <li class="active ">
            <a href="/CauHoi">
              <i class="nc-icon nc-bulb-63"></i>
              <p>Câu hỏi</p>
            </a>
          </li>
          <li>
            <a href="/DanhMuc">
              <i class="nc-icon nc-glasses-2"></i>
              <p>Danh mục</p>
            </a>
          </li>
          <li>
            <a href="/ReViewCauHoi">
              <i class="nc-icon nc-bullet-list-67"></i>
              <p>Review câu hỏi</p>
            </a>
          </li>
        </ul>
                </div>
              </div> */}
          {/* End header */}
          <div class="main-panel main-panel-height" >
            {/* top fixed */}
            
            {/* End top fixed */}
            {/* main content */}
            <div class="content">
              <div class="row">
                <div class="col-12 col-sm-4">
                  <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Người đánh giá</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-sm-4">
                  {/* <!-- Search form --> */}
                  <form>
                    <div class="input-group">
                      <input type="text" value="" class="form-control" placeholder="Search..." />
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <i class="nc-icon nc-zoom-split"></i>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card mb-4">
                <div class="card-header">
                  <h5>Danh sách chỉ định</h5>
                </div>
                <div class="card-body">
                  <div class="table-responsive col-md-12">
                    <table class="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>Người đánh giá</th>
                          <th>Người được đánh giá</th>
                          <th>Thời hạn</th>
                          <th>Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item,idx)=>
                          <DanhGiaMentorItem
                          key={idx}
                          nguoidanhgia={item.nguoidanhgia}
                          nguoiduocdanhgia={item.nguoiduocdanhgia}
                          thoihan={item.thoihan}
                          id={item.id}
                          />
                        )}
                        
                      </tbody>
                    </table>

                    <ul class="btn-1">
                      <li>
                        <button class="btn btn-success">Lưu</button>
                      </li>
                      <li><button class="btn btn-danger">Xóa hết</button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card mb-4">
                <div class="card-header">
                  <h5>Thêm chỉ định</h5>
                </div>
                <div class="card-body">
                  <div class="table-responsive col-md-12">
                    <table class="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>Người đánh giá</th>
                          <th>Người được đánh giá</th>
                          <th>Thời hạn</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="text" name="nguoidanhgia" placeholder="Nguyễn Văn A" onChange={e=>this.handleChange(e)}></input></td>
                          <td><input type="text" name="nguoiduocdanhgia" placeholder="Nguyễn Văn B" onChange={e=>this.handleChange(e)}></input></td>
                          <td><input type="text" name="thoihan" placeholder="19/05/2020" onChange={e=>this.handleChange(e)}></input></td>
                        </tr>
                      </tbody>
                    </table>

                    <ul class="btn-1">
                      <li>
                        <button class="btn btn-primary" onClick={this.postDatabase}>Thêm mới</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            

          </div>

        </div>



      </div>
    )
  }
}

export default DanhGiaMentor;