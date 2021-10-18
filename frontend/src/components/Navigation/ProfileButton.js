// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div class='dropdown'>
      <button className='profile-button' onClick={openMenu}>
        <i className="fas fa-user-cog" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <div className="title">-User Information-</div>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.aboutDescription}</div>
          <div>{user.universityName}</div>
          <div>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
