import React, { Component } from 'react';

class Table extends Component {
  render() {
    const { tableScope, tableScopeContent } = this.props;
    return (
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr class="text-center">
            {tableScope.map((item, idx) =>
              <th scope="col" key={idx}>{item}</th>
            )}
          </tr>
        </thead>
        <tbody class="text-center">
          {tableScopeContent.map((item, idx) =>

            <tr key={idx}>
              {
                item.map((item2, idx1) =>
                  <td key={idx1}>{item2}</td>
                )}
            </tr>
          )
          }

        </tbody>
      </table>
    )
  }
}

export default Table;