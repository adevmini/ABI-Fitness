import React from "react";
import "./Input.scss";

/**
 *
 * @param {{placeholder:String,icon,String,type,String}} props
 * @returns {JSX.Element}
 */

function Input({ placeholder, icon, type = "text" }) {
  return (
    <div className="Input__wrapper w-100">
      <img src={icon} alt="InputIcon" />
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
