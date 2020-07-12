import React, { Component } from "react";

class Counter extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  // }
  // componentWillUnmount() {
  //   console.log("counter - unmounted");
  // }
  render() {
    return (
      <React.Fragment>
        <h3 className="text-center">Counter #{this.props.counter.id}</h3>
        <div className="row">
          <div className="co-1">
            <span className={this.changeBadgeClass()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncreament(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecreament(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.disabledButton()}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  changeBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  disabledButton() {
    const { value } = this.props.counter;
    return value === 0 ? "disabled" : "";
  }
}

export default Counter;
