import React from "react";
import "./style.css";

export const Label = ({ text = "b" }: { text?: string }): JSX.Element => {
  return (
    <div className="label">
      <div className="text-wrapper">{text}</div>
    </div>
  );
};