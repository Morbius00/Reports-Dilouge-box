import React from 'react';

const Button = ({ onClick, disabled, children, className }) => {
  return (
    <div className='font-bold py-2 px-1  w-auto rounded'>
    <button onClick={onClick} disabled={disabled} className={className}  >
      {children}
    </button>
    </div>
  );
};

export default Button;
