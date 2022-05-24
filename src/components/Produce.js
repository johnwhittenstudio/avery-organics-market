import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <h3>{props.month}'s produce</h3>
      <ul>
        {props.selection.map(crop => {
          return <li>{crop}</li>
        })}
      </ul>
      <hr/>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
};

export default Produce;