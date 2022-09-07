import React from "react";

function Right(props) {

  let message = props.data === true
    ? "Congratulations, all cells are blocked."
    : "In this variation, place 5 queens on the standard chess board such that all cells are under attack by at least one queen.";

  return (
    <div>
       <div className="bottomBox">
          <div className="winningBox">
            {message}
          </div>
       </div>
    </div>
  );
}

export default Right;
