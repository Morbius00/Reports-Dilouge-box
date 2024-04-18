import React from 'react';

const Button = ({ onClick, disabled, children, className }) => {
  return (
    <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  w-96 rounded'>
    <button onClick={onClick} disabled={disabled} className={className}  >
      {children}
    </button>
    </div>
  );
};

export default Button;
