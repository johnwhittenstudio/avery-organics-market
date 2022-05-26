import React from "react";
import PropTypes from "prop-types";

function Schedule(props){
  return (
    <React.Fragment>
      <h5>On {props.day}s we'll be located at {props.location}</h5>
        <p><em>From {props.hours}</em></p>
        <p><em>At booth {props.booth}</em></p>
      {/* <hr/> */}
    </React.Fragment>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default Schedule;