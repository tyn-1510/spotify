import React, { useEffect, useState } from 'react';
import AlbumList from './components/AlbumList';
import Login from './components/Login';
import { getTokenFromUrl } from './auth'; 
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotifyApi.setAccessToken(_token);
    }
  }, []);

  return (
    <div>
      {!token ? (
        <Login />
      ) : (
        <AlbumList token={token} />
      )}
    </div>
  );
};

export default App;
