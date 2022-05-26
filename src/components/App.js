import React from "react";
// import NavBar from "./NavBar";
import Header from "./Header";
import ViewControl from "./ViewControl";
// import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <ViewControl />
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  )
}

export default App;