import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';
 
const Navigation = ( {logout, name} ) => {
  return (
    <LocaleConsumer>
      {
        ({ locale, toggleLocale}) => {
          return (
            <nav className="navigation">
              <ul>
                <li><button onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button></li>
                <li><Link to="/"><FaHome /></Link></li>
                <li><Link to="/add"><FaPlusCircle /></Link></li>
                <li><button onClick={logout}>{name} <FaSignOutAlt /></button></li>
              </ul>
            </nav>
          )
        }
      }
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
 
export default Navigation;