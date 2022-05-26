import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../assets/UIElements/Button/Button';
import './Error404.scss';

function Error404() {
  return (
    <div
      id="wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div className="content" style={{ textAlign: 'center' }}>
        <img
          src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png"
          width={'50%'}
          alt=""
        />
        <div>
          <Button className="return_button">
            <Link to="/">HOME</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Error404;
