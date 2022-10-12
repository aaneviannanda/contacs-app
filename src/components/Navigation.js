import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
 
const Navigation = ( {logout, name} ) => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/"><FaHome /></Link></li>
        <li><Link to="/add"><FaPlusCircle /></Link></li>
        <li><button onClick={logout}>{name} <FaSignOutAlt /></button></li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
 
export default Navigation;