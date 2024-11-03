import React from 'react';
import Album from './Album';
import './AlbumList.css';

const AlbumList = () => {
  const albumIDs = ['2IYQwwgxgOIn7t3iF6ufFD', '52MYcZ4Hzvy9vJcPicjfHZ','3e5tDT1kfaAGx10yOjIDgW'
    ,'2gNPnKP1PDkB5SZz3IMKuX','0S4pP8MBY9p7ngFWIZQAJv'
    ,'0FOOodYRlj7gzh7q7IjmNZ','7wIIhHPyaxAHRvdNQQO2G9','1OGxb1Z5KDBVOwDtyKu8wz','5rI92smOlSS5d1Hq05BY7M','4ls7QOvWzu4OGaQQSiKeDE'];

  return (
    <div className="album-list-container">
      <h1 className="album-list-title">Spotify</h1>
      <div className="album-grid">
        {albumIDs.map(albumID => (
          <div className="album-card" key={albumID}>
            <Album albumID={albumID} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
