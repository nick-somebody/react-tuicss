import React from "react";

type ContainerProps = {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="container">
      { children }
    </div>
  )
}
function Row({ children }: ContainerProps) {
  return (
    <div className="row">
      { children }
    </div>
  )
}

type ColProp = {
  offset?: number;
  width?: number
}

type ColProps = {
  children: React.ReactNode;
  s?: ColProp;
  m?: ColProp;
  l?: ColProp;
}

function Col({ children, ...sizes }: ColProps) {

  const classMaker = (): string => {
    const classes = ["col"];
    for (const key in sizes) {
      if (Object.prototype.hasOwnProperty.call(sizes, key)) {
        const size = sizes[key as "s" | "m" | "l"];
        if (size?.offset) { classes.push(`offset-${key}${size.offset}`)}
        if (size?.width) { classes.push(`${key}${size.width}`)}
      }
    }
    return classes.join(" ");
  }

  return (
    <div className={ classMaker() }>
      { children }
    </div>
  )
}

export default {
  Container,
  Row,
  Col,
}