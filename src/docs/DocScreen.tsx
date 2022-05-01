import type { FC } from "react";
import TuiScreen from "../components/TuiScreen"
import { DarkBackground, ScreenSize } from "../types/enums"
import TuiMenuItem from "../components/TuiMenuItem";
import TuiDropdown from "../composites/TuiDropdown";
import TuiNavbar from "../composites/TuiNavbar";
import TuiSidenav from "../composites/TuiSidenav";
import TuiWindow from "../components/TuiWindow";
import TuiDatetime from "../composites/TuiDatetime";
import TuiCode from "../components/TuiCode";
import TuiLink from "../components/TuiLink";

const DocScreen: FC = () => {

  return (
    <TuiScreen background={DarkBackground.Blue} size={ScreenSize.Med} centered bordered>
      <TuiNavbar
        sidenav={
          <TuiSidenav>
            {/* it's possible this should be an ecapsulated component */}
            {/* could pass a key combo as a prop for the shortcut part and wire the keypress with the action passed in */}
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
        <TuiDatetime format="dd MMM yyyy hh:mm:ss " />
      </TuiNavbar>

      <div className="content">
        <TuiWindow heading="Welcome to React TuiCSS">
          This component library is based on <TuiLink href="https://github.com/vinibiavatti1/TuiCss">TuiCSS</TuiLink>

        </TuiWindow>
      </div>
    </TuiScreen>
  );
}

export default DocScreen;