
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'px-8 py-3 font-bold rounded-lg shadow-lg transform transition-transform duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-75';
  const variantClasses = {
    primary: 'bg-sky-500 hover:bg-sky-600 text-white active:scale-95 focus:ring-sky-300',
    secondary: 'bg-amber-600 hover:bg-amber-700 text-white active:scale-95 focus:ring-amber-400',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
