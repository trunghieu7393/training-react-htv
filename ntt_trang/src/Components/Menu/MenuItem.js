import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MenuItem extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li className="active ">
                        <Link to="/DanhMuc">
                            <i className=" nc-icon nc-bulb-63"></i>
                            <p>DanhMuc</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/CauHoi">
                            <i className="nc-icon nc-glasses-2"></i>
                            <p>Câu Hỏi</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ReviewCauHoi">
                            <i className="nc-icon nc-glasses-2"></i>
                            <p>Tất cả câu hỏi</p>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MenuItem;