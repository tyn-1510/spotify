import React from 'react';
import './Login.css';
import { loginUrl } from '../auth';

const Login = () => {
  return (
    <div className="login-container">
     <img className="spotify-logo" src={require('../assets/Spotify_Icon_RGB_Green.png').default}  />
      <h1 className="login-title">Login to Spotify</h1>
      <a href={loginUrl}>
        <button className="login-button">Login with Spotify</button>
      </a>
    </div>
  );
};

export default Login;
