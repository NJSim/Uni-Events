// frontend/src/components/Navigation/index.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Search from '../Search';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);


  const events = useSelector(state => {
    //only gets the value of the number id - the keys
    return Object.values(state.events)
  })

  const filterEvents = (events, query) => {
    if (!query) {
      return [];
    }

    return events.filter((event) => {
      const eventName = event.nameOfEvent.toLowerCase();
      return eventName.includes(query.toLowerCase());
    });
  };

  const [searchQuery, setSearchQuery] = useState('');
  const filteredEvents = filterEvents(events, searchQuery);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton className="nav-bar" user={sessionUser} />
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
        <Search className='nav-bar search-bar'
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul>
                {filteredEvents.map(event => (
                    <li key={event.id}>{event.nameOfEvent}</li>
                ))}
            </ul>
        <NavLink className="about-nav-bar nav-bar" to="/about-us"> About </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
