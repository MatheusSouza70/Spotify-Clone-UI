import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";

function SidebarRow() {
  return (
    <>
      <div className="sidebar__row">
        <div className="sidebar__row__icon">
          <HomeIcon />
        </div>
        <div className="sidebar__row__label">Home</div>
      </div>
      <div className="sidebar__row">
        <div className="sidebar__row__icon">
          <SearchIcon />
        </div>
        <div className="sidebar__row__label">Procurar</div>
      </div>
      <div className="sidebar__row">
        <div className="sidebar__row__icon">
          <LibraryBooksIcon />
        </div>
        <div className="sidebar__row__label">Biblioteca</div>
      </div>
    </>
  );
}

export default SidebarRow;
