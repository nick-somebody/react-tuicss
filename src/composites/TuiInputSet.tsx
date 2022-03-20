import React from "react";
import TuiFieldset from "../components/TuiFieldset";
import TuiLegend from "../components/TuiLegend";
import "./TuiInputSet.css"

type TuiInputSetProps = {
  heading: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

function TuiInputSet(props: TuiInputSetProps) {

  return (
    <TuiFieldset>
      <TuiLegend>
        { props.heading }
      </TuiLegend>
      { props.description &&
        <div className="tui-inputset-description">
          { props.description }
        </div>
      }
      { props.children }

    </TuiFieldset>
  )
}

export default TuiInputSet;