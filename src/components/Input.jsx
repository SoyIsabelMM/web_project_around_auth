import React from "react";

function Input({
  type,
  className,
  placeholder,
  maxLength,
  onChange,
  children,
  id,
}) {
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        id={id}
        minLength="2"
        maxLength={maxLength}
        required
        onChange={onChange}
      />
      {children}
    </>
  );
}

export default Input;
