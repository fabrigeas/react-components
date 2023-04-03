import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div
      className="spinner"
      style={{
        border: '16px solid #f3f3f3',
        borderRadius: '50%',
        borderTop: '16px solid black',
        width: '8rem',
        height: '8rem',
        margin: 'auto',
        WebkitAnimation: 'spin 2s linear infinite',
        animation: 'spin 2s linear infinite',
      }}
    ></div>
  );
};

export default Spinner;
