import React, { useState } from "react";

export const Input = ({
  variant = "",
  placeholder = "",
  size = "",
  readOnly = false,
  status = "",
  helpText = ""
}) => {
  return (
    <div>
      <div className={`form-group custom`}>
        <div className={`${status}`}>
          <label className={`label `}>Label</label>
          <input
            type={`${variant}`}
            className={`form-control form-control-${size} ${status}`}
            placeholder={`${placeholder}`}
            readOnly={readOnly}
          />
          <small className="textHelp">{`${helpText}`}</small>
        </div>
      </div>
    </div>
  );
};
