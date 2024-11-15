import type { FC } from "react";
import TuiTabs from "../composites/TuiTabs";

const Bios: FC = () => {
  return (
    <div className="tui-screen-800-600 bordered white-168">
      <div className="tui-panel cyan-168 full-width black-255-text tui-no-shadow center">
          BIOS
      </div>
      <TuiTabs tabs={[
        {
          tabTitle: "Main",
          tab: (
            <table className="tui-table-grid">
              <tbody>
                <tr>
                  <td rowSpan={2} width="60%" className="blue-168-text">
                    <br />System Time.........:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[09:21:30]" />
                    <br />System Date.........:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[15/09/1994]" />
                    <br />
                    <br />Legacy Diskette A...:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[1.44/1.25 MB]" />
                    <br />Legacy Diskette B...:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[disabled]" />
                    <br />
                    <br />Primary Master......:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[None]" />
                    <br />Primary Slave.......:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[None]" />
                    <br />Secondary Master....:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[CD-ROM]" />
                    <br />Secondary Slave.....:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[None]" />
                    <br />
                    <br />Keyboard Features...:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[Enter]" />
                    <br />
                    <br />System Memory.......:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[640 KB]" />
                    <br />Extended Memory.....:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[3568410 KB]" />
                    <br />Boot-time Diagnostic:<input type="text" className="tui-input white-168 black-text input-width" readOnly={true} value="[Enabled]" />
                  </td>
                  <td width="40%" className="center">Item Specified Help</td>
                </tr>
                <tr>
                  <td width="25" height="448px">
                    <br />&#60;Tab&#62;, &#60;Shift-Tab&#62; or &#60;Enter&#62; selects field.
                  </td>
                </tr>
              </tbody>
          </table>
          )
        },
        {
          tabTitle: "Exit",
          tab: (<div>
            child
          </div>)
        }
      ]
      }/>
      
      <div className="tui-statusbar absolute cyan-168">
        <ul>
          <li><a href="#!"><span className="white-255-text">F1</span> Help</a></li>
          <li><a href="#!"><span className="white-255-text">↑↓</span> Select Item</a></li>
          <li><a href="#!"><span className="white-255-text">-/+</span> Change Values</a></li>
          <li><a href="#!"><span className="white-255-text">F9</span> Setup Defaults</a></li>
          <br />
          <li><a href="#!"><span className="white-255-text">Esc</span> Exit</a></li>
          <li><a href="#!"><span className="white-255-text">←→</span> Select Menu</a></li>
          <li><a href="#!"><span className="white-255-text">Enter</span> Select Sub-Menu</a></li>
          <li><a href="#!"><span className="white-255-text">F10</span> Save and Exit</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Bios;
