import React from 'react';
import "./submitbtn.css";

const Submitbtn = ({ style, txt, icon, type = "button", onClick }) => {
  return (
    <button type={type} className={style} onClick={onClick}>
      {txt}
      {icon && <img src={icon} alt="" />}
    </button>
  );
};

export default Submitbtn;