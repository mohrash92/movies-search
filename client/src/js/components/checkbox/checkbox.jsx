import React from "react";
import './checkbox.css';
import PropTypes from "prop-types";

const CheckBox = ({ mediaType, isChecked, onChange }) => (
  <label className='checkbox' htmlFor={mediaType}>{mediaType}
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      name={mediaType}
    />
  </label>

);

CheckBox.propTypes = {
  mediaType: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckBox;
