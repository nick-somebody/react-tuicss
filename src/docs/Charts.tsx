import React from "react";
import TuiChart from "../components/TuiChart";


function Charts() {
  return (
    <div className="center">
      <div style={ { marginTop: "50px" } }></div>

      <div className="tui-window black-168 left-align">
        <fieldset className="tui-fieldset" role="" aria-roledescription="">
          <legend className="">Vertical Chart</legend>
          <TuiChart.Vertical
            size={ { width: "500px", height: "300px" } }
            values={[
              {value: 80, label: "s1" },
              {value: 30, label: "s2" },
              {value: 50, label: "s3" },
              {value: 90, label: "s4" },
              {value: 60, label: "s5" },
              {value: 100, label: "s6" },
              {value: 10, label: "s7" },
              {value: 75, label: "s8" },
            ]}
            labels={[
              "100%",
              "80%",
              "60%",
              "40%",
              "20%",
            ]}
          />
            
        </fieldset>
      </div>
      <br /><br />

      <div className="tui-window black-168 left-align">
          <fieldset className="tui-fieldset">
              <legend className="">Horizontal Chart</legend>
              <TuiChart.Horizontal
                size={ { width: "500px", height: "200px" } }
                values={[
                  {value: 80, label: "2018" },
                  {value: 60, label: "2019" },
                  {value: 100, label: "2020" },
                ]}
                labels={[
                  "25%",
                  "50%",
                  "75%",
                  "100%",
                ]}
              />
              
          </fieldset>
      </div>
      <br /><br />

      <div className="tui-window black-168 left-align">
          <fieldset className="tui-fieldset">
              <legend className="">Chart (no axis legend)</legend>
              <TuiChart.Vertical
                size={ { width: "500px", height: "300px" } }
                values={[
                  {value: 80, label: "s1" },
                  {value: 30, label: "s2" },
                  {value: 50, label: "s3" },
                  {value: 90, label: "s4" },
                  {value: 60, label: "s5" },
                  {value: 100, label: "s6" },
                  {value: 10, label: "s7" },
                  {value: 75, label: "s8" },
                ]}
                valueFormatter={(value) => `$${value}` }
              />
              <TuiChart.Horizontal
                size={ { width: "500px", height: "300px" } }
                values={[
                  {value: 80, label: "s1" },
                  {value: 30, label: "s2" },
                  {value: 50, label: "s3" },
                  {value: 90, label: "s4" },
                  {value: 60, label: "s5" },
                  {value: 100, label: "s6" },
                  {value: 10, label: "s7" },
                  {value: 75, label: "s8" },
                ]}
                valueFormatter={(value) => `$${value}` }
                valueScaler={(value) => `${value / 2}%` }
              />
          </fieldset>
      </div>
      <br /><br />
    </div>
  )
}
export default Charts;