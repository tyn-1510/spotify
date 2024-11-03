const handleAddTracks = async () => {
    const token = await getToken(); 
    const playlistId = 'your_playlist_id'; 
    const trackUris = ['spotify:track:your_track_id'];
    await addTracksToPlaylist(playlistId, trackUris, token);
    console.log('Tracks added to playlist');
  };
  