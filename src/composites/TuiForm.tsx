import React from "react";
import TuiFieldset from "../components/TuiFieldset";
import TuiLegend from "../components/TuiLegend";

type TuiFormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  heading?: React.ReactNode;
  description?: React.ReactNode;
}

function TuiForm({ heading, description, children, ...props }: TuiFormProps) {

  if (!heading) {
    return (
      <form {...props}>
        { children }
      </form>
    )
  }

  return (
    <form {...props}>
      <TuiFieldset>
        <TuiLegend>
          { heading }
        </TuiLegend>
        { description &&
          <div className="tui-inputset-description">
            { description }
          </div>
        }
        { children }
      </TuiFieldset>
    </form>
  )
}

export default TuiForm;