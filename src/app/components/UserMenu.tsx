import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

const UserMenu = ({ isOpen, closeMenu }) => {
  const menuRef = useRef(null);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <div
      ref={menuRef}
      className={`fixed right-0 top-0 h-full w-64 bg-white shadow-md transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ zIndex: 999 }}
    >
      <div className="p-4">
        <h3 className="font-bold">User Menu</h3>
        <ul className="space-y-2">
          <li>Your Profile</li>
          <li>Settings</li>
          <li>App Info</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
