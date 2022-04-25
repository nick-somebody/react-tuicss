import { render, screen, fireEvent } from '@testing-library/react'
import TuiTabs from './TuiTabs'

describe("TuiTabs", () => {
  const testid = "asnKNJAKJSDIUiuw2183"
  const tabsData = [
    { tab: <div>1</div>, tabTitle: "Tab 1" },
    { tab: <div>2</div>, tabTitle: "Tab 2" },
  ]
  test("renders", () => {
    render(<TuiTabs data-testid={ testid } tabs={ tabsData } />)
    const tabs = screen.getByTestId(testid);
    expect(tabs).toBeDefined();
  })
  test("renders tabs", () => {
    render(<TuiTabs data-testid={ testid } tabs={ tabsData } />)
    const tabs = screen.getByRole("tablist");
    expect(tabs.childNodes).toHaveLength(tabsData.length)
  })
  test("renders tab controls", () => {
    render(<TuiTabs data-testid={ testid } tabs={ tabsData } />)
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(tabsData.length)
  })

  test("renders only visible tab", () => {
    render(<TuiTabs data-testid={ testid } tabs={ tabsData } />)
    const tabs = screen.getByRole("tablist");
    
    const tabPanel = screen.getAllByRole("tabpanel")
    expect(tabPanel).toHaveLength(1)
    expect(tabPanel[0].id.endsWith('0')).toBeTruthy()
  })

  test("click tab control", () => {
    const targetIdx = 1;
    render(<TuiTabs data-testid={ testid } tabs={ tabsData } />)
    const tabs = screen.getAllByRole<HTMLButtonElement>("tab");

    const clickResult = fireEvent.click(tabs[targetIdx])
    expect(clickResult).toBeTruthy()

    const tabPanel = screen.getByRole("tabpanel")
    expect(tabPanel.id.endsWith(`${targetIdx}`)).toBeTruthy()
  })
})