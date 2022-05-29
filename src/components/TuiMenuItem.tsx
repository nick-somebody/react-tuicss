import { DataHTMLAttributes, FC, MouseEventHandler, ReactNode, useCallback, useEffect, useMemo } from "react";

type Chords = Pick<KeyboardEvent, "altKey" | "shiftKey" | "metaKey" | "ctrlKey">
type LIAttributes = Omit<DataHTMLAttributes<HTMLLIElement>, "onClick">
interface TuiMenuItemProps extends LIAttributes, Partial<Chords> {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  action?: () => void;
  href?: string;
  keyPress?: string;
  prevent?: boolean;
  stop?: boolean;
}

const TuiMenuItem: FC<TuiMenuItemProps> = ({
  children,
  onClick,
  action,
  prevent,
  stop,
  href,
  altKey,
  ctrlKey,
  metaKey,
  shiftKey,
  keyPress,
  ...props
}: TuiMenuItemProps) => {

  const hasClicker = useMemo(() => !!onClick, [onClick]);
  const hasLink = useMemo(() => !!href, [href]);
  const noClickerOrLink = useMemo(() => !hasClicker && !hasLink, [hasClicker, hasLink]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (keyPress?.toLowerCase() !== event.key?.toLowerCase()) { return; }
      if (!altKey !== !event.altKey) { return; }
      if (!ctrlKey !== !event.ctrlKey) { return; }
      if (!metaKey !== !event.metaKey) { return; }
      if (!shiftKey !== !event.shiftKey) { return; }
      if (prevent) { event.preventDefault(); }
      if (stop) { event.stopPropagation(); }
      action?.()
    }
    if (!keyPress || !action) { return; }  // don't register a listener for nothing
    window.addEventListener("keydown", listener, false)
    return () => window.removeEventListener("keydown", listener)
  }, [
    altKey,
    ctrlKey,
    metaKey,
    shiftKey,
    keyPress,
  ])

  return (
    <li {...props}>
      { hasClicker && <button onClick={ onClick }>{ children }</button>}
      { hasLink && <a href={href}>{ children }</a>}
      { noClickerOrLink && <>{ children }</>}
    </li>
  )
}

export default TuiMenuItem;