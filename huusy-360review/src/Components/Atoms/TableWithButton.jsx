import React, { Component } from 'react';

class TableWithButton extends Component {
    render() {
        const { tableScope, tableScopeContent } = this.props;
        return (
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr class="text-center">
                        {/* <th scope="col">ID</th>
                          <th scope="col">Tên người dùng</th>
                          <th scope="col">Điểm đánh giá</th>
                          <th scope="col">Thao tác</th> */}
                        {tableScope.map((item, idx) =>
                            <th scope="col" key={idx}>{item}</th>
                        )}
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>

                <tbody class="text-center">
                    {tableScopeContent.map((item, idx) =>

                        <tr key={idx}>
                            {
                                item.map((item2, idx1) =>
                                    <td key={idx1}>{item2}</td>
                                )}
                            <td>
                                <button type="button" class="btn btn-outline-info btn-round">Xem</button>
                                <button type="button" class="btn btn-outline-danger btn-round">Xoá</button>
                            </td>
                        </tr>
                    )
                    }
                    {/* <tr>
                          <th scope="row">1</th>
                          <td>Nguyễn Văn Nam</td>
                          <td>3.5/5</td>
                          <td>
                            <button type="button" class="btn btn-outline-info btn-round">Xem</button>
                            <button type="button" class="btn btn-outline-danger btn-round">Xoá</button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Barry Allen</td>
                          <td>4/5</td>
                          <td>
                            <button type="button" class="btn btn-outline-info btn-round">Xem</button>
                            <button type="button" class="btn btn-outline-danger btn-round">Xoá</button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Lucky Clover</td>
                          <td>3/5</td>
                          <td>
                            <button type="button" class="btn btn-outline-info btn-round">Xem</button>
                            <button type="button" class="btn btn-outline-danger btn-round">Xoá</button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Lung Thị Linh</td>
                          <td>5/5</td>
                          <td>
                            <button type="button" class="btn btn-outline-info btn-round">Xem</button>
                            <button type="button" class="btn btn-outline-danger btn-round">Xoá</button>
                          </td>
                        </tr> */}
                </tbody>
            </table>
        )
    }
}

export default TableWithButton;