'use client';

import React from "react";

interface FloatingInputProps {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  id,
  label,
  placeholder,
  required = false,
  type = "text",
  as = "input",
  rows = 5,
}) => {
  const baseClasses =
    "peer placeholder-transparent placeholder:font-secondary font-secondary border font-secondary border-primary-500/40 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary-500";

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea
          id={id}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={baseClasses}
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}
      <label
        htmlFor={id}
        className="absolute left-3 top-0 text-xs text-primary-500 transition-all
                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                   peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-500 font-secondary"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
