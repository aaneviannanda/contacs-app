import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlusCircle } from 'react-icons/fa';
 
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/"><FaHome /></Link></li>
        <li><Link to="/add"><FaPlusCircle /></Link></li>
      </ul>
    </nav>
  );
}
 
export default Navigation;