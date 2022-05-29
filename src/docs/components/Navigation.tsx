import { FC, ReactNode } from "react";
import TuiScreen from "../../components/TuiScreen"
import { DarkBackground, ScreenSize } from "../../types/enums"
import TuiMenuItem from "../../components/TuiMenuItem";
import TuiDropdown from "../../composites/TuiDropdown";
import TuiNavbar from "../../composites/TuiNavbar";
import TuiSidenav from "../../composites/TuiSidenav";
import TuiWindow from "../../components/TuiWindow";
import TuiDatetime from "../../composites/TuiDatetime";
import TuiLink from "../../components/TuiLink";
import { Link, useNavigate } from "react-router-dom"

interface NavigationProps {
  children: ReactNode;
}

const Navigation: FC<NavigationProps> = ({children}: NavigationProps) => {

  const navigate = useNavigate()

  return (
    <TuiScreen background={DarkBackground.Blue} size={ScreenSize.Med} centered bordered>
      <TuiNavbar
        sidenav={
          <TuiSidenav>
            {/* could pass a key combo as a prop for the shortcut part and wire the keypress with the action passed in */}
            <TuiMenuItem stop prevent ctrlKey keyPress="b" action={() => { navigate("/button") } }>
              <Link to="/button">
                <span className="red-168-text">B</span>utton
                <span className="tui-shortcut">ctrl+b</span>
              </Link>
            </TuiMenuItem>
            <TuiMenuItem>
              <Link to="/background">
                Background
              </Link>
            </TuiMenuItem>
            <TuiMenuItem>
              <Link to="/chart">
                Chart
              </Link>
            </TuiMenuItem>
            <TuiMenuItem>
              <Link to="/datetime">
                Datetime
              </Link>
            </TuiMenuItem>
            <TuiMenuItem>
              <Link to="/divider">
                Divider
              </Link>
            </TuiMenuItem>
            <TuiMenuItem>
              <Link to="/dropdown">
                Dropdown
              </Link>
            </TuiMenuItem>
            <TuiMenuItem>
              <Link to="/layout">
                Layout
              </Link>
            </TuiMenuItem>
            <TuiMenuItem>
              <Link to="/grid">
                Grid
              </Link>
            </TuiMenuItem>
            <TuiMenuItem>
              <Link to="/codes">
                Codes
              </Link>
            </TuiMenuItem>
            <div className="tui-black-divider"></div>
            <TuiMenuItem>
              <Link to="/chart">
                Chart
              </Link>
            </TuiMenuItem>
            <TuiMenuItem>
              Link
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
        <TuiDropdown dropDownLabel={<div><span className="red-168-text">P</span>ages</div>}>
          <TuiMenuItem>
            <Link to="/bios">
              Bios
            </Link>
          </TuiMenuItem>
          <TuiMenuItem>
            <Link to="/forecast">
              Forecast
            </Link>
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
      { children }
    </TuiScreen>
  );
}

export default Navigation;