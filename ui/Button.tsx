'use client';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

const Button = ({ text, type, onClick, className = '' }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary-500 text-secondary-500 font-primary uppercase px-6 py-3 rounded-full hover:bg-primary-600/60 transition-colors min-w-[150px] duration-200 ease-in-out cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
