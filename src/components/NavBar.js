import React from 'react';

function NavBar(props) {
  return (
    <React.Fragment>
      <div class="nav-container">
      <a class="nav-navitem" href="">Home</a>
      <a class="nav-navitem" href="">Schedule</a>
      <a class="nav-navitem" href="">Produce</a>
      </div>
      <div id="nav-space">
        <form id="nav-search">
          <input id="nav-input" type="text" placeholder="Search"></input>
        </form>
      </div>
    </React.Fragment>
  )
}
export default NavBar;