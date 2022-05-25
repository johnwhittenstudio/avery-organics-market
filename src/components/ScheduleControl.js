// copied over from Help Queue TicketControl.js in order to potentially toggle view

import React from 'react';
import MarketSchedule from './MarketSchedule.js';
import Schedule from "./Schedule.js";

class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      mainTicketList: newMainTicketList,
      formVisibleOnPage: false 
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      buttonText = "Return to Ticket List"
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} />;
      buttonText = "Add ticket"; 
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