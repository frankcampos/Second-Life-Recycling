import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { signIn } from '../utils/auth';
import logo from '../assets/rrr-logo.png';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '100vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '50rem',
        width: '100%',
        minWidth: '50rem',
        paddingBlock: '0 5rem',
        backgroundColor: '#eeffda',
      }}
    >
      <h1 className="login">Reduce Reuse Recycle</h1>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Image src={logo} alt="logo" width={300} height={300} />
      </div>
      <Button variant="success" type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
