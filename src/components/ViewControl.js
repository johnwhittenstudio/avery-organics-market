// copied over from Help Queue TicketControl.js in order to potentially toggle view

import React from 'react';
import MarketSchedule from './MarketSchedule';
import AvailableProduce from './AvailableProduce';
// import Schedule from './Schedule';
// import Produce from './Produce';

class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produceVisibleOnPage: false,
      // mainTicketList: []
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      produceVisibleOnPage: !prevState.produceVisibleOnPage
    }));
  }

  // handleAddingNewTicketToList = (newTicket) => {
  //   const newMainTicketList = this.state.mainTicketList.concat(newTicket);
  //   this.setState({
  //     mainTicketList: newMainTicketList,
  //     formVisibleOnPage: false 
  //   });
  // }

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
        {currentlyVisibleState}
        <button id="button" onClick={this.handleClick}>{buttonText}</button> 
      </ React.Fragment>
    );
  }

}

export default ViewControl;