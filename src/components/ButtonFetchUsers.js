import React from "react";
import "./../styles/ButtonFetchUsers.css";

const ButtonFetchUsers = (props) => {
  return (
    <button className="btn" onClick={props.handleFetch}>
      Odśwież
    </button>
  );
};

export default ButtonFetchUsers;
