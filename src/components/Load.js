import React from "react";

function Load(props) {
  return <div id={props.load ? "loader-true" : "loader-none"}></div>;
}

export default Load;