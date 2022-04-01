import React from "react";
import SidebarRow from "../../components/SidebarRow";
import SpotifyLogo from "../../components/SpotifyLogo";
import PlayList from "../../components/SidebarPlayList";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./style.css";

function Sidebar() {
  return (
    <div
      className="sidebar__container"
      data-aos="slide-right"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
    >
      <SpotifyLogo />
      <SidebarRow />
      <PlayList />
      <div className="install__app__div">
        <GetAppIcon className="install__app__icon" />
        Install App
      </div>
    </div>
  );
}

export default Sidebar;
