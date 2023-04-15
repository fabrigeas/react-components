import React from 'react';
import './Spinner.scss';

const Spinner = (): JSX.Element => (
  <div
    className="Spinner"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    }}
  >
    <div
      className="spin"
      style={{
        animation: '1.5s linear infinite spin',
        border: 'solid 0.25rem #cfd0d1',
        borderBottomColor: '#1c87c9',
        borderRadius: '50%',
        height: '50%',
        aspectRatio: '1/1',
      }}
    ></div>
  </div>
);
export default Spinner;
