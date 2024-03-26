import React from "react";
import "./Select.scss";
/**
 *
 * @param {{label:String, options:Array, htmlFor:String}} props
 * @returns {JSX.Element}
 */
function Select({ label, options, htmlFor }) {
  return (
    <div className="Select__wrapper">
      {label ? <label htmlFor={htmlFor}>{label}</label> : null}

      <select id={htmlFor}>
        {options?.map((option, index) => (
          <option key={option} selected={index === 0}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
