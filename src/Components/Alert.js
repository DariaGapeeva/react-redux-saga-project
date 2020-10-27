import React from "react";

const Alert = ({ alertMessage }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {alertMessage}
    </div>
  );
};

export default Alert;
