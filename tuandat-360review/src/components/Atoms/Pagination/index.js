import React from 'react';

const pagination = (props) => {
  let entry = (<div className="pull-left">
    <p>Hiển thị 4 trong tổng số 20</p>
  </div>);
  let pullRight = 'pull-right';
  if (props.hideEntry) {
    entry = null;
    pullRight = null;
  }

  return (
    <div className="mt-4">
      {entry}
      <nav className={pullRight} aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
          <li className="page-item"><a className="page-link" href="#">5</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default pagination;