import React from "react";
import TuiDropdown, { TuiDropdownItem } from "../composites/TuiDropdown";
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
              <ul>
                <li>
                    <a href="#!">
                        <span className="red-168-text">O</span>pen
                        <span className="tui-shortcut">ctrl+o</span>
                    </a>
                </li>
                <li>
                    <a href="#!">OS Shell</a>
                </li>
                <li>
                    <a href="#!">
                        <span className="red-168-text">C</span>opy
                        <span className="tui-shortcut">ctrl+c</span>
                    </a>
                </li>
                <li>
                    <a href="#!">
                        <span className="red-168-text">P</span>aste
                        <span className="tui-shortcut">ctrl+v</span>
                    </a>
                </li>
                <li>
                    <a href="#!">C<span className="red-168-text">u</span>t
                        <span className="tui-shortcut">ctrl+x</span>
                    </a>
                </li>
                <div className="tui-black-divider"></div>
                <li>
                    <a href="#!">Insert</a>
                </li>
                <li>
                    <a href="#!">Delete</a>
                </li>
                <li>
                    <a href="#!">Go...</a>
                </li>
                <div className="tui-black-divider"></div>
                <li>
                    <a href="#!">
                        <span className="red-168-text">S</span>earch
                        <span className="tui-shortcut">ctrl+p</span>
                    </a>
                </li>
                <div className="tui-black-divider"></div>
                <li>
                    <a href="#!">Exit <span className="tui-shortcut">F10</span></a>
                </li>
            </ul>
            </TuiSidenav>
          }
        >
          <TuiDropdown dropDownLabel={<div><span className="red-168-text">F</span>ile</div>}>
            <TuiDropdownItem onClick={ () => {}}>
              <span className="red-168-text">N</span>ew
            </TuiDropdownItem>
            <TuiDropdownItem href="#!">
              <span className="red-168-text">O</span>pen...
              <span className="tui-shortcut">F3</span>
            </TuiDropdownItem>
            <TuiDropdownItem href="#!">
              <span className="red-168-text">S</span>ave
              <span className="tui-shortcut">F2</span>
            </TuiDropdownItem>
            <TuiDropdownItem href="#!">
              S<span className="red-168-text">a</span>ve as...
            </TuiDropdownItem>
            <TuiDropdownItem href="#!">
              Save a<span className="red-168-text">l</span>l
            </TuiDropdownItem>
            <div className="tui-black-divider"></div>

            <TuiDropdown block={true} dropDownLabel={
              <div>
                <span className="right">►</span>
                <span className="red-168-text">M</span>ore
              </div>
            }>
              <TuiDropdownItem href="#!">
                <span className="red-168-text">C</span>hange dir...
              </TuiDropdownItem>
              <TuiDropdownItem href="#!">
                <span className="red-168-text">P</span>rint
              </TuiDropdownItem>
              <TuiDropdownItem href="#!">
                <span className="red-168-text">D</span>OS shell
              </TuiDropdownItem>
            </TuiDropdown>

            <div className="tui-black-divider"></div>
            <TuiDropdownItem href="#!">
              <span className="red-168-text">Q</span>uit
              <span className="tui-shortcut">F10</span>
            </TuiDropdownItem>
          </TuiDropdown>
          {/* add dropdown and other shit */}
        </TuiNavbar>

         {/*<!-- Navbar -->
        <nav className="tui-nav absolute">
            <span className="tui-datetime" data-format="h:m:s a">7:48:27 AM</span>
            <ul>
                <li className="tui-sidenav-button red-168-text">≡</li>
                <li className="tui-dropdown">
                    <span className="red-168-text">F</span>ile
                    <div className="tui-dropdown-content">
                        <ul>
                            <li>
                                <a href="#!">
                                    <span className="red-168-text">N</span>ew
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <span className="red-168-text">O</span>pen...
                                    <span className="tui-shortcut">F3</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <span className="red-168-text">S</span>ave
                                    <span className="tui-shortcut">F2</span>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    S<span className="red-168-text">a</span>ve as...
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    Save a<span className="red-168-text">l</span>l
                                </a>
                            </li>
                            <div className="tui-black-divider"></div>

                             <!-- SUBMENU EXAMPLE -->

                            <li className="tui-dropdown block">
                                <span className="right">►</span>
                                <span className="red-168-text">M</span>ore
                                <div className="tui-dropdown-content">
                                    <ul>
                                        <li>
                                            <a href="#!">
                                                <span className="red-168-text">C</span>hange dir...
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <span className="red-168-text">P</span>rint
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <span className="red-168-text">D</span>OS shell
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <div className="tui-black-divider"></div>
                            <li>
                                <a href="#!">
                                    <span className="red-168-text">Q</span>uit
                                    <span className="tui-shortcut">F10</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="tui-dropdown">
                    <span className="red-168-text">E</span>dit
                </li>
                <li className="tui-dropdown">
                    <span className="red-168-text">V</span>iew
                </li>
                <li className="tui-dropdown">
                    <span className="red-168-text">H</span>elp
                </li>
            </ul>
        </nav> */}

        {/* <!-- Edit panel --> */}
        {/* <div className="tui-window full-width tui-no-shadow" style="margin-top: 20px;">
            <fieldset className="tui-fieldset">
                <legend className="center">MYAPP.CPP</legend>
                <span className="tui-fieldset-button"><span className="green-255-text">↕</span></span>
                <span className="tui-fieldset-button left"><span className="green-255-text">■</span></span>
                <span className="tui-fieldset-text top right" style="margin-right: 50px">1</span>
                <span className="tui-fieldset-text" style="margin-left: 50px;">&nbsp;1:1&nbsp;</span>
                <textarea className="tui-textarea full-width" style="height: 493px; overflow: scroll;">#include &lt;iostream&gt;
using namespace std;

</textarea>
            </fieldset>
        </div> */}

        {/* <!-- Status bar -->
        <div className="tui-statusbar absolute">
            <ul>
                <li><a href="#!"><span className="red-168-text">F1</span> Help</a></li>
                <li><a href="#!"><span className="red-168-text">F2</span> Save</a></li>
                <li><a href="#!"><span className="red-168-text">F3</span> Open</a></li>
                <li><a href="#!"><span className="red-168-text">Alt+F9</span> Compile</a></li>
                <span className="tui-statusbar-divider"></span>
                <li><a href="#!"><span className="red-168-text">F10</span> Menu</a></li>
            </ul>
        </div>

      */}
      </div>
    </>
  )
}

export default Navigation;