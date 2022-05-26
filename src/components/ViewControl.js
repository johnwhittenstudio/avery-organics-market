// copied over from Help Queue TicketControl.js in order to potentially toggle view

import React from 'react';
import MarketSchedule from './MarketSchedule';
import AvailableProduce from './AvailableProduce';

import pepperImage from "./../img/hot-pepper.png";
import cornImage from "./../img/corn.png";
import onionImage from "./../img/onion.png";
import mushroomImage from "./../img/mushroom.png";
import grapesImage from "./../img/grapes.png";
import potatoImage from "./../img/potato.png";
import appleImage from "./../img/apple.png";
import broccoliImage from "./../img/broccoli.png";
import cucumberImage from "./../img/cucumber.png";
import carrotImage from "./../img/carrot.png";
import garlicImage from "./../img/garlic.png";
import leafyGreenImage from "./../img/leafy-green.png";
import strawberryImage from "./../img/strawberry.png";
import tomatoImage from "./../img/tomato.png";
import watermelonImage from "./../img/watermelon.png";


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
      buttonText = "View Weekly Schedule"
    } else {
      currentlyVisibleState = <MarketSchedule />;
      buttonText = "View Produce"; 
    }
    return (
      <React.Fragment>
        <div class="view-control-container">
          <div class="row">
            <center>
              <img id="header-emoji" src={pepperImage} alt="hot pepper" />
              <img id="header-emoji" src={appleImage} alt="apple" />
              <img id="header-emoji" src={broccoliImage} alt="broccoli" />
              <img id="header-emoji" src={cornImage} alt="corn" />
              <img id="header-emoji" src={watermelonImage} alt="watermelon" />
              <img id="header-emoji" src={tomatoImage} alt="tomato" />
              <img id="header-emoji" src={onionImage} alt="onion" />
              <img id="header-emoji" src={carrotImage} alt="carrot" />
              <img id="header-emoji" src={mushroomImage} alt="mushroom" />
              <img id="header-emoji" src={cucumberImage} alt="cucumber" />
              <img id="header-emoji" src={strawberryImage} alt="strawberry" />
              <img id="header-emoji" src={garlicImage} alt="garlic" />
              <img id="header-emoji" src={grapesImage} alt="grapes" />
              <img id="header-emoji" src={potatoImage} alt="potato" />
              <img id="header-emoji" src={leafyGreenImage} alt="leafy greens" />
            </center>
          </div>
          <hr id="hr" />
          <button type="button" id="button" class="btn btn-primary" onClick={this.handleClick}>{buttonText}</button> 
        </div>
        {currentlyVisibleState}
      </ React.Fragment>
    );
  }
}

export default ViewControl;