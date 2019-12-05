import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/main" activeClassName="active">Main</NavLink>
      <br />
      <NavLink to="/quotes" activeClassName="active">Quotes</NavLink>
      <br />
      <NavLink to="/add" activeClassName="active">Add Quote</NavLink>
      <p></p>
    </div>
  )
};

export default Navigation;