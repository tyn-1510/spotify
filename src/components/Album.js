import React, { useEffect, useState } from 'react';
import { fetchAlbum } from '../api/spotifyApi';
import './Album.css';

const Album = ({ albumID }) => {
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null); // State to track the current track

  useEffect(() => {
    const getAlbumData = async () => {
      try {
        const data = await fetchAlbum(albumID);
        setAlbum(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getAlbumData();

    return () => {
      if (currentTrack) {
        currentTrack.pause(); // Stop the audio when the component unmounts
      }
    };
  }, [albumID, currentTrack]);

  const playTrack = (track) => {
    if (!track.preview_url) {
      alert("This track does not have a preview available.");
      return;
    }

    if (currentTrack) {
      if (currentTrack.src === track.preview_url) {
        currentTrack.paused ? currentTrack.play() : currentTrack.pause();
        return;
      }
      currentTrack.pause();
    }

    const audio = new Audio(track.preview_url);
    audio.play().catch(error => console.error('Error playing audio:', error));
    setCurrentTrack(audio);

    audio.addEventListener('ended', () => {
      setCurrentTrack(null); // Reset current track when finished
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching album: {error.message}</div>;
  }

  return (
    <div className="album-list-container">
      <div className="album-container">
        <div className="album-header">
          <img 
            src={album.images[0]?.url || 'fallback-image-url'} 
            alt={album.name} 
            className="album-image" 
          />
          <div className="album-info">
            <h2>{album.name}</h2>
            <p>Artist: {album.artists.map(artist => artist.name).join(', ')}</p>
            <p>Release Date: {album.release_date}</p>
            <p>Total Tracks: {album.total_tracks}</p>
          </div>
        </div>
        <h3>Tracks:</h3>
        <ul className="track-list">
          {album.tracks.items.map(track => (
            <li key={track.id} className="track-item">
              <span>{track.name}</span>
              <button onClick={() => playTrack(track)}>
                {currentTrack && currentTrack.src === track.preview_url && !currentTrack.paused ? 'Pause' : 'Play'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};



export default Album;
