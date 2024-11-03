import React, { useEffect } from 'react';

const SpotifyPlayer = ({ token, trackUri }) => {
  useEffect(() => {
    if (window.Spotify) {
      const player = new window.Spotify.Player({
        name: 'Web Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
      });

      // Connect to the player!
      player.connect();

      player.addListener('player_state_changed', state => {
        console.log(state);
      });

      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      player.addListener('authentication_error', ({ message }) => { console.error(message); });
      player.addListener('account_error', ({ message }) => { console.error(message); });
      player.addListener('playback_error', ({ message }) => { console.error(message); });

      // Use this to control the player
      const play = () => {
        player.resume().then(() => {
          console.log('Resumed!');
        });
      };

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        play();
      });
    }
  }, [token]);

  return <div>Spotify Player</div>;
};

export default SpotifyPlayer;