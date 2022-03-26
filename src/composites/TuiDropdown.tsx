import React from "react";

function TuiDropdown() {

  // // <!-- Button dropdown -->
  // <li class="tui-dropdown">
  //     <button class="tui-button">Dropdown</button>
  //     <div class="tui-dropdown-content">
  //         <ul>
  //             <li><a href="#!">Option</a></li>
  //         </ul>
  //     </div>
  // </li>
  return (

    // <!-- Navbar dropdown -->
    <nav className="tui-nav">
      <ul>
        <li className="tui-dropdown">
          <span>Menu</span>
          <div className="tui-dropdown-content">
            {/* menu items */}
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default TuiDropdown;