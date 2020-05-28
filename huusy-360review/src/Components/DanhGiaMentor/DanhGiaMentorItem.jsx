import React, { Component } from 'react';
import '../../styles.css';
import axios from 'axios';
import { getDatabase, postDatabase, putDatabase, deleteDatabase } from '../../common/actionAPI';

class DanhGiaMentorItem extends Component {
  putDatabase = () => {
    putDatabase('http://localhost:3001/users')
  }
  deleteDatabase = () => {
    deleteDatabase('http://localhost:3001/users')
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