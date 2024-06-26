import React from 'react';

const Button = ({ onClick, disabled, children, className }) => {
  return (
    <div>
    <button onClick={onClick} disabled={disabled} className={className}  >
      {children}
    </button>
    </div>
  );
};

export default Button;
