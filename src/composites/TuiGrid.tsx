import { FC, ReactNode, useMemo } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div role="presentation" className="container">
      { children }
    </div>
  )
}
const Row: FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div role="presentation" className="row">
      { children }
    </div>
  )
}

interface ColProp {
  offset?: number;
  width?: number
}

interface ColProps {
  children: ReactNode;
  s?: ColProp;
  m?: ColProp;
  l?: ColProp;
}

const Col: FC<ColProps> = ({ children, ...sizes }: ColProps) => {

  const classNames = useMemo((): string => {
    const classes = ["col"];
    for (const key in sizes) {
      if (Object.prototype.hasOwnProperty.call(sizes, key)) {
        const size = sizes[key as "s" | "m" | "l"];
        if (size?.offset) { classes.push(`offset-${key}${size.offset}`)}
        if (size?.width) { classes.push(`${key}${size.width}`)}
      }
    }
    return classes.join(" ");
  }, [sizes])

  return (
    <div role="presentation" className={ classNames }>
      { children }
    </div>
  )
}

export default {
  Container,
  Row,
  Col,
}