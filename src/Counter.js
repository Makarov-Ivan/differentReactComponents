import React from "react";
import ItalicText from "../utils/ItalicText";

export default class CounterCP extends React.Component {
  state = {
    count: 200
  };

  increaseClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  decreaseClick = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    return React.createElement(
      "div",
      { className: "Counter" },
      React.createElement("h2", null, "i'm counter"),
      React.createElement(
        "button",
        { onClick: this.increaseClick },
        "click me to increase"
      ),
      React.createElement(
        "button",
        { onClick: this.decreaseClick },
        "click me to decrease"
      ),
      React.createElement("div", null, ItalicText(this.state.count))
    );
  }
}
