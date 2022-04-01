import React from "react";
import { Image } from "react-bootstrap";

function SpotifyLogo() {
  return (
    <div className="spotify__logo__div text-center" style={{ padding: 25 }}>
      <Image
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
        className="img-fluid"
        style={{ width: 140 }}
      />
    </div>
  );
}

export default SpotifyLogo;
