import React from "react";

function Input(props) {
  return (
    <>
      <input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        id={props.id}
        minLength="2"
        maxLength={props.maxLength}
        required
      />
      {props.children}
    </>
  );
}

export default Input;
