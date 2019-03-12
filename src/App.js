import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "./context/context";

import "./css/App.css";

// components
import Home from "./components/homepage/home";
import Navbar from "./components/layout/NavBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Provider>
            <Route path="/" component={Home} exact />
            {/* <Route path="/edit/:id" component={} /> */}
          </Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
