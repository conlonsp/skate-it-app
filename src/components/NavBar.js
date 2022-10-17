import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "darkslategray",
  textDecoration: "none",
  color: "white",
};

function NavBar() {

  return (
    <div className='navbar' style={{textAlign: 'center'}}>
      <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'slategray',
        }}
      >
        Home
      </NavLink>
      <span>|</span>
      <NavLink
        to='/about'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'slategray',
        }}
      >
        About
      </NavLink>
      <span>|</span>
      <NavLink
        to='/search'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'slategray',
        }}
      >
        Search
      </NavLink>
      <span>|</span>
      <NavLink
        to='/add'
        exact
        style={linkStyles}
        activeStyle={{
          background: 'slategray',
        }}
      >
        Add
      </NavLink>
    </div>
  )
}

export default NavBar