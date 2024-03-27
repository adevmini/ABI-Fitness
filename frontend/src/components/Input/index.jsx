import React from "react";
import "./Input.scss";

/**
 *
 * @param {{placeholder:String,icon,String,type,String,wrapperStyles:Object}} props
 * @returns {JSX.Element}
 */

function Input({ placeholder, icon, type = "text", wrapperStyles }) {
  return (
    <div
      className={`Input__wrapper w-100 ${
        type === "checkbox" || type === "radio" ? `checkbox__wrapper` : ``
      }`}
      style={wrapperStyles}
    >
      {icon ? <img src={icon} alt="InputIcon" /> : null}
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
