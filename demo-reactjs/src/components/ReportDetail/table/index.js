import React, { Component } from 'react';
import axios from 'axios';

class table extends Component {

  state = {
    persons: [],
    name: '',
    id: ''
  }
  componentDidMount() {
    axios.get('http://5ecf5b0216017c00165e29cd.mockapi.io/api/users').then(
      res => {
        const persons = res.data;
        this.setState({ persons });
      }
    )
  }

  // ******************** POST Requests *************//
  // hỏi lại

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`http://5ecf5b0216017c00165e29cd.mockapi.io/api/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  // ******************** DELETE Requests *************//
  handleChangeDel = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmitDel = event => {
    event.preventDefault();

    axios.delete(`http://5ecf5b0216017c00165e29cd.mockapi.io/api/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
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
            {this.state.persons.map(person =>
              <tr>
                <th scope="row">{person.id}</th>
                <td>{person.name}</td>
                <td>{person.point}</td>
                <td>
                  <button type="button" className="btn btn-outline-info btn-round">Xem</button>
                  <button type="button" className="btn btn-outline-danger btn-round">Xoá</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
               <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        <br />
        <form onSubmit={this.handleSubmitDel}>
          <label>
            Person ID:
                <input type="text" name="id" onChange={this.handleChangeDel} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>

    )
  }
}

export default table;