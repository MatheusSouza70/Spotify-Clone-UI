import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import SpeakerGroupIcon from "@material-ui/icons/SpeakerGroup";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import LaptopIcon from "@material-ui/icons/Laptop";
import HomeIcon from "@material-ui/icons/Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer d-flex align-items-center">
        <div className="song-info d-flex align-items-center">
          <div className="album--img mr-3">
            <img
              src={require("../../assets/images/hiphop/1.jpg").default}
              alt=""
              className="img-fluid"
              style={{ width: 60 }}
            />
          </div>
          <div className="song-name d-flex align-items-center">
            <div className="mr-4">
              <p style={{ fontSize: 14, fontFamily: "Spotify Bold" }}>Big Poppa</p>
              <span style={{ fontSize: 13, fontFamily: "Spotify Regular" }}>
              Notorius B.I.G
              </span>
            </div>
            <FavoriteBorderIcon
              style={{ fontSize: 20, marginRight: 15, color: "#999" }}
            />
            <LaptopIcon style={{ fontSize: 20, color: "#999" }} />
          </div>
        </div>
        <div className="controls d-flex text-center">
          <div>
            <ShuffleIcon className="controls-icon" />
            <SkipPreviousIcon className="controls-icon" />
            <PlayCircleOutlineIcon className="controls-icon main--icon" />
            <SkipNextIcon className="controls-icon" />
            <SettingsBackupRestoreIcon className="controls-icon" />
          </div>
          <div className="duration">
            <span style={{ fontSize: 13, marginRight: 5 }}>0:00</span>
            <input type="range" defaultValue={0} className="range" />
            <span style={{ fontSize: 13, marginLeft: 5 }}>4:22</span>
          </div>
        </div>
        <div className="volume-controls d-flex align-items-center">
          <PlaylistPlayIcon className="volume-controls-icon" />
          <SpeakerGroupIcon className="volume-controls-icon" />
          <VolumeUpIcon className="volume-controls-icon" />
          <input type="range" defaultValue={100} className="range volume" />
        </div>
        <div className="mobile-footer hidden-lg-up">
          <div className="link">
            <HomeIcon className="footer-icon" style={{ color: "#fff" }} />
            <p style={{ color: "#fff" }}>Home</p>
          </div>
          <div className="link">
            <SearchIcon className="footer-icon" />
            <p>Procurar</p>
          </div>
          <div className="link">
            <LibraryBooksIcon className="footer-icon" />
            <p>Biblioteca</p>
          </div>
          <div className="link">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/2111/2111624.svg"
              alt=""
              className="img-fluid spotify-icon"
            />
            <p>Baixe o Aplicativo</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
