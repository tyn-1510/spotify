import React, { useState } from 'react';

const AlbumDetails = ({ album }) => {
  const [currentTrackUri, setCurrentTrackUri] = useState(null);

  const playTrack = (uri) => {
    if (currentTrackUri !== uri) {
      setCurrentTrackUri(uri);
      // Logic to play the track using the provided URI
      console.log(`Playing track: ${uri}`);
    } else {
      console.log(`Track ${uri} is already playing.`);
    }
  };

  return (
    <div>
      <h1>{album.name}</h1>
      <h2>{album.artists.map(artist => artist.name).join(', ')}</h2>
      <img src={album.images[0].url} alt={album.name} />
      <p>Release Date: {album.release_date}</p>
      <p>Total Tracks: {album.total_tracks}</p>

      <h3>Track List:</h3>
      <ul>
        {album.tracks.items.map(track => (
          <li key={track.id}>
            {track.name}
            <button onClick={() => playTrack(track.uri)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumDetails;
