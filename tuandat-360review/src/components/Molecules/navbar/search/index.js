import React from 'react';

const search = () => (
  <div>
    <div className="input-group no-border">
      <input type="text" value="1" className="form-control" placeholder="Search..." readOnly />
      <div className="input-group-append">
        <div className="input-group-text">
          <i className="nc-icon nc-zoom-split"></i>
        </div>
      </div>
    </div>
  </div>
)

export default search;