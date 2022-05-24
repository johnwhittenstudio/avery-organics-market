import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import AvailableProduce from "./AvailableProduce";
import MarketSchedule from "./MarketSchedule";

function App(){
  return (
    <React.Fragment>
      <NavBar />
      <Header />
      <MarketSchedule />
      <AvailableProduce />
    </React.Fragment>
  )
}

export default App;