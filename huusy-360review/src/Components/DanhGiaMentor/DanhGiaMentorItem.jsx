import React, { Component } from 'react';
import '../../styles.css';

class DanhGiaMentorItem extends Component {
    render() {
        const { nguoidanhgia, nguoiduocdanhgia, thoihan, id } = this.props;
        return (
            <tr>
                <td>{nguoidanhgia}</td>
                <td>{nguoiduocdanhgia}</td>
                <td>{thoihan}</td>
                <td class="text-center">
                    <button class="btn btn-outline-primary btn-sm">Sửa</button>
                    <button class="btn btn-outline-danger btn-sm">Xóa</button>
                </td>
            </tr>
        )
    }
}
export default DanhGiaMentorItem;