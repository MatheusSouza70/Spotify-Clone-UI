import React from "react";
import { Image } from "react-bootstrap";

function SpotifyLogo() {
  return (
    <div className="spotify__logo__div text-center" style={{ padding: 25 }}>
      <Image
        src="https://pbs.twimg.com/media/EW_1SgtXsAAX2de.png"
        alt="sprintfy"
        className="img-fluid"
        style={{ width: 60 }}
      />
      <p>Sprintfy</p>
    </div>
  );
}

export default SpotifyLogo;
