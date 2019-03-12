import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Provider>
            <Navbar />
            <Route path="/" component={Home} exact />
            {/* <Route path="/edit/:id" component={} /> */}
          </Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
