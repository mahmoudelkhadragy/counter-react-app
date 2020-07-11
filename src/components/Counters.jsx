import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Counter />
          <Counter />
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
