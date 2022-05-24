import React from "react";
import pepperImage from "./../img/hot-pepper.png";
import cornImage from "./../img/corn.png";
import onionImage from "./../img/onion.png";
import mushroomImage from "./../img/mushroom.png";
import grapesImage from "./../img/grapes.png";
import potatoImage from "./../img/potato.png";

function Header(){
  return (
    <React.Fragment>
      <h1>Avery's Organics</h1>
      <img id="header-emoji" src={pepperImage} alt="hot pepper" />
      <img id="header-emoji" src={cornImage} alt="corn" />
      <img id="header-emoji" src={onionImage} alt="onion" />
      <img id="header-emoji" src={mushroomImage} alt="mushroom" />
      <img id="header-emoji" src={grapesImage} alt="grapes" />
      <img id="header-emoji" src={potatoImage} alt="potato" />
    </React.Fragment>
  );
}

export default Header;