// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Search from '../Search';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="nav-bar" to="/login">Log In</NavLink>
        <NavLink className="nav-bar" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li className="nav-bar-container">
        <NavLink className="nav-bar logo" exact to="/">Uni-Events</NavLink>
        <Search />
        <NavLink className="about-nav-bar nav-bar" to="/about-us"> About </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
