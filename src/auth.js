// src/auth.js

export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "b204b86e80234905a08599b3d5615309"; 
const redirectUri = "http://localhost:3000"; // Replace with your actual redirect URI

  const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "playlist-read-private",
    "user-library-read",
    "user-top-read",
  ];


export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
