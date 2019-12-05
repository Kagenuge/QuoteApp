import React from 'react';

const Button = ({ handleClick, buttonText, buttonClass, btnid }) => {
  return (
    <div>
      <button className={buttonClass} type="button" onClick={handleClick} id={btnid}>{buttonText}</button>
    </div>
  )
};

export default Button;