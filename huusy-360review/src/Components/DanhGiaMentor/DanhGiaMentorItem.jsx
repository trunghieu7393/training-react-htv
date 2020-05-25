import React, { Component } from 'react';
import '../../styles.css';
import axios from 'axios';
class DanhGiaMentorItem extends Component {
    putDatabase=()=> {
        let inf= {
            url:'http://localhost:3001/users',
            method:'put',
            data: 'content'
        }
        axios(inf).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      deleteDatabase=()=> {
        axios.delete("http://localhost:3001/users")
        .then(response => {
          console.log(response)
          
        })
        .catch(err => console.log(err));
      }
    render() {
        const { nguoidanhgia, nguoiduocdanhgia, thoihan, id } = this.props;
        return (
            <tr>
                <td>{nguoidanhgia}</td>
                <td>{nguoiduocdanhgia}</td>
                <td>{thoihan}</td>
                <td class="text-center">
                    <button class="btn btn-outline-primary btn-sm" onClick={this.putDatabase}>Sửa</button>
                    <button class="btn btn-outline-danger btn-sm" onClick={this.deleteDatabase}>Xóa</button>
                </td>
            </tr>
        )
    }
}
export default DanhGiaMentorItem;