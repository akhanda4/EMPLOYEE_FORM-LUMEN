import React, { PureComponent } from "react";
// import "./App.css";
import Auxiliary from "./components/hoc/Auxiliary/Auxiliary";
import Layout from "./components/layout/layout";

class App extends PureComponent {
  render() {
    return (
      <Auxiliary className="App">
        <Layout />
      </Auxiliary>
    );
  }
}

export default App;
