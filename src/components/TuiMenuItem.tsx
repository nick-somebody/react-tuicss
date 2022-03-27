import React from "react";

type TuiMenuItemProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

function TuiMenuItem({ children, onClick, href }: TuiMenuItemProps) {

  const hasClicker = !!onClick;
  const hasLink = !!href;
  const noClickerOrLink = !hasClicker && !hasLink;

  return (
    <li>
      { hasClicker && <button onClick={ onClick }>{ children }</button>}
      { hasLink && <a href={href}>{ children }</a>}
      { noClickerOrLink && <div>{ children }</div>}
    </li>
  )
}

export default TuiMenuItem;