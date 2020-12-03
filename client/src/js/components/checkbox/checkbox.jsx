import React from "react";

const CheckBox = ({ mediaType, isChecked, onChange }) => (
  <label>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      name={mediaType}
    />
    {mediaType}
  </label>
);

export default CheckBox;
