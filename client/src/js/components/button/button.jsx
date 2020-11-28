import React from 'react';

const Button = ({ handleOnSubmit }) => (
  <button onClick={(e) => handleOnSubmit(e)}>Search</button>
);

export default Button;
