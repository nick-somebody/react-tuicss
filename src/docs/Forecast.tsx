import type { FC } from "react";
import TuiProgressBar from "../components/TuiProgressBar";
import { Color, DarkBackground, MildColor } from "../types/enums";

const Forecast: FC = () => {
  return (
    <div className="tui-screen-800-600 bordered black-255">
      <div className="red-168 full-width white-text" style={ { padding: "0px 10px" }}>
            FORECAST 1.0
        </div>
        <br />
        <table className="tui-table full-width no-border">
            <thead className="white-255-text tui-border-double orange-168-border" style={ { marginBottom: "5px"} } >
                <tr className="left-align">
                    <th>#</th>
                    <th>LOCATION</th>
                    <th>TEMPERATURE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody className="tui-border-double orange-168-border">
                <tr>
                  <td className="red-168-text">1</td>
                  <td>Lisbon</td>
                  <td>
                    <span className="green-168-text">&nbsp;8.0</span>
                    <TuiProgressBar.Red
                      barWidth="350px"
                      progress={58}
                    />
                  </td>
                  <td className="blue-255-text">COLD</td>
                </tr>
                <tr>
                    <td className="red-168-text">2</td>
                    <td>Vancouver</td>
                    <td>
                        <span className="green-168-text">&nbsp;9.0</span> 
                        <TuiProgressBar.Green
                          barWidth="350px"
                          progress={60}
                        />
                    </td>
                    <td className="blue-255-text">COLD</td>
                </tr>
                <tr>
                    <td className="red-168-text">3</td>
                    <td>Rio</td>
                    <td>
                        <span className="green-168-text">31.0</span> 
                        <TuiProgressBar.Blue
                          barWidth="350px"
                          progress={81}
                        />
                    </td>
                    <td className="yellow-255-text">WARM</td>
                </tr>
                <tr>
                    <td className="red-168-text">4</td>
                    <td>Sydney</td>
                    <td>
                        <span className="green-168-text">22.0</span> 
                        <TuiProgressBar.Cyan
                          barWidth="350px"
                          progress={72}
                        />
                    </td>
                    <td className="yellow-255-text">WARM</td>
                </tr>
                <tr>
                    <td className="red-168-text">5</td>
                    <td>New York</td>
                    <td>
                        <span className="green-168-text">&nbsp;7.0</span> 
                        <TuiProgressBar.Purple
                          barWidth="350px"
                          progress={57}
                        />
                    </td>
                    <td className="blue-255-text">COLD</td>
                </tr>
                <tr>
                    <td className="red-168-text">6</td>
                    <td>London</td>
                    <td>
                        <span className="green-168-text">&nbsp;6.0</span>
                        <TuiProgressBar.Yellow
                          barWidth="350px"
                          progress={56}
                        />
                    </td>
                    <td className="blue-255-text">COLD</td>
                </tr>
                <tr>
                    <td className="red-168-text">7</td>
                    <td>Paris</td>
                    <td>
                        <span className="green-168-text">&nbsp;4.0</span>
                        <TuiProgressBar.Orange
                          barWidth="350px"
                          progress={54}
                        />
                    </td>
                    <td className="cyan-255-text">VERY COLD</td>
                </tr>
                <tr>
                    <td className="red-168-text">8</td>
                    <td>Casablanca</td>
                    <td>
                        <span className="green-168-text">17.0</span> 
                        <TuiProgressBar.Custom
                          barWidth="350px"
                          progress={67}
                          backColor={ DarkBackground.Red }
                          barColor={ Color.Green }
                        />
                    </td>
                    <td className="green-168-text">NORMAL</td>
                </tr>
                <tr>
                    <td className="red-168-text">9</td>
                    <td>Reykjavik</td>
                    <td>
                        <span className="green-168-text">-1.0</span> 
                        <TuiProgressBar.Custom
                          barWidth="350px"
                          progress={10}
                          backColor={ DarkBackground.Green }
                          barColor={ Color.Purple }
                        />
                    </td>
                    <td className="cyan-255-text">VERY COLD</td>
                </tr>
            </tbody>
        </table>
        <div className="purple-168 full-width white-text" style={ { padding: "0px 10px",  marginTop: "2px" } }>
            <span className="red-168">HIGH</span>: Rio 31.0<br />
            <span className="cyan-168">LESS</span>: Reykjavik -1.0
        </div>
        <br />
        <div className="tui-window full-width no-shadow black">
            <fieldset className="tui-fieldset center">
                <button className="tui-button left">Previous</button>
                <span className="center">9/201 records</span>
                <button className="tui-button right">Next</button>
            </fieldset>
        </div>
        <div className="red-168 full-width white-text" style={ { padding: "0px 10px" } }>
            FORECAST 1.0
        </div>
    </div>
  )
}

export default Forecast;