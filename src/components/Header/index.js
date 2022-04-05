import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "./style.css";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="navbar navbar-default fixed-top">
        <Navbar.Brand href="#home">
          <ChevronLeftIcon className="navbar__icon" />
          <ChevronRightIcon className="navbar__icon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="profile__dropdown"
              >
                <PersonOutlineIcon style={{ marginRight: 5 }} />
                <span
                  style={{
                    marginRight: 10,
                    fontSize: 13,
                    fontFamily: "Spotify Bold",
                  }}
                >
                  Theorycraft Team
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item className="option">Conta</Dropdown.Item>
                <Dropdown.Item className="option">Perfil</Dropdown.Item>
                <Dropdown.Item className="option">Sair</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
