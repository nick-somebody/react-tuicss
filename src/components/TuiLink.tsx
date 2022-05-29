import { AnchorHTMLAttributes, FC, useMemo } from "react";
import "./TuiLink.css"

interface TuiLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const TuiLink = ({ className, children, ...props}: TuiLinkProps) => {

  const classNames = useMemo(() => {
    const classes: string[] = ["tui-link"];
    if (className) { classes.push(...className.split(" ")); }
    return classes.join(" ");
  }, [className]);

  return (
    <a className={classNames} { ...props }>{children}</a>
  )
}

export default TuiLink;