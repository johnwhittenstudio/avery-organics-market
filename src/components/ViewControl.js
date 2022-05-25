// copied over from Help Queue TicketControl.js in order to potentially toggle view

import React from 'react';
import MarketSchedule from './MarketSchedule';
import AvailableProduce from './AvailableProduce';


class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produceVisibleOnPage: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      produceVisibleOnPage: !prevState.produceVisibleOnPage
    }));
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.produceVisibleOnPage) {
      currentlyVisibleState = <AvailableProduce />
      buttonText = "Return to Market Schedule"
    } else {
      currentlyVisibleState = <MarketSchedule />;
      buttonText = "View Produce"; 
    }
    return (
      <React.Fragment>
        <button id="button" onClick={this.handleClick}>{buttonText}</button> 
        {currentlyVisibleState}
      </ React.Fragment>
    );
  }

}

export default ViewControl;