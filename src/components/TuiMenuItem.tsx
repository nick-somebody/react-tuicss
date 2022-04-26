import { FC, MouseEventHandler, ReactNode, useMemo } from "react";

interface TuiMenuItemProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

const TuiMenuItem: FC<TuiMenuItemProps> = ({ children, onClick, href }: TuiMenuItemProps) => {

  const hasClicker = useMemo(() => !!onClick, [onClick]);
  const hasLink = useMemo(() => !!href, [href]);
  const noClickerOrLink = useMemo(() => !hasClicker && !hasLink, [hasClicker, hasLink]);

  return (
    <li>
      { hasClicker && <button onClick={ onClick }>{ children }</button>}
      { hasLink && <a href={href}>{ children }</a>}
      { noClickerOrLink && <div>{ children }</div>}
    </li>
  )
}

export default TuiMenuItem;