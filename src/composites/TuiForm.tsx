import type { FC, FormHTMLAttributes, ReactNode } from "react";
import TuiFieldset from "../components/TuiFieldset";
import TuiLegend from "../components/TuiLegend";

interface TuiFormProps extends FormHTMLAttributes<HTMLFormElement> {
  heading?: ReactNode;
  description?: ReactNode;
}

const TuiForm: FC<TuiFormProps> = ({
  heading,
  description,
  children,
  ...props
}: TuiFormProps) => {

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