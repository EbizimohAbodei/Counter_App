import React, { Component } from "react";
import Button from "./Button";

class Main extends Component {
  // Defining our state "counter" that receive changes based on conditions set in handleClick.
  state = {
    counter: 0,
  };

  //Handles all button clicks

  handleClick = (e) => {
    // Ternary operation managing logical conditioning

    e.target.value === "add_five"
      ? this.setState({
          counter: this.state.counter + 5,
        })
      : e.target.value === "add_one"
      ? this.setState({
          counter: this.state.counter + 1,
        })
      : e.target.value === "remove_five" && this.state.counter >= 5
      ? this.setState({
          counter: this.state.counter - 5,
        })
      : e.target.value === "remove_one" && this.state.counter >= 1
      ? this.setState({
          counter: this.state.counter - 1,
        })
      : this.setState({
          counter: this.state.counter,
        });
  };

  //Resets the page, setting the displayed counter to zero
  reset = () => {
    window.location.reload();
  };
  render() {
    let className = "circle";
    if (this.state.counter % 2 === 1) {
      className += " odd";
    }
    return (
      <div className="main">
        <div className="counter">
          <div className={className}>{this.state.counter}</div>
        </div>
        <div className="buttons">
          <Button
            className="button five"
            type="primary"
            value={"add_five"}
            click={(e) => this.handleClick(e, "value")}
          >
            Add Five
          </Button>
          <Button
            className="button one"
            value={"add_one"}
            type="primary"
            click={(e) => this.handleClick(e, "value")}
          >
            Add One
          </Button>
          <Button className="button Reset" type="secondary" click={this.reset}>
            Reset
          </Button>
          <Button
            className="button Remove_one"
            value={"remove_one"}
            type="primary"
            click={(e) => this.handleClick(e, "value")}
          >
            Remove One
          </Button>
          <Button
            className="button Remove_five"
            value={"remove_five"}
            type="primary"
            click={(e) => this.handleClick(e, "value")}
          >
            remove five
          </Button>
        </div>
      </div>
    );
  }
}
export default Main;
