import React from "react";
import TuiMenuItem from "../components/TuiMenuItem";
import TuiDropdown from "../composites/TuiDropdown";
import TuiNavbar from "../composites/TuiNavbar";
import TuiSidenav from "../composites/TuiSidenav";

function Navigation() {

  return (
    <>
      <h3>Navigation</h3>
      <div className="tui-screen-800-600 bordered tui-bg-blue-black">
        <TuiNavbar
          sidenav={
            <TuiSidenav>
              <TuiMenuItem href="#!">
                <span className="red-168-text">O</span>pen
                <span className="tui-shortcut">ctrl+o</span>
              </TuiMenuItem>
              <TuiMenuItem href="#!">
                OS Shell
              </TuiMenuItem>
              <TuiMenuItem href="#!">
                <span className="red-168-text">C</span>opy
                <span className="tui-shortcut">ctrl+c</span>
              </TuiMenuItem>
              <TuiMenuItem href="#!">
                <span className="red-168-text">P</span>aste
                <span className="tui-shortcut">ctrl+v</span>
              </TuiMenuItem>
              <TuiMenuItem href="#!">
                Cut
                <span className="tui-shortcut">ctrl+x</span>
              </TuiMenuItem>
              <div className="tui-black-divider"></div>
              <TuiMenuItem href="#!">
                Insert
              </TuiMenuItem>
              <TuiMenuItem href="#!">
                Delete
              </TuiMenuItem>
              <TuiMenuItem href="#!">
                Go...
              </TuiMenuItem>
              <div className="tui-black-divider"></div>
              <TuiMenuItem href="#!">
                <span className="red-168-text">S</span>earch
                <span className="tui-shortcut">ctrl+p</span>
              </TuiMenuItem>
              <div className="tui-black-divider"></div>
              <TuiMenuItem href="#!">
                Exit <span className="tui-shortcut">F10</span>
              </TuiMenuItem>
            </TuiSidenav>
          }
        >
          <TuiDropdown dropDownLabel={<div><span className="red-168-text">F</span>ile</div>}>
            <TuiMenuItem onClick={ () => {}}>
              <span className="red-168-text">N</span>ew
            </TuiMenuItem>
            <TuiMenuItem href="#!">
              <span className="red-168-text">O</span>pen...
              <span className="tui-shortcut">F3</span>
            </TuiMenuItem>
            <TuiMenuItem href="#!">
              <span className="red-168-text">S</span>ave
              <span className="tui-shortcut">F2</span>
            </TuiMenuItem>
            <TuiMenuItem href="#!">
              S<span className="red-168-text">a</span>ve as...
            </TuiMenuItem>
            <TuiMenuItem href="#!">
              Save a<span className="red-168-text">l</span>l
            </TuiMenuItem>
            <div className="tui-black-divider"></div>

            <TuiDropdown block={true} dropDownLabel={
              <div>
                <span className="right">►</span>
                <span className="red-168-text">M</span>ore
              </div>
            }>
              <TuiMenuItem href="#!">
                <span className="red-168-text">C</span>hange dir...
              </TuiMenuItem>
              <TuiMenuItem href="#!">
                <span className="red-168-text">P</span>rint
              </TuiMenuItem>
              <TuiMenuItem href="#!">
                <span className="red-168-text">D</span>OS shell
              </TuiMenuItem>
            </TuiDropdown>

            <div className="tui-black-divider"></div>
            <TuiMenuItem href="#!">
              <span className="red-168-text">Q</span>uit
              <span className="tui-shortcut">F10</span>
            </TuiMenuItem>
          </TuiDropdown>
          {/* add dropdown and other shit */}
        </TuiNavbar>
      </div>
    </>
  )
}

export default Navigation;