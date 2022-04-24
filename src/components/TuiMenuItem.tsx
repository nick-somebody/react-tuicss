import type { FC, MouseEventHandler, ReactNode } from "react";

interface TuiMenuItemProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

const TuiMenuItem: FC<TuiMenuItemProps> = ({ children, onClick, href }: TuiMenuItemProps) => {

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