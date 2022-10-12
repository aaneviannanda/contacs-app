import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
 
function DeleteButton({ id, onDelete }) {
  return <button className='contact-item__delete' onClick={() => onDelete(id)}><FaTrash /></button>
}
 
DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}
 
export default DeleteButton;