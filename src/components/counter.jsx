import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncreament = (number) => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <span className={this.changeBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncreament(5);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  changeBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
