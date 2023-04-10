import React from "react";

export const Text = (props) => {
  return <p {...props}>{props.children}</p>;
};
