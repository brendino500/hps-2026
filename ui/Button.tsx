'use client';

import Link from "next/link";

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  href?: string; // 👈 new
}

const Button = ({ text, type, onClick, className = '', href }: ButtonProps) => {
  const baseClasses =
    "bg-primary-500 text-secondary-500 font-primary uppercase px-6 py-3 rounded-full hover:bg-primary-600/60 transition-colors min-w-[150px] duration-200 ease-in-out cursor-pointer";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
