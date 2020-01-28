import React from 'react';

import './checkbox.styles.scss';

const Checkbox = () => (
  <div className='checkbox-container'>
    <label className="checkbox">
      <input type='checkbox' />
      <span className='checkbox__custom'></span>
    </label>
  </div>
);

export default Checkbox;
