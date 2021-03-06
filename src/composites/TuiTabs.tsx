import { DataHTMLAttributes, FC, useCallback, useEffect, useState } from 'react';
import { getId } from '../helpers';
import "./TuiTabs.css";

export interface Tab {
  tab: JSX.Element;
  tabTitle: string
}
export interface TabsProps extends DataHTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
}

const TuiTabs: FC<TabsProps> = ({ tabs, ...props }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [id, setId] = useState<number>();

  useEffect(() => {
    setId(getId());
  }, []);

  const tabDOMId = useCallback((idx: number) => `tab-${id}-control-${idx}`, [id]);
  const tabPaneDOMId = useCallback((idx: number) => `tab-${id}-panel-${idx}`, [id]);

  const isActive = useCallback((tabIdx: number) => tabIdx === activeTab, [activeTab]);

  const getClassName = useCallback((tabIdx: number) => {
    const classes = ["tui-tab"]
    if (isActive(tabIdx)) {
      classes.push("active");
    }
    return classes.join(" ");
  }, [isActive])

  const focusTab = useCallback((idx: number) => {
    document.getElementById(`tab-${id}-control-${idx}`)?.focus();
  }, [id])

  const keyListener = useCallback((e: React.KeyboardEvent<HTMLUListElement>) => {
    let newIdx: number = activeTab;
    if (e.code === "ArrowRight") {
      const nextTab = activeTab + 1
      newIdx = nextTab === tabs.length ? 0 : nextTab;
    } else if (e.code === "ArrowLeft") {
      const prevTab = activeTab - 1
      newIdx = prevTab < 0 ? tabs.length - 1 : prevTab;
    }
    setActiveTab(newIdx);
    focusTab(newIdx);
  }, [activeTab, setActiveTab, focusTab])

  return (
    <div { ...props }>
      <div className="tui-tabs">
        <ul role="tablist" onKeyDown={keyListener}>
          {
            tabs.map(({ tabTitle }, idx) => (
              <li key={`tab-head-${idx}`}>
                <button
                  role="tab"
                  className={ getClassName(idx) }
                  id={ tabDOMId(idx) }
                  aria-controls={ tabPaneDOMId(idx) }
                  onClick={ () => { setActiveTab(idx) } }
                  aria-selected={ isActive(idx) }
                  tabIndex={ isActive(idx) ? 0 : -1 }
                >{ tabTitle }</button>
              </li>
            ))
          }
        </ul>
      </div>
      {
        tabs.map(({ tab }, idx) => (
          <div
            key={`tab-pane-${idx}`}
            role="tabpanel"
            id={ tabPaneDOMId(idx) }
            className="tui-tab-content tui-content"
            style={ { display: isActive(idx) ? "block" : "none" } }
            aria-labelledby={ tabDOMId(idx) }
            tabIndex={ 0 }
            hidden={ !isActive(idx) }
          >
            { tab }
          </div>
        ))
      }
    </div>
  )
}

export default TuiTabs;