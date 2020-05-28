import React from 'react';

const detail = () => {
  const custom = {
    position: "absolute",
    width: "-webkit-fill-available",
  }

  return (
    <footer className="footer" style={custom}>
      <div className="container-fluid">
        <div className="row">
          <nav className="footer-nav">
            <ul>
              <li><a href="#" target="_blank">About Us</a></li>
              <li><a href="#" target="_blank">Contact</a></li>
              <li><a href="#" target="_blank">Licenses</a></li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © 2020 Hybrid Technologies Vietnam
              <i className="fa fa-heart heart"></i>
              All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default detail;