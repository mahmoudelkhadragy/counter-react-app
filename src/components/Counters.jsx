import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const { counters } = this.props;
    if (counters.length === 0)
      return <p className="text-center">There is no Counters</p>;
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            onDelete={this.props.onDelete}
            onIncreament={this.props.onIncreament}
            key={counter.id}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
