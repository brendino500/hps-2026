'use client';

import { Icon } from 'react-feather';

interface IconButtonProps {
  icon: Icon;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  ariaLabel: string;
}

const IconButton = ({
  icon: IconComp,
  type = 'button',
  onClick,
  className = '',
  ariaLabel,
}: IconButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`bg-primary-500 text-secondary-500 font-primary uppercase 
        p-3 rounded-full hover:bg-primary-600/60 transition-colors 
        duration-200 ease-in-out ${className}`}
    >
      <IconComp size={18} />
    </button>
  );
};

export default IconButton;
