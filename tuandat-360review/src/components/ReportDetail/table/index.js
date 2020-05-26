import React from 'react';

const table = () => {
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr className="text-center">
          <th scope="col">ID</th>
          <th scope="col">Tên người dùng</th>
          <th scope="col">Điểm đánh giá</th>
          <th scope="col">Thao tác</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <th scope="row">1</th>
          <td>Nguyễn Văn Nam</td>
          <td>3.5/5</td>
          <td>
            <button type="button" className="btn btn-outline-info btn-round">Xem</button>
            <button type="button" className="btn btn-outline-danger btn-round">Xoá</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Barry Allen</td>
          <td>4/5</td>
          <td>
            <button type="button" className="btn btn-outline-info btn-round">Xem</button>
            <button type="button" className="btn btn-outline-danger btn-round">Xoá</button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Lucky Clover</td>
          <td>3/5</td>
          <td>
            <button type="button" className="btn btn-outline-info btn-round">Xem</button>
            <button type="button" className="btn btn-outline-danger btn-round">Xoá</button>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Nguyễn Thị Linh Chi</td>
          <td>5/5</td>
          <td>
            <button type="button" className="btn btn-outline-info btn-round">Xem</button>
            <button type="button" className="btn btn-outline-danger btn-round">Xoá</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default table;